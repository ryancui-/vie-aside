<template>
  <aside :class="collapsed ? 'slim-menu' : 'wide-menu'">
    <el-menu class="menu wide-menu" v-show="!collapsed" theme="dark" :default-active="this.$route.path" mode="vertical"
             :router="true" :unique-opened="true">
      <template v-for="(menu, index) in menuItem">
        <el-submenu v-if="menu.children" :index="menu.index">
          <template slot="title">
            <i :class="['fa', menu.icon || 'fa-cog']"></i>{{menu.name}}
          </template>
          <el-menu-item v-for="submenu in menu.children" :index="submenu.index">
            <i :class="['fa', menu.icon || 'fa-cog']"></i>{{submenu.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="menu.index">
          <i :class="['fa', menu.icon || 'fa-cog']"></i>{{menu.name}}
        </el-menu-item>
      </template>
    </el-menu>

    <el-menu class="menu slim-menu" v-show="collapsed" theme="dark" mode="vertical">
      <el-menu-item v-for="menu in menuItem" :index="menu.index">
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
</style>