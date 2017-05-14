/**
 * Created by kit-mac on 2017/5/4.
 */
import Vue from 'vue'
import App from './app.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'

import ElTreeGrid from 'element-tree-grid'
Vue.use(ElementUI)
Vue.component(ElTreeGrid.name,ElTreeGrid)

import router from './router'
import store from './store'
import axios from 'axios'
import Cookies from 'js-cookie'
// import './style/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import 'bootstrap/dist/css/bootstrap.min.css'

// Mock service
import './mock'

// 后端 api 服务 baseURL
// axios.defaults.baseURL = 'http://mock/api'
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response);
});

// Router 方法鉴权并获取相应数据
const whiteList = [
  '/login'
]

const matchInArray = (url, arr) => {
  let matched = false
  for (let i in arr) {
    if (arr[i].index === url) {
      matched = true
      break
    }

    if (arr[i].children && matchInArray(url, arr[i].children)) {
      matched = true
      break
    }
  }
  return matched
}

// 只通过菜单的 url 来验证权限
const hasPermission = url => {
  let has = false
  const menu = store.state.auth.menu
  return url === '/' || url === '/401' || url === '/404'
    || matchInArray(url, menu)
}

router.beforeEach((to, from, next) => {
  NProgress.start()

  // 1. 本地是否存有 token
  const token = Cookies.get('token')
  if (token) {  // 有 token
    // 2. 是否拉取需要的 identity info - 用户信息、菜单等
    const user = store.state.auth.user
    if (user) { // 有信息（正常的跳转）
      // 3. 判断是否有权限进入该 url
      if (to.path === '/login') {
        next('/')
      } else if (hasPermission(to.path)) {
        next()
      } else {
        next('/401')
      }
    } else {    // 无信息（用户刷新页面）
      store.dispatch('refresh').then(() => {
        if (to.path === '/login') {
          next('/')
        } else if (hasPermission(to.path)) {
          next()
        } else {
          next('/401')
        }
      }).catch((resp) => { // 拉不到信息，登录超时
        Cookies.remove('token')
        next('/login')
      })
    }
  } else {      // 无 token
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(route => {
  // FIXME 401 重定向到无权限页面会复用 401 路由组件从而不会调用 done 方法结束进度条
  // 进度条
  NProgress.done()

  // 更新面包屑
  store.dispatch('updateLevelList', route)
})

const vm = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})



