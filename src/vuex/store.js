/**
 * Created by kit-mac on 2017/5/5.
 */
export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    removeUser (state) {
      state.user = null
    }
  }
}