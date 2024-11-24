<script lang="ts" setup>
  const { chat } = defineProps(['chat'])
</script>

<template>
  <router-link :to="`/chat/${chat.chatId}`">
    <li class="chat-item">
      <img :src="chat.avatar" :alt="`Profile picture of ${chat.name}`" class="chat-item-avatar" />
      <h4 class="chat-item-username">{{ chat.name }}</h4>
      <p class="chat-item-lastmsg">Ostatnia wiadomość</p>
      <span class="chat-item-badge">4</span>
      <span class="chat-item-lastactive">6:49 PM</span>
    </li>
  </router-link>
</template>

<style scoped>
  .chat-item {
    position: relative;
    height: 91px;
    display: grid;
    grid-template-columns: 55px 2.8fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 18px;
    padding: 18px 0;
  }

  .chat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25px;
    width: calc(100% - 50px);
    height: 1px;
    background-color: var(--color-background-second);
  }

  .chat-item:hover {
    cursor: pointer;
    background-color: var(--color-background-second);
    border-left: 2px solid var(--color-special-accent);
  }

  .chat-item-avatar {
    width: 55px;
    height: 55px;
    grid-row: span 2;
    border-radius: 50%;
    object-fit: cover;
  }

  .chat-item-username {
    grid-column: 2;
    grid-row: 1;
    align-self: end;
    color: var(--color-text-main);
  }

  .chat-item-lastmsg {
    grid-column: 2;
    grid-row: 2;
    align-self: start;
    font-size: 90%;
    color: var(--color-text-second);
  }

  .chat-item-lastactive {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    font-size: 90%;
    color: var(--color-icon);
  }

  .chat-item-badge {
    width: max-content;
    min-width: 17px;
    height: 17px;
    grid-column: 3;
    grid-row: 2;
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-red);
    color: var(--color-background-main);
    border-radius: 14px;
    font-size: 80%;
    font-weight: bold;
    padding: 3px;
  }

  .chat-item:hover > .item-badge {
    color: var(--color-background-second);
  }
</style>