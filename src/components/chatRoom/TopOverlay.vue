<script lang="ts" setup></script>

<template>
  <div class="top">
    <div class="item">
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="avatar">
      <span class="name">Chat name</span>
    </div>
  </div>
</template>

<style scoped>
  .top {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .avatar {
    width: 42px;
    height: 42px;
    object-fit: cover;
    border-radius: 12px;
  }

  .name {
    font-weight: bold;
  }
</style>