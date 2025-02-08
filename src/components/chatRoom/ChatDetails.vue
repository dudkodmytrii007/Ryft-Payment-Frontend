<script lang="ts" setup>
  import IconCategory from '@/assets/icons/IconCategory.vue';
  import IconArrow from '@/assets/icons/IconArrow.vue';
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
          Members <span>8</span>
        </h3>
        <input type="checkbox" />
        <IconArrow class="icon-arrow" />
      </label>

      <ul>
        <li>
          <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="members-avatar">
          Name Lastname
        </li>

        <li>
          <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="members-avatar">
          Name Lastname
        </li>
      </ul>
    </section>

    <section class="media">
      <label class="checkbox">
        <h3>
          Media <span>2</span>
        </h3>
        <input type="checkbox" />
        <IconArrow class="icon-arrow" />
      </label>

      <ul></ul>
    </section>
  </div>
</template>

<style scoped>
  .chat-details {
    position: absolute;
    width: 380px;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: var(--color-background-secondary);
    border-left: 5px solid var(--color-background-primary);
    padding: 20px;
  }

  @media (min-width: 1140px) {
    .chat-details {
      position: static;
      border: none;
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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: var(--color-background-elements);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .top button::before {
    content: "✕";
    font-size: 18px;
    color: var(--color-icon-primary);
    display: block;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .top button:hover::before {
    transform: scale(0.9);
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
  }

  section h3 {
    color: var(--color-text-secondary);
  }

  section h3 span {
    color: var(--color-text-primary);
  }

  section ul {
    width: 100%;
    list-style: none;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  section ul li {
    display: flex;
    align-items: center;
    gap: 10px;
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
    fill: var(--color-accent-primary);
    transition: transform 0.3s ease;
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

  /* Members */
  .members-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
</style>
