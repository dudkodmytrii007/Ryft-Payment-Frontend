<script lang="ts" setup></script>

<template>
  <select name="my-chat-selection" id="chat-nav-select">
    <option value="all">All</option>
  </select>
</template>

<style scoped>
  #chat-nav-select {
    background-color: var(--color-background-main);
    color: var(--color-text-main);
    border: 0;
    outline: none;
  }

  #chat-nav-select option {
    background-color: red;
  }
</style>