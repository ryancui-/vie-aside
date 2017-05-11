<template>
  <div>
    <h1>Login Page</h1>
    <el-form :label-position="'right'" label-width="80px" :model="user">
      <el-form-item label="帐号">
        <el-input v-model="user.id"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.pw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        user: {
          id: '',
          pw: ''
        }
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      onSubmit () {
        this.setUser({
          id: this.user.id,
          name: '王晓明'
        })

        if (window.localStorage) {
          localStorage.setItem('token', this.user.id)
        }

        this.$router.push('/')
      }
    }
  }
</script>