<template>
  <el-row :gutter="25" style="height: 100%;display: flex">
    <el-col :span="12">
      <el-row>
        <el-button-group>
          <el-button type="success" icon="plus">新增</el-button>
          <el-button type="warning" icon="edit">编辑</el-button>
          <el-button type="danger" icon="delete">删除</el-button>
        </el-button-group>
      </el-row>
      <el-row style="overflow: auto;flex:0 0 100%">
        <el-table
          :data="userData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="昵称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="telephone"
            label="手机">
          </el-table-column>
        </el-table>
      </el-row>
    </el-col>
    <el-col :span="12">
      <el-tree
        :data="privilegeData"
        show-checkbox
        node-key="id"
        :props="defaultProps">
      </el-tree>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        userData: new Array(50).fill({
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