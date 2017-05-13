/**
 * Created by ryancui on 2017/5/13.
 */
import lazyloading from '../lazyloading'

export default [{
  path: '/demo1',
  component: lazyloading('demo', 'demo1')
}, {
  path: '/demo2',
  component: lazyloading('demo', 'demo2')
}, {
  path: '/demo3',
  component: lazyloading('demo', 'demo3')
}]