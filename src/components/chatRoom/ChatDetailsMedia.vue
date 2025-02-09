<script lang="ts" setup>
  const { isMediaExpanded } = defineProps(['isMediaExpanded']);
</script>
  
<template>
  <ul>
    <li>
      <img src="https://www.heraldtribune.com/gcdn/presto/2023/08/14/NSHT/b1dd8bbd-1f11-4b7b-8cc0-a1c756e091b0-fbh_imgnational001.jpg?crop=2999,1687,x0,y422&width=2999&height=1687&format=pjpg&auto=webp" alt="">
    </li>

    <li v-if="isMediaExpanded==false">+5</li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  li {
    width: 65.5px;
    height: 65.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-element-secondary);
    border-radius: 16px;
  }

  li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  li img:hover {
    transform: scale(0.95);
  }
</style>