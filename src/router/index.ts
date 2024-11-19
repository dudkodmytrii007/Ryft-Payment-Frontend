import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat/',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/chat/:chatId',
      name: 'chatId',
      component: ChatView,
      props: true
    }
  ]
})

export default router