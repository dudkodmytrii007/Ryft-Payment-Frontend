<script lang="ts" setup>
  import IconPlus from '@/assets/icons/IconPlus.vue';
  import IconSend from '@/assets/icons/IconPaperPlane.vue';
</script>

<template>
  <div class="input-container">
    <input type="text" placeholder="Your message..." />
    <IconPlus class="icon icon-plus" />
    <IconSend class="icon icon-send" />
  </div>
</template>

<style scoped>
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
  }

  input {
    height: 42px;
    flex: 1;
    border-radius: 12px;
    padding: 0 47px 0 51px;
    background-color: var(--color-element-secondary);
    border: none;
    outline: none;
    color: var(--color-text-primary);
  }

  input::placeholder {
    color: var(--color-text-secondary);
  }

  .icon {
    position: absolute;
    width: 22px;
    height: 22px;
    transform-origin: center;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .icon-plus {
    left: 30px;
    background-color: var(--color-accent-primary);
    fill: var(--color-element-secondary);
    border-radius: 14px;
    padding: 2px;
    box-sizing: content-box;
  }

  .icon-send {
    right: 30px;
    fill: var(--color-accent-primary);
    transform: rotate(-26deg);
  }

  .icon:hover {
    transform: scale(0.92);
  }
</style>