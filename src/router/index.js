import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/dashboard/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    }
  },
})

export default router
