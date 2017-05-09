/**
 * Created by kit-mac on 2017/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/store-menu'
import user from './modules/store-user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    user
  }
})
