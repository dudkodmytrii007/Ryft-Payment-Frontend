<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import axiosInstance from "../../services/axiosInstance";

import SearchBar from "@/components/shared/SearchBar.vue";
import ChatsItem from "./ChatsItem.vue";
import ChatsNoItem from "./ChatsNoItem.vue";

interface Chat {
  chatId: string;
  avatar: string;
  name: string;
  chatType: string;
  isOnline: boolean;
  lastUnreadMessage: string;
  lastUnreadMessageAuthor: string;
  lastUnreadMessageAuthorId: string;
  unreadMessagesAmount: number;
}

const myChats = ref<Chat[]>([]);
const searchQuery = ref<string>("");
const currentChatType = ref<string>("all");

async function getChats() {
  try {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID is missing or invalid");
      return;
    }

    const response = await axiosInstance.post("chat/getChats", {
      userId: userId,
    });

    myChats.value = response.data;
  } catch (error) {
    console.error("Error fetching chats:", error);
  }
}

const filteredChats = computed(() => {
  return myChats.value.filter((chat) => {
    const matchesSearch = chat.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesType =
      currentChatType.value === "all" || chat.chatType === currentChatType.value;
    return matchesSearch && matchesType;
  });
});

function changeChatType(type: string) {
  currentChatType.value = type;
}

onMounted(() => {
  getChats();
});
</script>

<template>
  <div class="chats">
    <div class="chat-type">
      <button
        @click="changeChatType('all')"
        :class="{ active: currentChatType === 'all' }"
      >
        All
      </button>
      <button
        @click="changeChatType('private')"
        :class="{ active: currentChatType === 'private' }"
      >
        Messages
      </button>
      <button
        @click="changeChatType('group')"
        :class="{ active: currentChatType === 'group' }"
      >
        Groups
      </button>
    </div>

    <SearchBar
      v-model="searchQuery"
      placeholder="Search for your chat"
      class="search-bar"
    />

    <ul v-if="filteredChats.length > 0">
      <ChatsItem v-for="chat in filteredChats" :key="chat.chatId" :chat="chat" />
    </ul>

    <ul v-if="filteredChats.length === 0">
      <ChatsNoItem v-for="n in 3" :key="'no-item-' + n" />
    </ul>
  </div>
</template>

<style scoped>
.chats {
  width: 100%;
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat-type {
  width: 100%;
  display: flex;
  padding: 0 15px;
}

.chat-type button {
  position: relative;
  height: 42px;
  flex: 1;
  text-align: center;
  font-weight: 500;
  font-size: 110%;
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color-background-secondary);
  transition: all 0.2s ease;
}

.chat-type button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-accent-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease;
}

.chat-type button:hover {
  font-weight: 700;
  color: var(--color-accent-primary);
  cursor: pointer;
}

.chat-type button:hover::after,
.chat-type .active::after {
  transform: scaleX(1);
  height: 2px;
}

.chat-type .active {
  font-weight: 700;
  color: var(--color-accent-primary);
}

.search-bar {
  padding: 0 25px;
}

.chats ul {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.chats ul::-webkit-scrollbar {
  display: none; /* Chrome, Safari i Edge */
}
</style>
