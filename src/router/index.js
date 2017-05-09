/**
 * Created by kit-mac on 2017/5/5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import lazyload from './lazyloading'
import sys from './sys'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/login',
    component: require('../views/login.vue')
  }, {
    path: '/',
    component: require('../views/main.vue'),
    // 异步加载的路由页面
    children: [
      ...sys
    ]
  }]
})

