/**
 * Created by kit-mac on 2017/5/4.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/app.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)

// Add routes
import routes from './router/router'
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})