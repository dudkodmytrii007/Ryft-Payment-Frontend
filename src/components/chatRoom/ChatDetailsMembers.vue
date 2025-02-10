<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from "vue";
  import axiosInstance from "../../services/axiosInstance";

  const route = useRoute();
  const chatId = ref<string | undefined>(route.params.chatId as string)
  const { isMembersExpanded } = defineProps(["isMembersExpanded"]);
  const chatMembers = ref();

  async function getMembers() {
    try {
      if (!chatId.value) {
        console.error("Chat ID is missing or invalid");
        return;
      }

      const response = await axiosInstance.post('chat/getAllUsersFromChat', {
        chatId: chatId.value
      })

      chatMembers.value = response.data;

    } catch(error) {
      console.error("Error fetching chat members:", error);
    }
  }

  onMounted(() => {
    getMembers();
  });
</script>

<template>
  <ul v-for="member in chatMembers" :key="member.userId">
    <li>
      <img :src="member.avatar" :alt="member.name" />
      {{ member.name }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
}

li img {
  width: 26px;
  height: 26px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
