<script lang="ts" setup></script>

<template>
  <select name="chats-select" id="chats-select">
    <option value="all">All</option>
  </select>
</template>

<style scoped>
  #chats-select {
    background-color: var(--color-background-main);
    color: var(--color-text-main);
    border: 0;
    outline: none;
  }

  #chats-select option {
    background-color: red;
  }
</style>