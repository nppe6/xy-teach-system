import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

export default createRouter({
  history: createWebHistory(import.meta.url.BASE_URL),
  routes // 配置路由数组
})
