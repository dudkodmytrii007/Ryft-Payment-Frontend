<template>
  <div class="chats">
    <h3 class="chats__title3">
      <arrowIcon class="chats__icon" /> All Messages
    </h3>
    <ul class="chats__list">
      <chatItem v-for="chat in chats" :key="chat.userId" :chat="chat" />
    </ul>
  </div>

  <div class="chatMessages"></div>
</template>

<script lang="ts" setup>
  import arrowIcon from '../components/icons/arrow.icon.vue'
  import chatItem from '../components/chat/item.chat.vue'
  import axios from '../services/axios'
  import { ref, onMounted } from 'vue'

  const chats = ref([])

  const fetchData = async () => {
    try {
      const response = await axios.post('chat/getChats', {
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

<style scoped lang="scss">
  // chats (list on the left)
  .chats {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .chats__title3 {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 5px;
    color: var(--color-text-second);
  }

  .chats__icon {
    width: 27px;
    height: max-content;
    fill: var(--color-main);
    transform: rotate(-90deg);
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