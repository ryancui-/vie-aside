<template>
  <aside :class="collapsed ? 'slim-menu' : 'wide-menu'">
    <el-menu class="menu wide-menu" v-show="!collapsed" theme="dark" :default-active="this.$route.path" mode="vertical"
             :router="true" :unique-opened="true">
      <template v-for="(menu, index) in menuItem">
        <el-submenu v-if="menu.children" :index="menu.index" :key="menu.index">
          <template slot="title">
            <i :class="['fa', menu.icon || 'fa-cog']"></i>{{menu.name}}
          </template>
          <el-menu-item v-for="submenu in menu.children" :index="submenu.index" :key="submenu.index">
            <i :class="['fa', menu.icon || 'fa-cog']"></i>{{submenu.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menu.index" :key="menu.index">
          <i :class="['fa', menu.icon || 'fa-cog']"></i>{{menu.name}}
        </el-menu-item>
      </template>
    </el-menu>

    <el-menu class="menu slim-menu" v-show="collapsed" theme="dark" mode="vertical">
      <el-menu-item v-for="menu in menuItem" :index="menu.index" :key="menu.index">
        <i :class="['fa', menu.icon || 'fa-cog']"></i>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
  export default {
    props: {
      collapsed: {
        type: Boolean,
        required: true
      },
      menuItem: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  aside {
    overflow: hidden;
    transition-property: flex-basis;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .menu {
    position: relative;
    height: 100%;
    overflow: auto;
  }

  i {
    width: 20px;
  }

  .wide-menu {
    flex: 0 0 180px;
  }

  .slim-menu {
    flex: 0 0 56px;
  }

  .menu::-webkit-scrollbar
  {
    width: 6px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .menu::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    /*border-radius: 10px;*/
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  .menu::-webkit-scrollbar-thumb
  {
    /*border-radius: 10px;*/
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #9da7bf;
  }
</style>