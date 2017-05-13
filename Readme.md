# Vue Admin Framework

## 技术栈

1. Vue 2
2. Vue-Router
3. ElementUI
4. Vuex
5. ECMAScript 6 + Babel
6. webpack + webpack-dev-server

## 框架概述

- 使用了异步 import 实现路由模块异步加载

## 目录结构

## 起步

``` shell
# Install dependency
$ npm install

# Visit http://localhost:8086/
$ npm run dev
```

## 参考

- 大部分灵感源于此项目：[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

## TODO

- [x] 划分 Router 文件, 方便业务开发人员进行 Router 规划, 不互相影响
- [x] 统一 ajax 请求入口, 所有与后端交互的接口统一管理
- [ ] 自定义侧边栏组件
- [ ] 加入 eslint 代码质量检测
- [ ] 加入单元测试框架 Mocha
- [x] mock api 请求