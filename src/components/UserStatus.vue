<script type="ts" setup>
  const props = defineProps({
    isOnline: Boolean
  })
</script>

<template>
  <div class="user-status" :class="{ 'online': props.isOnline }"></div>
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
    border: 3px solid var(--color-background-second);
  }
</style>