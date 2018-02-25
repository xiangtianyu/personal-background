import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import console from '@/components/console'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/console',
      name: 'console',
      component: console,
      meta: {
        requireAuth: true
      }
    }
  ]
})
