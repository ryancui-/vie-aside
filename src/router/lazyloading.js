/**
 * Created by john on 2017/5/9.
 */
export default (name) => () => import(`../views/${name}/index.vue`)