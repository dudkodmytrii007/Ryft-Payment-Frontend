<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import IconMessage from './icons/IconMessage2.vue'
  import IconApps from './icons/IconApps2.vue'
  import IconGroups from './icons/IconUsers2.vue'
</script>

<template>
  <nav :class="{ 'active-chat': RouterLink === '/Czat' }">
    <RouterLink to="/Czat" class="link" active-class="active-link">
      <IconMessage class="link__icon" />
      <span class="link__text">Czat</span>
    </RouterLink>

    <RouterLink to="/" class="link" active-class="active-link">
      <IconApps class="link__icon" />
      <span class="link__text">Start</span>
    </RouterLink>

    <RouterLink to="/Grupa" class="link" active-class="active-link">
      <IconGroups class="link__icon" />
      <span class="link__text">Grupy</span>
    </RouterLink>
  </nav>
</template>

<style scoped type="scss">
  nav {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--color-background2);
  }

  .active-chat {
    background-color: red;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s ease, color 4s ease;
  }

  .link__icon {
    width: 20px;
    height: max-content;
    fill: var(--color-icon);
    transition: fill 0.3s ease;
  }

  .link__text {
    color: var(--color-text2);
    transition: color 0.3s ease;
  }

  .link:hover .link__text {
    color: var(--color-text1);
  }

  .link:not(.active-link):hover .link__icon {
    animation: linkHover 0.8s ease-in-out infinite;
  }

  .active-link .link__icon,
  .active-link .link__text {
    fill: var(--color-main);
    color: var(--color-text1);
  }

  .link:focus,
  .link:active {
    animation: linkActivation 1s ease;
  }

  @keyframes linkHover {
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(10deg);
  }
  50% {
    transform: scale(1.2) rotate(0deg);
  }
  75% {
    transform: scale(1.1) rotate(-10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

  @keyframes linkActivation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>