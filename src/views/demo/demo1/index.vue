<template>
  <section>
    <div class="btn-panel">
      <el-form :inline="true" :model="query">
        <el-form-item label="审批人">
          <el-input v-model="query.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="query.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="handleNew">新增</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%; height: 100%;" height="'1'" highlight-current-row>
      <el-table-column
        type="index"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="300">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">
            编辑</el-button>
          <el-button
            size="small" type="danger" slot="reference"
            @click="handleDelete(scope.$index, scope.row)">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="pagination"
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentPageChange"
      :current-page="4"
      :page-sizes="[10, 20, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="123">
    </el-pagination>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        query: {
          user: '',
          region: ''
        },
        form: {
          name: '',
          region: ''
        },
        dialogFormVisible: false,
        visible2: false
      }
    },
    methods: {
      handleSearch () {
        console.log(123)
      },
      handleNew () {
        this.dialogFormVisible = true
      },
      handleEdit () {
        this.dialogFormVisible = true
      },
      handleDelete () {
        this.$confirm('是否删除', '确认', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        })
      },
      handlePageSizeChange (pageSize) {

      },
      handleCurrentPageChange (currentPage) {

      }
    },
    computed: {
      tableData () {
        let a = []
        for (let i=0; i<20; i++) {
          a.push({
            id: i,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          })
        }

        return a
      }
    }
  }
</script>

<style>
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .pagination {
    padding: 20px;
    text-align: center;
  }
</style>