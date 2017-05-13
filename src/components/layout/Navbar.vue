<template>
  <nav>
    <div class="logo" :class="collapsed ? 'slim-menu' : 'wide-menu'">
      <span v-show="!collapsed">Vue Amdin</span>
      <span v-show="collapsed">Vue</span>
    </div>
    <div class="header">
      <div class="header-btn" style="width: 50px;" @click="toggle">
        <div><i class="fa fa-bars"></i></div>
      </div>

      <div class="header-empty"></div>

      <div class="header-btn" style="width: 120px;">
        <div @mouseenter="showDropdown(0)" @mouseleave="hideDropdown(0)">
          我的消息
        </div>
        <div @mouseenter="showDropdown(0)" @mouseleave="hideDropdown(0)" class="dropdown-menu" v-show="dropdown[0]">
          <ul>
            <li>123</li>
            <li>456</li>
          </ul>
        </div>
      </div>
      <div class="header-btn" style="width: 120px;">
        <div @mouseenter="showDropdown(1)">
          <i class="fa fa-user"></i>
          {{user ? user.name : ''}}
        </div>
        <div @mouseleave="hideDropdown(1)" class="dropdown-menu" v-show="dropdown[1]">
          <ul>
            <li @click="onLogout"><i class="fa fa-sign-out"></i>退出</li>
          </ul>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Cookies from 'js-cookie'

  export default {
    props: {
      collapsed: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        dropdown: [false, false],
      }
    },
    methods: {
      ...mapActions(['logout']),
      toggle () {
        this.$emit('toggleMenu')
      },
      showDropdown (index) {
        this.dropdown = [false, false]
        this.$set(this.dropdown, index, true)
      },
      hideDropdown (index) {
        this.$set(this.dropdown, index, false)
      },
      onLogout () {
        this.logout().then(() => {
          Cookies.remove('token')
          this.$router.push('/login')
        })
      }
    },
    computed: {
      ...mapState({
        user: state => state.auth.user
      })
    }
  }
</script>

<style scoped>
  nav {
    position: absolute;
    height: 50px;
    width: 100%;
    display: flex;
  }

  i {
    width: 20px;
  }

  .logo {
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    background-color: #333744;
    text-align: center;
  }

  .logo > span {
    font-size: 16px;
    line-height: 50px;
    color: white;
  }

  .dropdown-menu {
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    background-color: #333744;
    z-index: 99999;
    color: white;
  }

  .dropdown-menu > ul {
    margin: 0;
    padding: 0;
  }

  .dropdown-menu > ul > li {
    display: block;
    padding: 10px;
    height: 20px;
  }

  .dropdown-menu > ul > li:hover {
    cursor: pointer;
    background-color: #a0ab9f;
  }

  .header {
    flex-grow: 1;
    display: flex;
    background-color: #333744;
  }

  .header-btn {
    position: relative;
    color: white;
    font-size: 16px;
  }

  .header-btn:hover {
    background-color: #5e6579;
    cursor: pointer;
  }

  .header-btn > div:first-child {
    line-height: 50px;
    text-align: center;
  }
  .header-empty {
    flex-grow: 1;
  }

  /** Must be consistent with Sidebar.vue */
  .wide-menu {
    flex: 0 0 180px;
  }

  .slim-menu {
    flex: 0 0 56px;
  }
</style>