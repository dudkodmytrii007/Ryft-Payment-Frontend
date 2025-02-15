<script lang="ts" setup>
  import { defineProps } from 'vue';
  import IconCrown from '@/assets/icons/IconCrown.vue';
  import IconShield from '@/assets/icons/IconShield.vue';

  const { member } = defineProps(['member']);
</script>

<template>
  <li>
    <img :src="member.avatar" :alt="member.name">

    {{ member.name }}

    <IconCrown class="role" v-if="member.role=='owner'" />
    <IconShield class="role" v-if="member.role=='moderator'" />
  </li>
</template>

<style scoped>
  li {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 14px;
  }

  .role {
    width: 18px;
    height: max-content;
    fill: var(--color-accent-secondary);
  }
</style>
