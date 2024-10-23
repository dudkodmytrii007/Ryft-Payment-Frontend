<script setup lang="ts">
  import IconSearch from '../components/icons/IconSearch.vue'
</script>

<template>
  <div class="SearchForm">
    <input type="text" placeholder="Wyszukiwanie" class="SearchForm__input">
    <IconSearch class="SearchForm__icon" />
  </div>
</template>

<style scoped lang="scss">
  .SearchForm {
    width: 85%;
    height: 44px;
    position: relative;
  }

  .SearchForm__input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0;
    padding: 0 62px 0 20px;
    outline: none;
    font-size: 100%;
    background-color: var(--color-text2);
    color: var(--color-text1);
  }

  .SearchForm__input::placeholder {
    color: var(--color-icon);
  }

  .SearchForm__icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 22px;
    width: max-content;
    fill: var(--color-text1);
    pointer-events: none;
  }
</style>