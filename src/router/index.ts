import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/web/layout-web.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home/page-home.vue'),
        },
      ],
    },
  ],
})

export default router
