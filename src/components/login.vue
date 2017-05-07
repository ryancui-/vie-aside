<template>
  <div>
    <h1>Login Page</h1>
    <el-form :label-position="right" label-width="80px" :model="user">
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
      onSubmit () {
        // TODO 完成登录逻辑,保存用户信息,cookie,并转向main page

        this.$store.commit('setUser', {
          id: this.user.id,
          name: '王晓明'
        })

        if (window.localStorage) {
          localStorage.setItem('userid', this.user.id)
        }

        this.$router.push('/')
      }
    }
  }
</script>