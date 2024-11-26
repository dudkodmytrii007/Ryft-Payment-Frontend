<script lang="ts" setup>
  import UserStatus from '../shared/UserStatus.vue'

  const { chat } = defineProps(['chat'])
</script>

<template>
  <li class="chats-item">
    <router-link :to="`/chat/${chat.chatId}`">
      <img :src="chat.avatar" :alt="chat.name" class="avatar" />
      <UserStatus class="user-status" :isOnline="chat.isOnline"/>
      <h3 class="name">{{ chat.name }}</h3>
      <p class="last-msg">Ostatnia wiadomość</p>
      <span class="badge">2</span>
    </router-link>
  </li>
</template>

<style scoped>
  .chats-item a {
    position: relative;
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 94px;
    display: grid;
    align-items: center;
    grid-template-columns: 58px 1fr 35px;
    grid-template-rows: 1fr 1fr;
    column-gap: 15px;
    padding: 18px 30px;
  }

  .chats-item a:hover {
    border-left: 2px solid var(--color-special-accent);
    padding-left: 28px;
  }

  .avatar {
    width: 58px;
    height: 58px;
    object-fit: cover;
    grid-column: 1;
    grid-row: span 2;
    border-radius: 50%;
  }

  .user-status {
    position: absolute;
    left: 69px;
    bottom: 18px;
  }

  .chats-item a:hover .user-status {
    left: 66px;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-column: 2;
    grid-row: 1;
    font-weight: 600;
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
    min-width: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3;
    grid-row: span 2;
    justify-self: right;
    padding: 0 5px;
    border-radius: 10px;
    font-size: 85%;
    font-weight: bold;
    background-color: var(--color-special-allert);
    color: var(--color-text-main);
    box-shadow: 0 0 5px var(--color-special-allert);
  }
</style>