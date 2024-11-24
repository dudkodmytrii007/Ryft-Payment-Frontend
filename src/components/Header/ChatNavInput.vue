<script lang="ts" setup></script>

<template>
  <div class="chat-nav-input">
    <input type="text" placeholder="Search">
  </div>
</template>

<style scoped>
  .chat-nav-input {
    width: 100%;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .chat-nav-input input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border-radius: 12px;
    background-color: var(--color-background-second);
    border: none;
    outline: none;
    color: var(--color-text-main);
  }
</style>