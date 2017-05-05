/**
 * Created by kit-mac on 2017/5/5.
 */

import PageMain from '../components/main.vue'
import PageLogin from '../components/login.vue'
import PagePrivilege from '../components/page-privilege/page-privilege.vue'
import PageUser from '../components/page-user/page-user.vue'

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