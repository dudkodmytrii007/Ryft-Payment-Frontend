<script lang="ts" setup>

</script>

<template>
  <div class="shadow top-shadow"></div>

  <ul>
    <li class="received">
      <img src="https://avatars.githubusercontent.com/u/14400871" alt="" class="avatar">
      <span class="author">Friend</span>
      <p class="message">Another message goes here.</p>
      <p class="message">Yet another message from Friend.</p>
      <p class="message">Final message from Friend.</p>
    </li>

    <li class="sent">
      <img src="https://avatars.githubusercontent.com/u/76972913" alt="" class="avatar">
      <span class="author">You</span>
      <p class="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eos nisi esse eius? Magni nostrum, doloremque, delectus enim doloribus ex dolor illo ratione deleniti sequi voluptate ipsa officia, nihil ullam optio incidunt quis veritatis aperiam architecto cum vero voluptatem rem debitis quae. Dignissimos blanditiis exercitationem eligendi placeat, unde expedita fugiat.</p>
      <p class="message">Another message from You.</p>
      <p class="message">Final message from You.</p>
    </li>
  </ul>

  <div class="shadow bottom-shadow"></div>
</template>

<style scoped>
  .shadow {
    position: absolute;
    left: 0;
    width: 100%;
    height: 40px;
  }

  .top-shadow {
    background: linear-gradient(var(--color-background-primary), rgba(0, 0, 0, 0));
  }

  .bottom-shadow {
    bottom: 75px;
    background: linear-gradient(rgba(0, 0, 0, 0), var(--color-background-primary));
  }

  ul {
    height: calc(100vh - 70px - 75px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 32px;
    padding: 20px;
  }

  li {
    display: grid;
    grid-template-columns: 36px auto;
    grid-template-rows: auto auto;
    column-gap: 14px;
    row-gap: 6px;
  }

  .sent {
    grid-template-columns: auto 36px;
    justify-items: right;
    align-self: flex-end;
  }

  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    grid-row: span 2;
  }

  .author {
    grid-column: 2;
    grid-row: 1;
    font-weight: 500;
  }

  .message {
    width: fit-content;
    padding: 10px 20px;
    background-color: var(--color-element-primary);
    color: var(--color-pure-white);
    grid-column: 2;
  }

  .sent .avatar {
    grid-column: 2;
  }

  .sent .author {
    grid-column: 1;
  }

  .sent .message {
    grid-column: 1;
    background-color: var(--color-accent-primary);
    color: var(--color-white);
  }

  .message:first-of-type {
    border-radius: 8px 24px 24px 8px;
  }

  .message:last-of-type {
    border-radius: 8px 24px 24px 24px;
  }

  .message:not(:first-of-type):not(:last-of-type) {
    border-radius: 8px 24px 24px 8px;
  }

  .sent .message:first-of-type {
    border-radius: 24px 8px 8px 24px;
  }

  .sent .message:last-of-type {
    border-radius: 24px 8px 24px 24px;
  }

  .sent .message:not(:first-of-type):not(:last-of-type) {
    border-radius: 24px 8px 8px 24px;
  }
</style>