/**
 * Created by kit-mac on 2017/5/5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import demo from './demo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    name: '登录',
    path: '/login',
    component: require('views/login.vue')
  }, {
    name: '404',
    path: '/404',
    component: require('views/404.vue')
  }, {
    name: '401',
    path: '/401',
    component: require('views/401.vue')
  }, {
    name: '首页',
    path: '/',
    component: require('views/main.vue'),
    children: [
      ...demo
    ]
  }, {
    path: '*',
    redirect: '/404'
  }]
})

export default router