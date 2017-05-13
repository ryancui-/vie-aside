<template>
  <nav>
    <div class="logo" :style="logoStyle">
      <span v-show="!collapsed">Vue Amdin</span>
      <span v-show="collapsed">Vue</span>
    </div>
    <div class="header">
      <div class="header-btn" style="width: 50px;" @click="toggle">
        <div><i class="fa fa-bars"></i></div>
      </div>

      <div class="header-empty"></div>

      <div class="header-btn" style="width: 80px;">
        <div @mouseenter="showDropdown(0)" @mouseleave="hideDropdown(0)">
          消息<el-tag style="margin-left: 5px;" type="danger">5</el-tag>
        </div>
        <div @mouseenter="showDropdown(0)" @mouseleave="hideDropdown(0)"
             class="my-dropdown-menu" v-show="dropdown[0]" style="width: 150px">
          <ul>
            <li>我的消息 1</li>
            <li>我的消息 2</li>
          </ul>
        </div>
      </div>

      <div class="header-btn" style="width: 120px;">
        <div @mouseenter="showDropdown(1)" @mouseleave="hideDropdown(1)">
          <i class="fa fa-user"></i>
          {{user ? user.name : ''}}
        </div>
        <div @mouseenter="showDropdown(1)" @mouseleave="hideDropdown(1)"
             class="my-dropdown-menu" v-show="dropdown[1]" style="width: 180px;">
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
      },
      logoWide: {
        type: Number,
        required: true
      },
      logoSlim: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        dropdown: [false, false]
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
      }),
      logoStyle () {
        return {
          'flex-basis': (this.collapsed ?  this.logoSlim : this.logoWide) + 'px'
        }
      }
    }
  }
</script>

<style scoped>
  nav {
    position: absolute;
    height: 50px;
    width: 100%;
    display: flex;
    background-color: #242424;
  }

  i {
    width: 20px;
  }

  .logo {
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    text-align: center;
  }

  .logo > span {
    font-size: 16px;
    line-height: 50px;
    color: white;
  }

  .my-dropdown-menu {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #242424;
    z-index: 99999;
    color: white;
    font-size: 16px;
  }

  .my-dropdown-menu > ul {
    margin: 0;
    padding: 0;
  }

  .my-dropdown-menu > ul > li {
    display: block;
    padding: 10px;
    height: 20px;
  }

  .my-dropdown-menu > ul > li:hover {
    cursor: pointer;
    background-color: black;
  }

  .header {
    flex-grow: 1;
    display: flex;
  }

  .header-btn {
    position: relative;
    color: white;
    font-size: 16px;
  }

  .header-btn:hover {
    background-color: black;
    cursor: pointer;
  }

  .header-btn > div:first-child {
    line-height: 50px;
    text-align: center;
  }

  .header-empty {
    flex-grow: 1;
  }
</style>