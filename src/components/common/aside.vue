<template>
  <aside>
    <ul class="top-menu">
      <li v-for="(topMenu, index) in menuItem">
        <div class="menu-item top-menu-item" @click="openSecondMenu(index)">
          <span>{{topMenu.name}}</span>
        </div>
        <ul v-if="topMenu.children" class="second-menu" v-show="showSecond[index]"
        :style="{height: showSecond[index] ? 'auto' : 0}">
          <li v-for="secondMenu in topMenu.children" class="menu-item second-menu-item">
            <span>{{secondMenu.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      menuItem: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        showSecond: []
      }
    },
    created () {
      this.showSecond = this.menuItem.map(() => false)
    },
    methods: {
      openSecondMenu (index) {
        Vue.set(this.showSecond, index, !this.showSecond[index])

        // collapse all sub-menu
//        for (let i in this.showSecond) {
//          i != index && Vue.set(this.showSecond, i, false)
//        }
      }
    }
  }
</script>

<style scoped>
  aside {
    overflow-y: auto;
  }

  .menu-item {
    display: block;
    height: 35px;
    color: white;
    line-height: 35px;
    padding-left: 10px;
  }

  .top-menu {
    display: block;
    height: 100%;
    width: 180px;
    margin: 0;
    padding: 0;
    background-color: #333744;
    font-size: 12px;
  }

  .second-menu {
    background-color: #333744;
    margin: 0;
    padding: 0;
    transition: all 0.1s;
  }

  .top-menu > li {
    background-color: #42485B;
  }

  .top-menu-item:hover {
    background-color: #41c3d9;
    transition: background-color 0.1s;
    cursor: pointer;
  }

  .second-menu-item:hover {
    background-color: #5e6579;
    transition: background-color 0.1s;
    cursor: pointer;
  }
</style>