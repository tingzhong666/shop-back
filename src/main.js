import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import '@/utils/filter'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const elementUI = require('element-ui')
  require('element-ui/lib/theme-chalk/index.css')
  Vue.use(elementUI)
  require('nprogress/nprogress.css')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
