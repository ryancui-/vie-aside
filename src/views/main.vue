<template>
  <div v-loading.fullscreen.lock="waitForResource">
    <navbar :collapsed="collapsed" @toggleMenu="toggle"></navbar>
    <div class="main">
      <sidebar :menu-item="menuItems" :collapsed="collapsed"></sidebar>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Navbar from '../components/layout/Navbar.vue'
  import Sidebar from '../components/layout/Sidebar.vue'

  export default {
    components: {
      Navbar,
      Sidebar
    },
    created () {
      // 刷新后的必要资源加载
      // TODO 加上菜单资源加载
      let token = localStorage.getItem('token')
      if (!token) {
        this.waitForResource = false
        this.$router.push('/login')
      } else if (!this.user) {
        setTimeout(() => {
          let hasUser = true
          this.waitForResource = false
          if (hasUser) {
            this.setUser({
              id: token,
              name: '王晓明'
            })
          } else {
            this.$alert('请重新登录', '登录超时', {
              confirmButtonText: '确定',
              callback: () => {
                this.$router.push('/login')
              }
            });
          }
        }, 1000)
      } else {
        this.waitForResource = false
      }
    },
    data() {
      return {
        waitForResource: true,
        defaultActive: '1',
        collapsed: false,
        menuItems: [{
          index: '/sys',
          name: '系统设置',
          icon: 'fa-cog',
          children: [{
            icon: 'fa-cog',
            index: '/sys/user',
            name: '用户管理',
          }, {
            icon: 'fa-cog',
            index: '/sys/privilege',
            name: '权限管理'
          }, {
            index: '1-3',
            name: '1-3'
          }]
        }, {
          index: '2',
          name: '个人设置'
        }, {
          index: '3',
          name: '权限设置',
          children: [{
            index: '1-2',
            name: '1-2'
          }, {
            index: '1-3',
            name: '1-3'
          },{
            index: '1-1',
            name: '1-1'
          }, {
            index: '1-2',
            name: '1-2'
          }, {
            index: '1-3',
            name: '1-3'
          }]
        }]
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      toggle () {
        this.collapsed = !this.collapsed
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>
  .main {
    position: absolute;
    width: 100%;
    top: 50px;
    bottom: 0px;
    display: flex;
  }

  .main-content {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>