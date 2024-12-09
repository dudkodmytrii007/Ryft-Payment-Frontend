<script lang="ts" setup>
  const { isOnline } = defineProps({
    isOnline: Boolean
  })
</script>

<template>
  <div class="user-status" :class="{ 'online': isOnline }"></div>
</template>

<style scoped>
  .user-status {
    display: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  .online {
    display: flex;
    background-color: #64B385;
    border: 4px solid var(--color-background-primary);
  }
</style>