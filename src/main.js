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

import axios from 'axios'
// 后端 api 服务 baseURL
axios.defaults.baseURL = '/api/'

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

