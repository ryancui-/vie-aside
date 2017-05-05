<template>
    <div>
        Login Page
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                // TODO 完成登录逻辑,保存用户信息,cookie,并转向main page
                this.$router.push('/')
            }
        }
    }
</script>