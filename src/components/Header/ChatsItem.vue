<script lang="ts" setup>
  const { chat } = defineProps(['chat'])
</script>

<template>
  <li class="chats-item">
    <router-link :to="`/chat/${chat.chatId}`">
      <img :src="chat.avatar" :alt="chat.name" class="avatar" />
      <h3 class="name">{{ chat.name }}</h3>
      <p class="last-msg">Ostatnia wiadomość</p>
      <span class="badge">2</span>
    </router-link>
  </li>
</template>

<style scoped>
  .chats-item {
    width: 100%;
    height: 88px;
    display: grid;
    align-items: center;
    grid-template-columns: 58px 1fr 35px;
    grid-template-rows: 1fr 1fr;
    column-gap: 15px;
    padding: 15px 0;
  }

  .chats-item a {
    display: contents;
    text-decoration: none;
    color: inherit;
  }

  .avatar {
    width: 58px;
    height: 58px;
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
    font-weight: 500;
  }

  .last-msg {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-column: 2;
    grid-row: 2;
    color: var(--color-text-second);
    font-size: 92%;
  }

  .badge {
    height: 22px;
    min-width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3;
    grid-row: span 2;
    justify-self: center;
    padding: 0 6px;
    border-radius: 10px;
    font-size: 85%;
    font-weight: bold;
    background-color: var(--color-special-allert);
    color: var(--color-text-main);
    box-shadow: 0 0 5px var(--color-special-allert);
  }
</style>