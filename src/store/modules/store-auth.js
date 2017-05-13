/**
 * Created by ryancui on 2017/5/13.
 */

import * as authApi from 'api/api'

export default {
  state: {
    user: null,
    menu: null,
    levelList: []
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
    },
    setLevelList (state, levelList) {
      state.levelList = levelList
    }
  },
  actions: {
    refresh ({commit}) {
      return Promise.all([authApi.getUser(), authApi.getMenu()])
        .then(resp => {
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
    },
    updateLevelList ({state, commit}, route) {
      let result = []
      const findInMenu = (url, arr) => {
        for (let i in arr) {
          if (arr[i].index === url) {
            result.unshift({
              name: arr[i].name,
              path: arr[i].index
            })
            return true
          }

          if (arr[i].children) {
            let res = findInMenu(url, arr[i].children)
            if (res) {
              result.unshift({
                name: arr[i].name,
                path: arr[i].index
              })
              return true
            }
          }

        }

        return false
      }

      findInMenu(route.path, state.menu)

      result.unshift({
        path: '/',
        name: route.matched[0].name
      })

      commit('setLevelList', result)
    }
  }
}