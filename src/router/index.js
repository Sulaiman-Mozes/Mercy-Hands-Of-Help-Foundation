// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/contact-image.jpeg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact-image.jpeg') },
        },
        {
          path: 'activities',
          name: 'Activities',
          component: () => import('@/views/activities/Index.vue'),
          meta: { src: require('@/assets/contact-image.jpeg') },
        },
        {
          path: 'our-team',
          name: 'Our Team',
          component: () => import('@/views/our-team/Index.vue'),
          meta: { src: require('@/assets/contact-image.jpeg') },
        },
        {
          path: 'gallery',
          name: 'Gallery',
          component: () => import('@/views/gallery/Index.vue'),
          meta: { src: require('@/assets/contact-image.jpeg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
