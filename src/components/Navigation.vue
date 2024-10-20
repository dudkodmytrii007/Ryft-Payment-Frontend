<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import IconMessage1 from './icons/IconMessage1.vue'
  import IconMessage2 from './icons/IconMessage2.vue'
  import IconApps1 from './icons/IconApps1.vue'
  import IconApps2 from './icons/IconApps2.vue'
</script>

<template>
  <nav>
    <RouterLink to="/Czat" class="link" active-class="active-link">
      <IconMessage2 class="link__icon2 link__icon2-red" />
      <IconMessage1 class="link__icon1" />
      <span class="link__text">Czat</span>
    </RouterLink>

    <RouterLink to="/" class="link" active-class="active-link">
      <IconApps2 class="link__icon2 link__icon2-blue" />
      <IconApps1 class="link__icon1" />
      <span class="link__text">Start</span>
    </RouterLink>
  </nav>
</template>

<style scoped type="scss">
  nav {
    width: calc(100% - 14px);
    height: 62px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    bottom: 7px;
    border-radius: 16px;
    background-color: #ffffff;
  }

  .link {
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    text-decoration: none;
    position: relative;
    transition: transform 0.3s ease;
  }

  .link:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  .active-link {
    transform: scale(1.1);
  }

  .link__icon1 {
    width: 26px;
    height: max-content;
    fill: #b6c0d9;
    position: relative;
  }

  .link__icon2 {
    width: 24px;
    height: max-content;
    fill: #b6c0d9;
    opacity: 0.5;
    position: absolute;
    top: 11px;
    left: 7px;
  }

  .link__text {
    font-weight: bold;
    color: #8a95b2;
  }

  .link:hover .link__icon1,
  .link:hover .link__text,
  .active-link .link__icon1,
  .active-link .link__text {
    color: #3d4256;
    fill: #3d4256;
  }

  .link:hover .link__icon2-red,
  .active-link .link__icon2-red {
    fill: red;
  }

  .link:hover .link__icon2-blue,
  .active-link .link__icon2-blue {
    fill: blue;
  }
</style>
