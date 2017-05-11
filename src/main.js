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
// 后端 api 服务 baseURL
axios.defaults.baseURL = 'http://localhost:8081/api/'

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

