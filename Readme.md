# Vue 后台管理框架

## 技术选型

1. Vue 2
2. Vue-Router 路由
3. ElementUI 组件库
4. Vuex 状态管理
5. ECMAScript 6 + Babel
6. webpack 自动化构建

## 框架细节

- 布局为典型的圣杯布局(缺少footer,但可以非常容易地添加), 采用了 flex 布局, 整体布局框架没有依赖外部库(目前侧边栏依赖ElementUI的NavMenu)
- 使用 ElementUI 作为主要的组件库, 有需要时可嵌入其他组件或自定义组件
- 通过 webpack 实现 Code Spliting 和异步加载, 当部分路由或依赖不被用到时, 不进行 js 的加载
- 使用了 Vuex 进行多组件的状态管理, 当前应用场景下只包含用户信息
- 用户登录使用纯前端方案, 只保存用户id(可更改为相应的 ticket/token 等)到 localStorage, 用户刷新页面能保持正常登录状态

## TODO

- 划分 Router 文件, 方便业务开发人员进行 Router 规划, 不互相影响
- 统一 ajax 请求入口, 所有与后端交互的接口统一管理
- 自定义侧边栏组件, 实现只传菜单数据到组件中进行展示, 菜单数据整合权限控制, 通过 auth 属性设置对应菜单项是否对某角色/用户可见
- 使用 Sass 预处理处理 css
- 加入 eslint 代码质量检测
- 加入单元测试框架