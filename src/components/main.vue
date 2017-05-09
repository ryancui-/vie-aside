<template>
  <div>
    <navbar :collapsed="collapsed" @toggleMenu="toggle"></navbar>

    <div class="main">
      <sidebar :menu-item="menuItems" :collapsed="collapsed"></sidebar>
      <div class="main-content">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './layout/Navbar.vue'
  import Sidebar from './layout/Sidebar.vue'

  export default {
    components: {
      Navbar,
      Sidebar
    },
    beforeMount () {
      setTimeout(() => {
        let stillLogin = true;
        if (stillLogin) {
          this.$store.commit('setUser', {
            id: localStorage.token,
            name: '王晓明'
          })
        } else {
          this.$alert('请重新登录', '登录超时', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push('/login')
            }
          });
        }
      }, 3000)
    },
    data() {
      return {
        defaultActive: '1',
        collapsed: false,
        menuItems: [{
          index: '1',
          name: '系统设置',
          icon: 'fa-cog',
          children: [{
            icon: 'fa-cog',
            index: '/sys/user',
            name: '1-1',
          }, {
            icon: 'fa-cog',
            index: '/sys/privilege',
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
          },{
            index: '1-1',
            name: '1-1'
          }, {
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
          },{
            index: '1-1',
            name: '1-1'
          }, {
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
          },{
            index: '1-1',
            name: '1-1'
          }, {
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
      toggle () {
        this.collapsed = !this.collapsed
      }
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
    overflow: auto;
  }
</style>