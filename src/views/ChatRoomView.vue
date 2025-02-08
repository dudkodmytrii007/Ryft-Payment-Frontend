<script lang="ts" setup>
  import TopOverlay from '@/components/chatRoom/TopOverlay.vue';
  import MsgBoard from '@/components/chatRoom/MsgBoard.vue';
  import ChatInput from '@/components/chatRoom/ChatInput.vue';
  import ChatDetails from '@/components/chatRoom/ChatDetails.vue';
</script>

<template>
  <div class="chat-container">
    <TopOverlay />
    <MsgBoard />
    <ChatInput />
  </div>

  <ChatDetails />
</template>

<style scoped>
  .chat-container {
    position: relative;
    flex: 1;
    min-width: 0;
  }
</style>