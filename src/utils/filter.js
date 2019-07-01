import Vue from 'vue'

// 日期处理
Vue.filter('date', data => {
  data = new Date(data)
  let Y = data.getFullYear()
  let M = (data.getMonth() + 1 + '').padStart(2, '0')
  let D = (data.getDate() + '').padStart(2, '0')
  let h = (data.getHours() + '').padStart(2, '0')
  let m = (data.getMinutes() + '').padStart(2, '0')
  return `${Y}-${M}-${D} ${h}:${m}`
})
