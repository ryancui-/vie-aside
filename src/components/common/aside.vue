<template>
  <aside>
    <ul class="top-menu">
      <li v-for="topMenu in menuItem">
        <div class="menu-item top-menu-item">
          <span>{{topMenu.name}}</span>
        </div>
        <ul v-if="topMenu.children" class="second-menu">
          <li v-for="secondMenu in topMenu.children" class="menu-item second-menu-item">
            <span>{{secondMenu.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    props: {
      menuItem: {
        type: Array,
        required: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .menu-item {
    display: block;
    /*width: 200px;*/
    height: 30px;
    color: white;
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