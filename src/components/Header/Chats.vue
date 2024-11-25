<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import axiosInstance from '../../services/axiosInstance'

  import ChatsSelect from './ChatsSelect.vue'
  import SearchBar from '../shared/SearchBar.vue'
  import ChatsItem from './ChatsItem.vue'

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
  <div class="chats">
    <div class="chats-top">
      <h2>Messages</h2>

      <ChatsSelect />
    </div>

    <SearchBar />

    <ul>
      <ChatsItem v-for="chat in myChats" :key="chat.chatId" :chat="chat" />
    </ul>
  </div>
</template>

<style scoped>
  .chats {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .chats-top {
    display: grid;
    grid-template-columns: auto 80px;
    align-items: center;
  }

  .chats-top h2 {
    font-size: 140%;
    font-weight: 500;
  }

  .chats ul {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>