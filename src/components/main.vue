<template>
  <div>
    <nav>
      <div class="logo" :class="collapsed ? 'slim-menu' : 'wide-menu'"></div>
      <div class="header">
        <div class="header-btn" style="width: 50px;" @click="toggle">
          <div><i class="el-icon-more"></i></div>
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
        <div class="header-btn" style="width: 230px;">
          <div @mouseenter="showDropdown(1)">
            欢迎你, {{$store.state.user.name}}
          </div>
          <div @mouseleave="hideDropdown(1)" class="dropdown-menu" v-show="dropdown[1]">
            <ul>
              <li>123</li>
              <li>345</li>
            </ul>
          </div>
        </div>

      </div>
    </nav>

    <div class="main">
      <my-aside :menu-item="menuItems" :collapsed="collapsed"></my-aside>

      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import Aside from './common/aside-el.vue'

  export default {
    components: {
      myAside: Aside
    },
    data() {
      return {
        defaultActive: '1',
        collapsed: false,
        dropdown: [false, false],
        menuItems: [{
          index: '1',
          name: '系统设置',
          children: [{
            icon: 'el-icon-setting',
            index: '/sys/user',
            name: '1-1',
          }, {
            icon: 'el-icon-setting',
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
      },
      showDropdown (index) {
        this.dropdown = [false, false]
        this.$set(this.dropdown, index, true)
      },
      hideDropdown (index) {
        this.$set(this.dropdown, index, false)
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
    z-index: 99999;
  }

  .dropdown-hide {
    visibility: hidden;
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

  .wide-menu {
    flex: 0 0 180px;
  }

  .slim-menu {
    flex: 0 0 56px;
  }
</style>