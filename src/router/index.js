import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',// 需要服务端支持
  base: process.env.BASE_URL, // 应用的基路径
  scrollBehavior: () => ({y: 0}),
  routes: RouterConfig.concat(CommonRouters)
})

/**
 * 路由前置守卫
 * 如果没有登录则跳转登录页
 */
/*router.beforeEach((to, from, next) => {
  let hasLogin = localStorage.getItem("accessToken") ? true : false;
  if (!hasLogin) {
    if (to.path == '/login') {  // 防止触发死循环
      next()
    } else {
      next({path: '/login'});
    }
  } else {
    next();
  }
});*/

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
