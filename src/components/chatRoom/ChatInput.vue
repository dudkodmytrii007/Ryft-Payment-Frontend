<script lang="ts" setup>
  import IconPlus from '@/assets/icons/IconPlus.vue';
  import IconMicrophone from '@/assets/icons/IconMicrophone.vue';
  import IconSend from '@/assets/icons/IconPaperPlane.vue';
</script>

<template>
  <div class="input-container">
    <button>
      <IconPlus class="icon icon-plus" />
    </button>

    <input type="text" placeholder="Your message..." />
    <IconMicrophone class="icon icon-microphone" />

    <IconSend class="icon icon-send" />
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  gap: 15px;
}

button {
  width: 45px;
  height: 45px;
  background-color: var(--color-accent-primary);
  border: none;
  outline: none;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(--color-pure-white);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

button .icon-plus {
  width: 30px;
  height: 30px;
}

button:hover {
  transform: scale(1.08);
}

input {
  height: 45px;
  flex: 1;
  border-radius: 12px;
  padding: 0 52px 0 15px;
  background-color: var(--color-background-secondary);
  border: none;
  outline: none;
  color: var(--color-text-primary);
}

input::placeholder {
  color: var(--color-text-secondary);
}

.icon {
  width: 22px;
  height: 22px;
  transform-origin: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.icon-microphone {
  right: 72px;
  fill: var(--color-icon-primary);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.icon-send {
  fill: var(--color-accent-primary);
}

.icon-send:hover {
  transform: scale(1.1);
}

.icon-microphone:hover {
  transform: scale(1.1) translateY(-50%);
}
</style>