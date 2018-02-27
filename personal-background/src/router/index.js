import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import console from '@/components/console'
import writeBlog from '@/components/writeBlog'
import editBlog from '@/components/editBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/console',
      name: 'console',
      component: console,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/writeBlog',
      name: 'writeBlog',
      component: writeBlog,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/editBlog',
      name: 'editBlog',
      component: editBlog,
      meta: {
        requireAuth: true
      }
    }
  ]
})
