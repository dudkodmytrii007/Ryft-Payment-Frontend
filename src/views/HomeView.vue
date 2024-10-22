<script setup lang="ts">
  import IconSearch from '../components/icons/IconSearch.vue'
</script>

<template>
  <form>
    <input type="text" placeholder="Wyszukaj">
    <IconSearch class="icon" id="IconSearch" />
  </form>
</template>

<style scoped lang="scss">
  form {
    width: 80%;
    height: 40px;
  }

  input {
    
  }

  .icon {
    width: 30px;
    height: max-content;
    fill: var(--color-text);
  }
</style>