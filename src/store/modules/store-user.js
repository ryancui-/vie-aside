/**
 * Created by john on 2017/5/9.
 */
export default {
  state: {
    user: null
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    removeUser (state) {
      state.user = null
    }
  },
  actions: {
    refreshUser({commit}) {
      // TODO 改为后端请求得到的数据
      let user = {
        id: '123123',
        name: '王晓明'
      }

      return new Promise((resolve) => {
        commit('setUser', user)
        resolve(user)
      })
    }
  }
}