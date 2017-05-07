<template>
  <div>
    <nav>
      <div class="logo" :class="collapsed ? 'slim-menu' : 'wide-menu'"></div>
      <div class="header">
        <span @click="toggle"><i class="el-icon-message"></i></span>
        <div class="header-empty"></div>
        <div class="avator" @mouseenter="showDropdown">
          欢迎你, {{$store.state.user.name}}

        </div>
        <div class="dropdown-menu" v-show="dropdown" @mouseleave="hideDropdown">
          <ul>
            <li>123</li>
            <li>345</li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main">
      <!--<div class="aside" :class="collapsed ? 'slim-menu' : 'wide-menu'">-->
        <!--<el-menu class="menu wide-menu" v-show="!collapsed" theme="dark" :default-active="defaultActive" mode="vertical"-->
                 <!--:router="true">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-setting"></i>系统管理</template>-->
            <!--<el-menu-item index="/sys/user"><i class="el-icon-setting"></i>用户管理</el-menu-item>-->
            <!--<el-menu-item index="/sys/privilege"><i class="el-icon-setting"></i>权限管理</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->

        <!--<el-menu class="menu slim-menu" v-show="collapsed" theme="dark" :default-active="defaultActive" mode="vertical">-->
          <!--<el-menu-item index="1"><i class="el-icon-setting"></i></el-menu-item>-->
        <!--</el-menu>-->
      <!--</div>-->

      <my-aside :menu-item="menuItems"></my-aside>

      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Aside from './common/aside.vue'

  export default {
    components: {
      myAside: Aside
    },
    data() {
      return {
        defaultActive: '1',
        collapsed: false,
        dropdown: false,
        menuItems: [{
          index: '1',
          name: '系统设置',
          children: [{
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
          name: '权限设置'
        }]
      }
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed
      },
      showDropdown() {
        this.dropdown = true
      },
      hideDropdown() {
        this.dropdown = false
      }
    }
  }
</script>

<style scoped>
  nav {
    position: absolute;
    height: 40px;
    width: 100%;
    background-color: cornsilk;
    display: flex;
  }

  .logo {
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    width: 200px;
  }

  .header {
    flex-grow: 1;
    display: flex;
  }

  .header > span {
    flex: 0 0 40px;
  }

  .header > span > i {
    vertical-align: baseline;
  }

  .header > span:hover {
    background-color: red;
    cursor: hand;
  }

  .header-empty {
    flex-grow: 1;
  }

  .avator {
    flex: 0 0 200px;
  }

  .main {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 0px;
    display: flex;
  }

  .aside {
    overflow: hidden;
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .menu {
    height: 100%;
    overflow: auto;
  }

  .wide-menu {
    flex: 0 0 260px;
  }

  .slim-menu {
    flex: 0 0 56px;
  }

  .main-content {
    flex-grow: 1;
  }
</style>