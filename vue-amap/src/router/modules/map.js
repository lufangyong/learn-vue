/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const mapRouter = {
  path: '/map',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Map',
  meta: {
    title: '地图',
    icon: 'chart'
  },
  children: [
    {
      path: 'init',
      component: () => import('@/views/map/init'),
      name: 'KeyboardChart',
      meta: { title: '初始化地图', noCache: true }
    },
    {
      path: 'maker',
      component: () => import('@/views/map/maker'),
      name: 'KeyboardChart',
      meta: { title: '添加 maker', noCache: true }
    }
  ]
}

export default mapRouter
