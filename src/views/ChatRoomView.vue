<script lang="ts" setup>
  import { ref } from 'vue';
  import TopOverlay from '@/components/chatRoom/TopOverlay.vue';
  import MsgBoard from '@/components/chatRoom/MsgBoard.vue';
  import ChatInput from '@/components/chatRoom/ChatInput.vue';
  import ChatDetails from '@/components/chatRoom/ChatDetails.vue';

  const chatDetailsOpen = ref(false);
</script>

<template>
  <div class="chat-container" >
    <TopOverlay v-model="chatDetailsOpen" />
    <MsgBoard />
    <ChatInput />
  </div>

  <ChatDetails v-show="chatDetailsOpen" v-model="chatDetailsOpen" class="chat-details" />
</template>

<style scoped>
  .chat-container {
    position: relative;
    flex: 1;
  }
</style>