/**
 * Created by kit-mac on 2017/5/4.
 */
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// ElementUI components
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  Form,
  FormItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

// Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

// Add routes
import routes from './router/router'
const router = new VueRouter({
  routes
})


// Add vuex store
import storeConfig from './vuex/store'
const store = new Vuex.Store(storeConfig)

router.beforeEach((to, from, next) => {
  // 检查用户登录状态,先检查是否存在用户信息,若无请求后端返回已登录用户信息
  if (!store.state.user && to.path !== '/login') {

    let userid = ''
    if (window.localStorage) {
      userid = localStorage.getItem('userid')
    }

    if (userid) {
      // TODO 请求后端
      store.commit('setUser', {
        id: userid,
        name: '王晓明'
      })
      next()
    } else {
      next('/login')
    }
  }

  next()
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

