<template>
  <div class="chats">
    <ul class="chats__list">
      <chatItem v-for="chat in chats" :chat="chat" />
    </ul>
  </div>

  <div class="chatMessages"></div>
</template>

<script lang="ts" setup>
  import chatItem from '../components/chat/_chatItem.vue'
  import axios from '../services/axios'
  import { ref, onMounted } from 'vue'

  const chats = ref([])

  const fetchData = async () => {
    try {
      const response = await axios.get('?results=30')
      chats.value = response.data.results
    } catch (error) {
      console.error('Error while downloading data:', error)
    }
  }

  onMounted(() => {
    fetchData()
  })
</script>

<style scoped lang="scss">
  // chats (list on the left)
  .chats {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .chats__list {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // Internet Explorer, Edge
  }

  .chat__list::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  // chat messages (window on the right)
  .chatMessages {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
  }

  // Responsive
  @media (min-width: 768px) {
    .chats {
      width: 380px;
    }

    .chatMessages {
      position: static;
      width: calc(100% - 380px);
      transform: none;
    }
  }
</style>