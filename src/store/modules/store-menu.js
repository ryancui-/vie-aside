/**
 * Created by john on 2017/5/9.
 */
import { listNode } from '../../api/api'

export default {
  state: {
    menu: []
  },
  getters: {
    menu (state) {
      return state.menu
    }
  },
  mutations: {
    setMenu (state, menu) {
      state.menu = menu
    }
  },
  actions: {
    refreshMenu ({commit}) {
      let menu = [{
        index: '/sys',
        name: '系统设置',
        icon: 'fa-cog',
        children: [{
          icon: 'fa-cog',
          index: '/sys/user',
          name: '用户管理',
        }, {
          icon: 'fa-cog',
          index: '/sys/role',
          name: '权限角色管理'
        }, {
          icon: 'fa-cog',
          index: '/sys/res',
          name: '权限资源管理'
        }]
      }]

      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setMenu', menu)
          resolve(menu)
        }, 1000)
      })
    }
  }
}