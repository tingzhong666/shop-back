import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    // 侧边栏展开/关闭
    asideSwitch: false,
    // 侧边栏dom
    asideDom: {}
  },
  mutations: {
    setLogined (state, newV) {
      state.logined = newV
    },
    setAsideSwitch (state, newV) {
      state.asideSwitch = newV
    },
    setAsideDom (state, newV) {
      state.asideDom = newV
    }
  },
  actions: {
    async check ({ commit }) {
      const res = await api.check()

      if (res.code === 0) {
        commit('setLogined', true)
      }

      if (res.code === 1) {
        commit('setLogined', false)
      }
    }
  }
})
