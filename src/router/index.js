import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // 应用的基路径
  scrollBehavior: () => ({y: 0}),
  routes: RouterConfig.concat(CommonRouters)
})

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('accessToken')
  const noProgressList = ['/login'] // 不需要进度条的路由

  if (!isLogin) {
    to.path === '/login' ? next() : next({path: '/login'}) // 防止死循环
  } else {
    if (!noProgressList.some(item => item === to.path)) {
      NProgress.start()
    }
    // 判断权限
    if (to.meta.auth) {
      next()
    } else {
      to.path === '/403' ? next() : next({path: '/403'})
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
