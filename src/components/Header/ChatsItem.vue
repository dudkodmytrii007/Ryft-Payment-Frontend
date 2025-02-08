<script lang="ts" setup>
  import { computed } from 'vue';
  import UserStatus from '@/components/shared/UserStatus.vue';

  const { chat } = defineProps(['chat']);

  const userId = sessionStorage.getItem('userId');

  const chatMeta = computed(() => {
    const lastAuthor =
      userId && userId === chat.lastUnreadMessageAuthorId
        ? 'You'
        : chat.lastAuthor;

    const unreadMsgBadge = chat.unreadMessagesAmount
      ? chat.unreadMessagesAmount > 9
        ? '+9'
        : chat.unreadMessagesAmount
      : null;

    return { lastAuthor, unreadMsgBadge };
  });
</script>

<template>
  <li class="chats-item">
    <router-link :to="`/chat/:${chat.chatId}`">
      <img :src="chat.avatar" :alt="chat.name" class="avatar" />
      <UserStatus class="user-status" :isOnline="chat.isOnline" />
      <h3 class="name">{{ chat.name }}</h3>
      <p class="last-content" v-if="chat.lastMessage">
        <span class="last-content-author">{{ chatMeta.lastAuthor }}:</span>
        {{ chat.lastMessage }}
      </p>
      <p class="last-content" v-if="!chat.lastMessage">Say hello 👋</p>
      <span v-if="chatMeta.unreadMsgBadge" class="badge">{{ chatMeta.unreadMsgBadge }}</span>
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
    padding: 18px 25px;
  }

  .chats-item:not(:last-child) a::after {
    content: '';
    position: absolute;
    width: calc(100% - 50px);
    height: 1px;
    bottom: 0;
    left: 25px;
    background-color: var(--color-background-secondary);
  }

  .chats-item a:hover {
    border-left: 2px solid var(--color-accent-primary);
    padding-left: 23px;
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

  .last-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-column: 2;
    grid-row: 2;
    color: var(--color-text-secondary);
    font-size: 92%;
  }

  .last-content-author {
    color: var(--color-accent-primary);
    font-weight: 500;
    font-size: 92%;
  }

  .badge {
    height: 18px;
    min-width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3;
    grid-row: span 2;
    justify-self: right;
    padding: 0 4px;
    border-radius: 8px;
    font-size: 80%;
    font-weight: 500;
    background-color: var(--color-accent-primary);
    color: var(--color-white);
    box-shadow: 0 0 5px var(--color-accent-primary);
  }
</style>