<template>
  <div class="level-bar">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        levelList: state => state.auth.levelList
      })
    }
  }
</script>

<style>
  .level-bar {
    flex: 0 0 40px;
  }

  .breadcrumb {
    font-size: 14px;
    margin-left: 20px;
    line-height: 40px;
  }
</style>