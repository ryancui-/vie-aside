/**
 * Created by ryancui on 2017/5/13.
 */

import * as authApi from 'api/api'

export default {
  state: {
    user: null,
    menu: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    removeUser (state) {
      state.user = null
    },
    setMenu (state, menu) {
      state.menu = menu
    }
  },
  actions: {
    refresh ({commit}) {
      return Promise.all([authApi.getUser(), authApi.getMenu()])
        .then((resp) => {
          console.log(resp)
          commit('setUser', resp[0].data)
          commit('setMenu', resp[1].data)
          return resp
        })
    },
    login ({commit}, user) {
      return authApi.login(user.username, user.password).then(resp => {
        return resp.data
      })
    },
    logout ({commit}) {
      return authApi.logout()
    }
  }
}