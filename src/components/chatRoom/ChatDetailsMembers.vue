<script lang="ts" setup>
  const { isMembersExpanded } = defineProps(['isMembersExpanded']);
</script>
  
<template>
  <ul>
    <li>
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="">
      Name Lastname
    </li>

    <li>
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="">
      Name Lastname
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li img {
    width: 26px;
    height: 26px;
    object-fit: cover;
    border-radius: 10px;
  }
</style>