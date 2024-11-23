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
    <div class="chat-nav-top">
      <h2 class="chat-nav-title">Messages</h2>

      <select name="myChats" id="myChats">
        <option value="all">All</option>
      </select>
    </div>

    <input type="text" placeholder="Search" class="chat-nav-input">

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

  .chat-nav-top {
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

  .chat-nav-input {
    width: 100%;
    height: 40px;
    border-radius: 12px;
    background-color: var(--color-background-second);
    border: none;
    outline: none;
  }

  .chat-nav-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>