<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import axiosInstance from '../../services/axiosInstance'

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
    <div class="chat-nav-header">
      <h2 class="chat-nav-title">Messages</h2>

      <select name="myChats" id="myChats">
        <option value="all">All</option>
      </select>
    </div>

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
  }

  .chat-nav-header {
    display: grid;
    grid-template-columns: auto 80px;
    align-items: center;
  }

  .chat-nav-title {
    font-size: 140%;
    font-weight: 500;
  }

  #myChats {
    background-color: var(--color-background-main);
    color: var(--color-text-main);
    border: 0;
    outline: none;
  }

  #myChats option {
    background-color: red;
  }

  .chat-nav-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>