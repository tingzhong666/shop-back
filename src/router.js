import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('./views/index')
    },
    // 分类
    {
      path: '/tabs',
      component: () => import('./views/tabs')
    },
    {
      path: '/tabs/add',
      component: () => import('./views/tabs_modify')
    },
    {
      path: '/tabs/modify',
      component: () => import('./views/tabs_modify')
    },
    // 订单
    {
      path: '/order',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/success',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/send',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/pay',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/evaluate',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/collect',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/cancel',
      component: () => import('./views/order/index')
    },
    {
      path: '/order/refund',
      component: () => import('./views/order/index')
    },
    // 订单详情
    {
      path: '/order/:id',
      component: () => import('./views/order_details/index')
    },
    // 评价
    {
      path: '/evaluate',
      component: () => import('./views/evaluate/index')
    },
    // 商品列表
    {
      path: '/shop',
      component: () => import('./views/shop/index')
    },
    // 商品添加
    {
      path: '/shop/add',
      component: () => import('./views/shop_edit/index')
    },
    // 商品编辑
    {
      path: '/shop/edit/:id',
      component: () => import('./views/shop_edit/index')
    }
  ]
})

// 前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

// 后置
router.afterEach((to, from) => {
  nprogress.done()
})

export default router
