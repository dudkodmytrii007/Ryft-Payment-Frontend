<script setup lang="ts">
  import MyProfile from './components/MyProfil.vue'
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <MyProfile />

  <main>
    <RouterView />
  </main>

  <Navigation />
</template>

<style scoped type="scss">
  main {
    width: 100%;
    height: calc(72% + 30px);
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 35px 35px 0 0;
    background-color: var(--color-contrast1);
  }
</style>
