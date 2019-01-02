export default [
  {
    path: '/basic',
    name: 'basicLayout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "basic-layout" */ '@/views/Layout/BasicLayout'),
    children: [
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About')
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          auth: true
        },
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "login"*/ '@/views/Login')
  }
]
