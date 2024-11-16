<template>
  <li class="chatItem">
    <img :src="chat.picture.thumbnail" :alt="`Profile picture of ${chat.name.first} ${chat.name.last}`" class="chatItem__avatar" />
    <h3 class="chatItem__username">{{ chat.name.first }} {{ chat.name.last }}</h3>
    <p class="chatItem__lastMsg">Ostatnia wiadomość</p>
    <span class="chatItem__badge">1</span>
    <span class="chatItem__lastActive">6:49 PM</span>
  </li>
</template>

<script lang="ts" setup>
  const { chat } = defineProps(['chat'])
  console.log(chat)
</script>

<style lang="scss" scoped>
  .chatItem {
    position: relative;
    height: 82px;
    display: grid;
    grid-template-columns: 50px 2.8fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 12px;
    padding: 16px;
  }

  .chatItem:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 12px;
    width: calc(100% - 24px);
    height: 1px;
    background-color: var(--color-background2);
  }

  .chatItem:hover {
    cursor: pointer;
    background-color: var(--color-background2);
  }

  .chatItem__avatar {
    width: 50px;
    height: 50px;
    grid-row: span 2;
    border-radius: 50%;
    object-fit: cover;
  }

  .chatItem__username {
    grid-column: 2;
    grid-row: 1;
    align-self: end;
  }

  .chatItem__lastMsg {
    grid-column: 2;
    grid-row: 2;
    align-self: start;
    font-size: 90%;
    color: var(--color-text2);
  }

  .chatItem__lastActive {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    font-size: 90%;
    color: var(--color-icon);
  }

  .chatItem__badge {
    width: 17px;
    height: 17px;
    grid-column: 3;
    grid-row: 2;
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--c-red);
    color: var(--color-background1);
    border-radius: 50%;
    font-size: 80%;
    font-weight: bold;
  }

  .chatItem:hover > .chatItem__badge {
    color: var(--color-background2);
  }
</style>