// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'

var store = require('storejs')

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {

    if(store.has("loginToken")) {
      let token = store.get("loginToken");
      let res = api.checkLoginStatus(token);
      if (res.result === 0) {
        next({
          path: '/login'
        })
      }
      else {
        if (to.name === 'login') {
          next({
            path: '/console'
          })
        }
        else {
          next();
        }
      }
    }
    else {
      if (to.name === 'login') {
        next();
      }
      else {
        next({
          path: '/login'
        })
      }
    }
  }
  else {
    if (to.name === 'login' && store.has("loginToken")) {
      let token = store.get("loginToken");
      let res = api.checkLoginStatus(token);
      if (res.result === 0) {
        next({
          path: '/login'
        })
      }
      else {
        next({
          path: '/console'
        })
      }
    }
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
