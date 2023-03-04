import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/about',
    name: 'about',
    // component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
