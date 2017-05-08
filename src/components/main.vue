<template>
  <div>
    <nav>
      <div class="logo" :class="collapsed ? 'slim-menu' : 'wide-menu'"></div>
      <div class="header">
        <div class="header-btn" @click="toggle"><i class="el-icon-message"></i></div>

        <div class="header-empty"></div>

        <div class="header-btn">
          <div>我的消息</div>
          <div class="dropdown-menu" v-show="dropdown" @mouseleave="hideDropdown">
            <ul>
              <li>123</li>
              <li>456</li>
            </ul>
          </div>
        </div>
        <div class="header-btn" @mouseenter="showDropdown($event)">
          <div>欢迎你, {{$store.state.user.name}}</div>
          <div class="dropdown-menu" @mouseleave="hideDropdown">
            <ul>
              <li>123</li>
              <li>345</li>
            </ul>
          </div>
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
//        this.dropdown = true

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
    height: 50px;
    width: 100%;
    display: flex;
  }

  .logo {
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    background-color: #333744;
  }

  .dropdown-menu {
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    background-color: blue;
  }

  .header {
    flex-grow: 1;
    display: flex;
    background-color: #333744;
  }

  .header-btn {
    position: relative;
    width: 100px;
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

  .main {
    position: absolute;
    width: 100%;
    top: 50px;
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