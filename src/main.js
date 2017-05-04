/**
 * Created by kit-mac on 2017/5/4.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from '../App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})