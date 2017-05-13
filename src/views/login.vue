<template>
  <div>
    <h1>Login Page</h1>
    <el-form label-position="right" label-width="80px" :model="user">
      <el-form-item label="帐号">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Cookies from 'js-cookie'

  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions(['login']),
      onSubmit () {
        this.login(this.user).then(data => {
          Cookies.set('token', data.token)
          this.$router.push('/')
        })
      }
    }
  }
</script>