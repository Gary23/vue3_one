import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Message from '@/views/Message.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Message',
      path: '/message',
      component: Message
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router