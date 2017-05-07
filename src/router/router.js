/**
 * Created by kit-mac on 2017/5/5.
 */
const PageMain = () => import(
  /* webpackChunkName: "PageMain" */
  '../components/main.vue')

const PageLogin = () => import(
  /* webpackChunkName: "PageLogin" */
  '../components/login.vue')

const PagePrivilege = () => import(
  /* webpackChunkName: "PagePrivilege" */
  '../components/page-privilege/page-privilege.vue')

const PageUser = () => import(
  /* webpackChunkName: "PageUser" */
  '../components/page-user/page-user.vue')

export default [
  {
    path: '/', component: PageMain,
    children: [{
        path: 'sys/user', component: PageUser
      }, {
        path: 'sys/privilege', component: PagePrivilege
      }
    ]
  }, {
    path: '/login', component: PageLogin
  }
]