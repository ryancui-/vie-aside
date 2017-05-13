/**
 * Created by kit-mac on 2017/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/store-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  }
})
