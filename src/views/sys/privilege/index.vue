<template>
  <div class="top" style="height: 100%;display: flex; justify-content: space-around;align-items: center;overflow: hidden;">
    <div style="height: 90%; display: flex;flex-direction: column;width: 45%;">
      <el-row>
        <el-button-group>
          <el-button type="success" icon="plus">新增</el-button>
          <el-button type="warning" icon="edit">编辑</el-button>
          <el-button type="danger" icon="delete">删除</el-button>
        </el-button-group>
      </el-row>
      <el-table
        :data="userData"  style="flex: auto;" :height="1">
        <el-table-column
          prop="id"
          label="ID"
          width="50">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="昵称"
          width="60">
        </el-table-column>
        <el-table-column
          prop="telephone"
          label="手机">
        </el-table-column>
      </el-table>
    </div>
    <div style="height: 90%;width: 45%;display: flex;overflow-y: auto;">
      <el-tree style="flex: auto"
        :data="privilegeData"
        show-checkbox
        node-key="id"
        :props="defaultProps">
      </el-tree>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: new Array(40).fill({
          id: 1,
          nickname: 'admin',
          telephone: '13826511000'
        }),
        privilegeData: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            },{
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }, {
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            },{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>

<style scoped>
  .top > div {
    border: 2px solid black;
  }
</style>