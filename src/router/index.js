/**
 * Created by kit-mac on 2017/5/5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from './demo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: require('views/login.vue')
  }, {
    path: '/404',
    component: require('views/404.vue')
  }, {
    path: '/401',
    component: require('views/401.vue')
  }, {
    path: '/',
    component: require('views/main.vue'),
    // 异步加载的路由页面
    children: [
      ...demo
    ]
  }, {
    path: '*',
    redirect: '/404'
  }]
})

export default router