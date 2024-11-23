import { createRouter, createWebHistory } from 'vue-router'
import ChatRoomView from '../views/ChatRoomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:chatId?',
      name: 'chat',
      component: ChatRoomView
    }
  ]
})

export default router