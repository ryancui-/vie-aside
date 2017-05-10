/**
 * Created by john on 2017/5/9.
 */
export default (topModule, secondModudle) => () =>
  import(`../views/${topModule}/${secondModudle}/index.vue`)