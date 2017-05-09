/**
 * Created by kit-mac on 2017/5/5.
 */
import lazyload from './lazyloading'
import sys from './sys'

export default [{
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