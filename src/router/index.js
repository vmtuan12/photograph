import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'LoginAndRegister',
      components: {
        default: () => import('@/layout/AuthLayout.vue'),
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/pages/Login.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/pages/Register.vue'),
        },
      ]
    },
    {
      path: '/',
      component: () => import('@/layout/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/Home.vue'),
        },
        {
          path: 'work',
          name: 'Work',
          component: () => import('@/pages/Work.vue'),
        },
        {
          path: 'profile',
          name: 'UserProfile',
          component: () => import('@/pages/PersonalUserProfile.vue'),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
