import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/intro',
      name: 'intro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IntroductionView.vue'),
    },
    //[[CHAPTER_PATHS]]
    {
      path: '/chapter000',
      name: 'chapter000',
      component: () => import('../views/Chapter000View.vue'),
    },
    {
      path: '/chapter001',
      name: 'chapter001',
      component: () => import('../views/Chapter001View.vue'),
    },
    //[[END_CHAPTER_PATHS]]
  ],
})

export default router
