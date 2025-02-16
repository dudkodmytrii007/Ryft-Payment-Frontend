<script lang="ts" setup>
  import { defineModel } from 'vue';

  const chatDetailsOpen = defineModel();
</script>

<template>
  <div class="top">
    <div class="chat-tag">
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="avatar">
      <span class="name">Chat name</span>
    </div>

    <button v-show="!chatDetailsOpen" @click="chatDetailsOpen = true">
      <div class="btn-line1"></div>
      <div class="btn-line2"></div>
      <div class="btn-line1"></div>
    </button>
  </div>
</template>

<style scoped>
  .top {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .chat-tag {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .avatar {
    width: 42px;
    height: 42px;
    object-fit: cover;
    border-radius: 14px;
  }

  .name {
    font-weight: bold;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .btn-line1, .btn-line2 {
    width: 24px;
    height: 3px;
    background-color: var(--color-text-primary);
    transition: 0.2s ease-in-out;
    border-radius: 14px;
  }

  .btn-line2 {
    width: 20px;
    translate: 2px;
  }

  button:hover .btn-line1 {
    translate: 3px;
  }

  button:hover .btn-line2 {
    translate: -3px;
  }
</style>