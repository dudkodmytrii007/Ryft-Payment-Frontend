<script lang="ts" setup>
  import { ref, onMounted, watch, nextTick } from 'vue';
  import { useRoute } from 'vue-router';
  import axiosInstance from '@/services/axiosInstance';

  interface Message {
    chatId: string;
    authorId: string;
    avatar: string;
    name: string;
    text: string;
    date: Date;
  }

  const route = useRoute();
  const myUserId = ref(localStorage.getItem("userId"));
  const chatMsg = ref<Message[]>([]);
  const page = ref(1);
  const totalPages = ref(0);
  const chatContainer = ref<HTMLElement | null>(null);
  const loadingPage = ref(false);

  async function getChatMsg() {
    const urlChatId = route.params.chatId;

    if (!urlChatId) {
      console.error("Chat ID is missing or invalid");
      return;
    }

    if (!myUserId.value) {
      console.error("User ID is missing or invalid");
      return;
    }

    try {
      const response = await axiosInstance.post('chat/getChatMessages', {
        "chatId": urlChatId,
        "userId": myUserId.value,
        "page": page.value,
        "pageSize": 20
      })

      if (!loadingPage.value) {
        chatMsg.value = response.data.messages;

      }else {
        const oldHeight = chatContainer.value?.scrollHeight || 0;
        const oldScrollTop = chatContainer.value?.scrollTop || 0;

        chatMsg.value.push(...response.data.messages);
        await nextTick();

        const newHeight = chatContainer.value?.scrollHeight || 0;
        chatContainer.value!.scrollTop = oldScrollTop + (newHeight - oldHeight);

        loadingPage.value = false;
      }

      totalPages.value = response.data.totalPages;

    } catch(error) {
      console.error("Error fetching chat messages:", error);
    }
  }

  function onScroll() {
    if (!chatContainer.value) return;

    if (chatContainer.value.scrollTop === 0 && page.value < totalPages.value && !loadingPage.value) {
      loadingPage.value = true;
      page.value++;
      getChatMsg();
    }
  }

  onMounted(() => {
    getChatMsg();
  });

  watch(() => route.params.chatId, async () => {
    chatMsg.value = [];
    page.value = 1;
    await getChatMsg();
  });
</script>

<template>
  <div class="shadow top-shadow"></div>

  <ul @scroll="onScroll" ref="chatContainer">
    <li
      v-for="msg in chatMsg"
      :key="msg.chatId"
      :class="{ received: msg.authorId !== myUserId, sent: msg.authorId === myUserId }"
    >
      <img
        :src="msg.avatar"
        :alt="msg.name"
        class="avatar"
      >
      <span class="author">{{ msg.name }} | {{ msg.date }}</span>
      <p class="message">{{ msg.text }}</p>
    </li>
  </ul>

  <div class="shadow bottom-shadow"></div>
</template>

<style scoped>
  .shadow {
    position: absolute;
    left: 0;
    width: 100%;
    height: 40px;
  }

  .top-shadow {
    background: linear-gradient(var(--color-background-primary), rgba(0, 0, 0, 0));
  }

  .bottom-shadow {
    bottom: 62px;
    background: linear-gradient(rgba(0, 0, 0, 0), var(--color-background-primary));
  }

  ul {
    height: calc(100vh - 70px - 62px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 32px;
    padding: 20px;
  }

  li {
    display: grid;
    grid-template-columns: 36px auto;
    grid-template-rows: auto auto;
    column-gap: 14px;
    row-gap: 6px;
  }

  .sent {
    grid-template-columns: auto 36px;
    justify-items: right;
    align-self: flex-end;
  }

  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 14px;
    grid-row: span 2;
  }

  .author {
    grid-column: 2;
    grid-row: 1;
    font-weight: 500;
  }

  .message {
    width: fit-content;
    padding: 6px 16px;
    background-color: var(--color-element-primary);
    color: var(--color-pure-white);
    grid-column: 2;
  }

  .sent .avatar {
    grid-column: 2;
  }

  .sent .author {
    grid-column: 1;
  }

  .sent .message {
    grid-column: 1;
    background-color: var(--color-accent-primary);
    color: var(--color-white);
  }

  .message:first-of-type {
    border-radius: 8px 20px 20px 8px;
  }

  .message:last-of-type {
    border-radius: 8px 20px 20px 20px;
  }

  .message:not(:first-of-type):not(:last-of-type) {
    border-radius: 8px 20px 20px 8px;
  }

  .sent .message:first-of-type {
    border-radius: 20px 8px 8px 20px;
  }

  .sent .message:last-of-type {
    border-radius: 20px 8px 20px 20px;
  }

  .sent .message:not(:first-of-type):not(:last-of-type) {
    border-radius: 20px 8px 8px 20px;
  }
</style>
