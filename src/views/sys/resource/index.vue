<template>
  <section>
    <el-row class="btn-panel">
      <el-button type="primary">
        <i class="fa fa-file"></i>新增根节点资源
      </el-button>
      <el-button type="primary">
        <i class="fa fa-file"></i>新增下级资源
      </el-button>
      <el-button type="primary">
        <i class="fa fa-file"></i>修改
      </el-button>
      <el-button type="primary">
        <i class="fa fa-file"></i>删除
      </el-button>
      <el-button type="primary">
        <i class="fa fa-file"></i>启用
      </el-button>
    </el-row>
    <el-table :data="resourceData" border height="1" class="grid" highlight-current-row>
      <el-table-tree-column
        folder-icon="fa fa-folder"
        folder-icon-open="fa fa-folder-open"
        file-icon="fa fa-file"
        parentKey="parentId" treeKey="id" :remote="getResource"
        prop="name" label="资源名称" width="200"></el-table-tree-column>
      <el-table-column prop="code" label="权限编码">
      </el-table-column>
      <el-table-column prop="uri" label="资源URI">
      </el-table-column>
      <el-table-column prop="menu" label="是否菜单">
      </el-table-column>
      <el-table-column prop="order" label="显示顺序">
      </el-table-column>
      <el-table-column prop="description" label="描述">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  import * as resourceApi from 'api/sys/api-resource'

  export default {
    data () {
      return {
        resourceData: []
      }
    },
    mounted () {
      resourceApi.listNode(0).then(({data}) => {
        this.resourceData = data
      })
    },
    methods: {
      getResource (row, callback) {
        console.log(row)
      }
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .btn-panel {
    flex: 0 0 60px;
  }

  .grid {
    flex: auto;
  }
</style>