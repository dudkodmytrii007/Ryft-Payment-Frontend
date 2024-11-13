<template>
  <div class="inBox">
    <span>New</span>
    <chatList :chats="myChats" />
    <span>Other</span>
    <chatList :chats="myChats" />
  </div>

  <div class="chat"></div>
</template>

<script lang="ts" setup>
  import axios from '../services/axios'
  import { ref } from 'vue'
  import chatList from '../components/chatList.vue'

  const myChats = ref([])

  const fetchData = async () => {
    try {
      const response = await axios.get('?results=10')
      myChats.value = response.data.results
    } catch (error) {
      console.error('Error while downloading data:', error)
    }
  }

  fetchData()
</script>

<style scoped lang="scss">
  .inBox {
    width: 100%;
  }

  .chat {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
  }

  @media (min-width: 768px) {
    .inBox {
      width: 380px;
    }

    .chat {
      position: static;
      width: calc(100% - 380px);
      transform: none;
    }
  }
</style>