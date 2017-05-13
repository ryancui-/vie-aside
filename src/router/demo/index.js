/**
 * Created by ryancui on 2017/5/13.
 */
import lazyloading from '../lazyloading'

export default [{
  name: 'Demo 1',
  path: 'demo/demo1',
  component: lazyloading('demo', 'demo1')
}, {
  name: 'Demo 2',
  path: 'demo/demo2',
  component: lazyloading('demo', 'demo2')
}, {
  name: 'Demo 3',
  path: 'demo/demo3',
  component: lazyloading('demo', 'demo3')
}]