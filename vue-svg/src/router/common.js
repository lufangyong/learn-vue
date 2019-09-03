export default [
  // 默认页面
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  // 无权限页面
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('@/views/error/403')
  },
  // 404
  {
    path: '*',
    name: 'lost',
    meta: {
      auth: true
    },
    component: () => import('@/views/error/404')
  }
]
