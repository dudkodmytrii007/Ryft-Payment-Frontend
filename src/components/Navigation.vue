<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import IconHome from './icons/IconHome.vue'
  import IconBell from './icons/IconBell.vue'
  import IconSettings from './icons/IconSettings.vue'
  import IconPower from './icons/IconPower.vue'
</script>

<template>
  <nav>
    <RouterLink to="HomeView">
      <img src="/logo.webp" alt="Logo Ryft" class="logo">
    </RouterLink>

    <div class="nav__center">
      <router-link to="/" class="link" active-class="link-active">
        <IconHome class="icon" />
      </router-link>

      <router-link to="/" class="link" active-class="link-active">
        <IconBell class="icon" />
      </router-link>
      
      <router-link to="/Ustawienia" class="link" active-class="link-active">
        <IconSettings class="icon" />
      </router-link>

      <router-link to="/Ustawienia" class="link" active-class="link-active">
        <IconSettings class="icon" />
      </router-link>

      <router-link to="/Ustawienia" class="link" active-class="link-active">
        <IconSettings class="icon" />
      </router-link>
    </div>

    <IconPower class="icon" />
  </nav>
</template>

<style scoped type="scss">
  nav {
    height: calc(100vh - 16px);
    min-height: 500px;
    width: 70px;
    background-color: var(--color-background1);
    border-radius: 14px;
    margin: 8px 0 8px 8px;
    padding-bottom: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 100%;
    height: max-content;
    border-radius: 14px 14px 0 0;
    border-bottom: 7px solid var(--color-background);
  }

  .nav__center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .icon {
    width: 56px;
    height: max-content;
    padding: 10px;
    fill: var(--color-background);
    border-radius: 14px;
  }

  .icon:hover {
    transform: scale(1.15);
    cursor: pointer;
    fill: var(--color-active);
  }

  .link-active > .icon {
    fill: var(--color-background1);
    background: var(--color-background);
    transform: scale(0.85);
  }

  @media only screen and (max-width: 600px) {
    nav {
      width: 100%;
      height: 70px;
      margin: 0;
      border-radius: 0;
      flex-direction: row;
    }

    .logo {
      display: none;
    }
  }
</style>