<script setup lang="ts">
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <header></header>

  <main>
    <RouterView />
  </main>

  <Navigation />
</template>

<style scoped type="scss">
  header {
    width: 100%;
    height: 30%;
  }

  main {
    width: 100%;
    height: 70%;
  }
</style>
