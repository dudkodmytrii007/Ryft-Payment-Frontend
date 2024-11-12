<script setup lang="ts">
  import chatList from '../components/chatList.vue'
</script>

<template>
  <div class="inBox">
    <span>New</span>
    <chatList />
    <span>Other</span>
    <chatList />
  </div>

  <div class="chat"></div>
</template>

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