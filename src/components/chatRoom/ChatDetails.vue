<script lang="ts" setup>
  import { ref, onMounted, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import axiosInstance from "../../services/axiosInstance";
  import IconCategory from '@/assets/icons/IconCategory.vue';
  import IconArrow from '@/assets/icons/IconArrow.vue';
  import ChatDetailsMember from './ChatDetailsMember.vue';
  import ChatDetailsMedia from './ChatDetailsMedia.vue';

  const route = useRoute();
  const chatMembers = ref([]);
  const isMembersExpanded = ref(false);
  const isMediaExpanded = ref(false);
  
  const chatId = computed(() => route.params.chatId);
  const membersCount = computed(() => chatMembers.value.length);

  async function getMembers() {
    try {
      if (!chatId) {
        console.error('Chat ID is missing or invalid');
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
  })

  watch(chatId, () => {
    getMembers();
  });
</script>
  
<template>
  <div class="chat-details">
    <div class="top">
      <h2>
        <IconCategory class="icon-category" />Chat details
      </h2>
      <button></button>
    </div>

    <section class="members">
      <label class="checkbox">
        <h3>
          Members <span>{{ membersCount }}</span>
        </h3>
        <input type="checkbox" v-model="isMembersExpanded" />
        <IconArrow class="icon-arrow" />
      </label>

      <ul>
        <ChatDetailsMember v-for="member in chatMembers" :key="member.userId" :member="member" />
      </ul>
    </section>

    <section class="media">
      <label class="checkbox">
        <h3>
          Media <span>8</span>
        </h3>
        <input type="checkbox" v-model="isMediaExpanded" />
        <IconArrow class="icon-arrow" />
      </label>

      <ul class="media-ul">
        <ChatDetailsMedia />
      </ul>
    </section>
  </div>
</template>

<style scoped>
  .chat-details {
    position: absolute;
    width: 350px;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-color: var(--color-background-secondary);
    border-left: 2px solid var(--color-element-tertiary);
    padding: 20px;
  }

  @media (min-width: 1130px) {
    .chat-details {
      position: static;
    }
  }

  .top, section label {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* Top */
  .top button {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: var(--color-element-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .top button::before {
    content: "✕";
    font-size: 100%;
    color: var(--color-icon-primary);
    display: block;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .top button:hover::before {
    transform: scale(0.82);
    color: var(--color-icon-primary);
  }

  .top h2 {
    font-weight: 600;
    font-size: 115%;
    display: flex;
    align-items: center;
    gap: 15px;
    fill: var(--color-text-primary);
  }

  .icon-category {
    width: 26px;
    height: 26px;
  }

  /* Section */
  section {
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    overflow-y: hidden;
  }

  section h3 {
    color: var(--color-text-secondary);
  }

  section h3 span {
    color: var(--color-text-primary);
  }

  .checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox input {
    display: none;
  }

  .icon-arrow {
    position: relative;
    transition: transform 0.3s ease;
    fill: var(--color-accent-secondary);
    transition: transform 0.3s ease;
  }

  .checkbox:hover h3 {
    color: var(--color-accent-secondary);
  }

  .checkbox input:checked + .icon-arrow {
    transform: rotate(180deg);
  }

  .checkbox:hover input:checked + .icon-arrow {
    transform: scale(1.2) rotate(180deg);
  }

  .checkbox:hover input:not(:checked) + .icon-arrow {
    transform: scale(1.2);
  }

  section ul {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }

  .media-ul {
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>