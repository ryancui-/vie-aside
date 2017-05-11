<template>
  <div v-loading.fullscreen.lock="waitForResource">
    <navbar :collapsed="collapsed" @toggleMenu="toggle"></navbar>
    <div class="main">
      <sidebar :menu-item="menu" :collapsed="collapsed"></sidebar>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from '../components/layout/Navbar.vue'
  import Sidebar from '../components/layout/Sidebar.vue'
  import { listNode } from '../api/api'
  import axios from 'axios'
  import Cookies from 'js-cookie'

  export default {
    components: {
      Navbar,
      Sidebar
    },
    mounted () {
      // 刷新后的必要资源加载
      let token = Cookies.get('token')
      if (!token) {
        this.waitForResource = false
        this.$router.push('/login')
      } else {
        Promise.all([this.refreshUser(), this.refreshMenu()])
          .then((resp) => {
            console.log(resp)
            this.waitForResource = false
          })
          .catch((error) => {
            this.waitForResource = false
            console.log(error)
          })

//          this.$alert('请重新登录', '登录超时', {
//            confirmButtonText: '确定',
//            callback: () => {
//              this.$router.push('/login')
//            }
//          });

      }
    },
    data() {
      return {
        waitForResource: true,
        defaultActive: '1',
        collapsed: false
      }
    },
    methods: {
      ...mapActions(['refreshUser', 'refreshMenu']),
      toggle () {
        this.collapsed = !this.collapsed
      }
    },
    computed: {
      ...mapGetters(['menu', 'user'])
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