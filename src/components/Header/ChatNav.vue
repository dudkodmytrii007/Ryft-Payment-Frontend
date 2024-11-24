<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import axiosInstance from '../../services/axiosInstance'

  import ChatNavSelect from './chatNavSelect.vue'
  import ChatNavInput from './ChatNavInput.vue'
  import ChatNavItem from './ChatNavItem.vue'

  const myChats = ref([])

  async function getChats() {
    try {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        console.error('User ID is missing or invalid');
        return;
      }

      const response = await axiosInstance.post('chat/getChats', {
        userId: userId
      });

      myChats.value = response.data;
      
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  }

  onMounted(() => {
    getChats()
  });
</script>

<template>
  <nav class="chat-nav">
    <div class="chat-nav-top">
      <h2 class="chat-nav-title">Messages</h2>

      <ChatNavSelect />
    </div>

    <ChatNavInput />

    <ul class="chat-nav-list" v-for="chat in myChats" :key="chat.chatId">
      <ChatNavItem :chat="chat" />
    </ul>
  </nav>
</template>

<style scoped>
  .chat-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .chat-nav-top {
    display: grid;
    grid-template-columns: auto 80px;
    align-items: center;
  }

  .chat-nav-title {
    font-size: 140%;
    font-weight: 500;
  }

  .chat-nav-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>