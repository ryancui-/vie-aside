<template>
  <div>
    <navbar :collapsed="collapsed" :logo-wide="180" :logo-slim="56" @toggleMenu="toggle"></navbar>
    <div class="main">
      <sidebar :menu-item="menu" :collapsed="collapsed"></sidebar>
      <div class="main-content">
        <levelbar></levelbar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Navbar from 'layout/Navbar.vue'
  import Sidebar from 'layout/Sidebar.vue'
  import Levelbar from 'layout/Levelbar.vue'

  export default {
    components: {
      Navbar,
      Sidebar,
      Levelbar
    },
    data() {
      return {
        defaultActive: '1',
        collapsed: false
      }
    },
    methods: {
      toggle () {
        this.collapsed = !this.collapsed
      }
    },
    computed: {
      ...mapState({
        menu: state => state.auth.menu
      })
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
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
</style>