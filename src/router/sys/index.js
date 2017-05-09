/**
 * Created by john on 2017/5/9.
 */
import lazyload from '../lazyloading'

export default [{
  path: '/sys/user',
  component: lazyload('sys-user')
}, {
  path: '/sys/privilege',
  component: lazyload('sys-privilege')
}]
