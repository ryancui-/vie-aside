/**
 * Created by kit-mac on 2017/5/4.
 */
import Vue from 'vue'
import App from './app.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)

import router from './router'
import store from './store'

// router.beforeEach((to, from, next) => {
//   // 检查用户登录状态,先检查是否存在用户信息,若无请求后端返回已登录用户信息
//   // if (!store.state.user.user && to.path !== '/login') {
//   //
//   //   let token = ''
//   //   if (window.localStorage) {
//   //     token = localStorage.getItem('token')
//   //   }
//   //
//   //   if (token) {
//   //     next()
//   //   } else {
//   //     next('/login')
//   //   }
//   // } else {
//   //   next()
//   // }
// })

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

