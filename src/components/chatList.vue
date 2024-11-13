<template>
  <ul class="chatList" role="list">
    <li
      v-for="chat in chats"
      :key="chat.login.uuid"
      class="chatList__item"
      role="listitem"
    >
      <div class="chatList__avatar">
        <img
          :src="chat.picture.thumbnail"
          :alt="`${chat.name.first} ${chat.name.last}`"
          class="chatList__avatarImage"
        />
        <span class="chatList__status"></span>
      </div>
      <div class="chatList__content">
        <h3 class="chatList__name">{{ chat.name.first }} {{ chat.name.last }}</h3>
        <time class="chatList__lastActive">5 min</time>
        <p class="chatList__lastMessage">Jakaś ostatnia wiadomość</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  const { chats } = defineProps(['chats'])
</script>

<style scoped lang="scss">
  .chatList {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // Internet Explorer, Edge
  }

  .chatList::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  .chatList__item {
    width: 100%;
    padding: 10px 16px;
    display: grid;
    grid-template-columns: 62px 1fr;
    gap: 12px;
    align-items: center;
    list-style: none;
  }

  .chatList__avatar {
    position: relative;
    width: 56px;
    height: 56px;
    overflow: hidden;
  }

  .chatList__avatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .chatList__status {
    position: absolute;
    width: 17px;
    height: 17px;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background-color: var(--color-s-online);
    border: 3px solid var(--color-background1);
  }

  .chatList__content {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 4px;
  }

  .chatList__name {
    font-weight: 600;
    grid-column: 1 / 2;
  }

  .chatList__lastActive {
    grid-column: 2 / 3;
    justify-self: end;
    color: var(--color-main);
    font-weight: 600;
  }

  .chatList__lastMessage {
    grid-column: 1 / 3;
    width: max-content;
    color: var(--color-text2);
    font-weight: 300;
  }
</style>