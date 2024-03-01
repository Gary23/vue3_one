import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Message from '@/views/Message.vue'
import Detail from '@/views/Detail.vue'
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
      component: Message,
      children: [
        {
          name: 'Detail',
          path: 'detail',
          component: Detail,
          props: (route) => {
            return {
              id: route.query.id,
              content: route.query.content,
              title: route.query.title,
            }
          }
        }
      ]
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
  ]
})

export default router