<template>
  <li class="no-chats">
    <div class="avatar"></div>
    <div class="name"></div>
    <div class="last-msg"></div>
  </li>
</template>

<style scoped>
  .no-chats {
    position: relative;
    width: 100%;
    height: 94px;
    display: grid;
    align-items: center;
    grid-template-columns: 58px 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 15px;
    padding: 18px 30px;
  }

  .no-chats:not(:last-child)::after {
    content: '';
    position: absolute;
    width: calc(100% - 60px);
    height: 1px;
    bottom: 0;
    left: 30px;
    background-color: var(--color-background-secondary);
  }

  .avatar {
    width: 58px;
    height: 58px;
    grid-column: 1;
    grid-row: span 2;
    border-radius: 50%;
    background-color: var(--color-background-secondary);
  }

  .name {
    height: 10px;
    width: 40%;
    grid-column: 2;
    grid-row: 1;
    border-radius: 14px;
    background-color: var(--color-background-secondary);
  }

  .last-msg {
    height: 10px;
    width: 70%;
    grid-column: 2;
    grid-row: 2;
    border-radius: 14px;
    background-color: var(--color-background-secondary);
  }
</style>