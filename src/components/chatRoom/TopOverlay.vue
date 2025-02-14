<script lang="ts" setup>
  import { defineModel } from 'vue';
  import IconSettings from '@/assets/icons/IconSettings.vue';

  const chatDetailsOpen = defineModel();
</script>

<template>
  <div class="top">
    <div class="chat-tag">
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="avatar">
      <span class="name">Chat name</span>
    </div>

    <IconSettings class="icon-settings" v-show="!chatDetailsOpen" @click="chatDetailsOpen = true" />
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

  .icon-settings {
    width: 28px;
    height: max-content;
    fill: var(--color-icon-primary);
    transition: 0.2s ease-in-out;
  }

  .icon-settings:hover {
    cursor: pointer;
    scale: 1.04;
    fill: var(--color-icon-secondary);
  }
</style>