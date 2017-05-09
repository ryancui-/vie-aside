/**
 * Created by john on 2017/5/9.
 */
export default {
  state: {
    menu: []
  },
  getters: {
    menu (state) {
      return state.menu
    }
  },
  mutation: {
    setMenu (state, menu) {
      state.menu = menu
    }
  }
}