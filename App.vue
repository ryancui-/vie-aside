<template>
    <div>

    <nav>
        <div class="logo" :class="collapsed ? 'slim-menu' : 'wide-menu'"></div>
        <div class="header">
            <span @click="toggle"><i class="el-icon-message"></i></span>
            <div class="header-empty"></div>
            <button>Messages</button>
            <button>Others</button>
            <div class="avator">我的资料</div>
        </div>
    </nav>

    <div class="main">
        <div class="aside" :class="collapsed ? 'slim-menu' : 'wide-menu'">
            <el-menu class="menu wide-menu" v-show="!collapsed" theme="dark" :default-active="defaultActive" mode="vertical">
                <el-menu-item index="1"><i class="el-icon-message"></i>处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><i class="el-icon-message"></i>订单</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-message"></i>订单</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-message"></i>订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="3">123</el-menu-item>
                <el-menu-item index="3">1</el-menu-item>
                <el-menu-item index="3">订123123单</el-menu-item>
                <el-menu-item index="3">123</el-menu-item>
            </el-menu>

            <el-menu @mouseenter.native="toggle" class="menu slim-menu" v-show="collapsed" theme="dark" :default-active="defaultActive" mode="vertical">
                <el-menu-item index="1"><i class="el-icon-message"></i></el-menu-item>
                <el-menu-item index="2"><i class="el-icon-message"></i></el-menu-item>
                <el-menu-item index="3"><i class="el-icon-message"></i></el-menu-item>
                <el-menu-item index="4"><i class="el-icon-message"></i></el-menu-item>
            </el-menu>
        </div>

        <div class="main-content"></div>
    </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                defaultActive: '1',
                collapsed: false
            }
        },
        methods: {
            toggle () {
                console.log('toggle')
                this.collapsed = !this.collapsed
            }
        }
    }
</script>

<style scoped>
    nav {
        position: absolute;
        height: 40px;
        width: 100%;
        background-color: cornsilk;
        display: flex;
    }

    .logo {
        transition-property: flex-basis;
        transition-duration: 0.3s;
        transition-timing-function: ease;
    }

    .header {
        flex-grow: 1;
        display: flex;
    }

    .header > span, .header > button {
        flex: 0 0 50px;
    }

    .header > span > i {
        vertical-align: middle;
    }

    .header > span:hover {
        background-color: red;
    }

    .header-empty {
        flex-grow: 1;
    }

    .avator {
        flex: 0 0 200px;
    }

    .main {
        position: absolute;
        width: 100%;
        top: 40px;
        bottom: 0px;
        display: flex;
    }

    .aside {
        overflow: hidden;
        transition-property: flex-basis;
        transition-duration: 0.3s;
        transition-timing-function: ease;
    }

    .menu {
        height: 100%;
        overflow: scroll;
    }
    .wide-menu {
        flex:0 0 260px;
    }

    .slim-menu {
        flex:0 0 60px;
    }

    .main-content {
        flex-grow: 1;
        background-color: green;
    }
</style>