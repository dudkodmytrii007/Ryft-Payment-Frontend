<script lang="ts" setup>
  import MyProfil from '@/components/header/MyProfil.vue'
  import Chats from '@/components/header/Chats.vue'
</script>

<template>
  <header>
    <MyProfil />
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
    gap: 35px;
    padding-top: 20px;
  }

  main {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    transform: translateX(100%);
    z-index: 1;
  }

  @media (min-width: 768px) {
    header {
      width: 380px;
      border-right: 2px solid var(--color-background-secondary);
    }

    main {
      position: static;
      min-width: 0;
      flex: 1;
      transform: none;
    }
  }
</style>