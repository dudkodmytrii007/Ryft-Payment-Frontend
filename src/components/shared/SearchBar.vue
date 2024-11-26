<script lang="ts" setup>
  import IconSearch from '@/assets/icons/IconSearch.vue'
</script>

<template>
  <div class="search-bar">
    <input type="text" placeholder="Search">
    <IconSearch class="icon" />
  </div>
</template>

<style scoped>
  .search-bar {
    width: 100%;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-bar input {
    width: 100%;
    height: 100%;
    padding: 0 12px 0 46px;
    border-radius: 12px;
    background-color: var(--color-background-second);
    border: none;
    outline: none;
    color: var(--color-text-main);
  }

  .search-bar input::placeholder {
    color: var(--color-text-second);
  }

  .icon {
    position: absolute;
    width: 22px;
    height: max-content;
    margin-left: 12px;
    fill: var(--color-icon);
    pointer-events: none;
  }
</style>