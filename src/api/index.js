import http from './http'

// 登录
export const login = function ({ username, password }) {
  return http.post('/login', { username, password })
}

// 验证登录
export const check = function () {
  return http.get('/check')
}

// 退出登录
export const logout = function () {
  return http.get('/logout')
}

// 商户信息
export const info = function () {
  return http.get('/info')
}

// 分类
export const tabs = function () {
  return http.get('/tabs')
}

// 某分类信息
export const tabInfo = function () {
  return http.get('/tab_info')
}

// 订单列表
export const orderList = function () {
  return http.get('/order_list')
}

// 订单详情
export const orderDetails = function () {
  return http.get('/order_details')
}

// 订单详情
export const evaluate = function () {
  return http.get('/evaluate')
}

// 商品列表
export const shop = function () {
  return http.get('/shop')
}

// 商品详情
export const shopDetails = function () {
  return http.get('/shop_details')
}
