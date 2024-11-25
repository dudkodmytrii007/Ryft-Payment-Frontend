<script lang="ts" setup>
  import Chats from './components/Header/Chats.vue'
</script>

<template>
  <header>
    <Chats />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 0;
    padding: 20px 30px 0 30px;
  }

  main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    z-index: 1;
  }

  @media (min-width: 768px) {
    header {
      width: 380px;
      border-right: 2px solid var(--color-background-second);
    }

    main {
      position: static;
      width: calc(100% - 380px);
      transform: none;
    }
  }
</style>