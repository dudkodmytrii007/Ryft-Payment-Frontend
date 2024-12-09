<script lang="ts" setup></script>

<template>
  <div class="my-profil">
    <div class="my-profil-top">
      <img src="https://avatars.githubusercontent.com/u/60962478" alt="name" class="avatar">
      <div class="name">Name Lastname</div>
      <div class="my-status">Online</div>
    </div>
  </div>
</template>

<style scoped>
  .my-profil {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
  }

  .my-profil-top {
    display: grid;
    align-items: center;
    grid-template-columns: 65px 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 15px;
  }

  .avatar {
    width: 65px;
    height: 65px;
    object-fit: cover;
    grid-column: 1;
    grid-row: span 2;
    border-radius: 50%;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-column: 2;
    grid-row: 1;
    font-weight: 700;
  }

  .my-status {
    grid-column: 2;
    grid-row: 2;
    color: var(--color-status-online);
  }
</style>