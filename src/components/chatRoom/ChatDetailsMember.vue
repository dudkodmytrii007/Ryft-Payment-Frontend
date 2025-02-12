<script lang="ts" setup>
  import { defineProps } from 'vue';

  const { member } = defineProps(['member']);
</script>

<template>
  <li>
    <img :src="member.avatar" :alt="member.name">
    {{ member.name }}
  </li>
</template>

<style scoped>
  li {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 14px;
  }
</style>
