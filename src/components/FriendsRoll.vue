<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import axiosInstance from '../services/axiosInstance'
  import UserStatus from './UserStatus.vue'

  const friendsArray = ref<{ 
    friendUserData: { 
      userId: string; 
      avatar: string; 
      name: string; 
      isOnline: boolean; 
    }; 
  }[]>([]);

  async function getFriends() {
    try {
      const response = await axiosInstance.post('chat/getFriends', {
        userId: '2f380840-c365-4616-85b8-19e9a5bf5b71'
      })

      friendsArray.value = response.data

    } catch (error) {
      console.error('Error while downloading data:', error)
    }
  }

  onMounted(() => {
    getFriends();
  })
</script>

<template>
  <ul class="friends-roll">
    <li 
      class="friends-roll-item" 
      v-for="friend in friendsArray" 
      :key="friend.friendUserData.userId"
    >
      <img 
        :src="friend.friendUserData.avatar" 
        :alt="`Avatar ${friend.friendUserData.name}`" 
        class="friends-roll-avatar"
      >
      <span class="friends-roll-name">{{ friend.friendUserData.name }}</span>

      <UserStatus class="friends-roll-status" :isOnline="friend.friendUserData.isOnline" />
    </li>
  </ul>
</template>

<style scoped>
  .friends-roll {
    max-width: 100%;
    display: flex;
    gap: 25px;
    padding: 4px 20px 0 20px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer, Edge */
  }

  /* Chrome, Safari, Opera */
  .friends-roll::-webkit-scrollbar {
    display: none;
  }

  .friends-roll-item {
    position: relative;
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .friends-roll-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .friends-roll-item:hover .friends-roll-avatar {
    transform: scale(1.1);
  }

  .friends-roll-name {
    text-align: center;
    transition: transform 0.3s ease, font-weight 0.3s ease;
  }

  .friends-roll-item:hover .friends-roll-name {
    font-weight: bold;
  }

  .friends-roll-status {
    position: absolute;
    right: 2px;
    bottom: 28px;
  }
</style>