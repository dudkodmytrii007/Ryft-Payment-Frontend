<script lang="ts" setup>
  import arrowIcon from '../components/icons/arrow.icon.vue'
  import chatItem from '../components/chat/ChatItem.vue'
  import axiosInstance from '../services/axiosInstance'
  import { ref, onMounted } from 'vue'

  const chats = ref([])

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post('chat/getChats', {
        userId: '8f8bcbd7-16aa-44ae-ba6d-764db0ca7f2e'
      })
      chats.value = response.data
      console.log(response.data)
    } catch (error) {
      console.error('Error while downloading data:', error)
    }
  }

  onMounted(() => {
    fetchData()
  })
</script>

<template>
  <div class="chats">
    <h3 class="chats-title3">
      <arrowIcon class="chats-title3-icon" /> All Messages
    </h3>
    <ul class="chats-list">
      <chatItem v-for="chat in chats" :key="chat.userId" :chat="chat" />
    </ul>
  </div>

  <div class="chat-messages"></div>
</template>

<style scoped>
  .chats {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .chats-title3 {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 5px;
    color: var(--color-text-second);
  }

  .chats-title3-icon {
    width: 27px;
    height: auto;
    fill: var(--color-main);
    transform: rotate(-90deg);
  }

  .chats-list {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer, Edge */
  }

  /* Chrome, Safari, Opera */
  .chats-list::-webkit-scrollbar {
    display: none;
  }

  .chat-messages {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
  }

  /* Media query for larger screens */
  @media (min-width: 768px) {
    .chats {
      width: 380px;
    }

    .chat-messages {
      position: static;
      width: calc(100% - 380px);
      transform: none;
    }
  }
</style>