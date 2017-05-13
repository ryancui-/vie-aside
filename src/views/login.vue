<template>
  <div class="outer">
    <div class="inner">
      <h1>Vue Admin</h1>
      <el-form label-width="0" :model="user" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="user.username" placeholder="用户名" @keyup.native.enter="onSubmit">
            <template slot="prepend"><i class="fa fa-envelope"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" type="password" placeholder="密码" @keyup.native.enter="onSubmit">
            <template slot="prepend"><i class="fa fa-key"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
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
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名'
          }],
          password: [{
            required: true,
            message: '请输入密码'
          }]
        }
      }
    },
    methods: {
      ...mapActions(['login']),
      onSubmit () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.login(this.user).then(data => {
              Cookies.set('token', data.token)
              this.$router.push('/')
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .outer {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .inner {
    width: 300px;
  }

  h1 {
    font-size: 30px;
    text-align: center;
    margin: 60px;
  }

  i {
    width: 20px;
    text-align: center;
  }
</style>