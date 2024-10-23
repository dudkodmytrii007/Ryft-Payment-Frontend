<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>

  <Navigation />
</template>

<style scoped type="scss">
  main {
    width: 100%;
    height: calc(100% - 72px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
