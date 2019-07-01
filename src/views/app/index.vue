<template>
  <el-container class="app">
    <el-aside class="aside" :style="{ width: asideWidth }">
      <navMenu ref="navMenu"/>
    </el-aside>

    <el-container>
      <el-header class="header" :style="{ height: '3rem', lineHeight: '3rem' }">
        <top/>
      </el-header>

      <el-main class="main">
        <transition mode="out-in" name="app">
          <router-view ref="path"></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navMenu from './menu'
import top from './top'
import { mapState } from 'vuex'

export default {
  components: { navMenu, top },
  computed: {
    ...mapState(['asideSwitch']),
    asideWidth () {
      return this.asideSwitch ? '4rem' : '15rem'
    }
  }
}
</script>

<style lang="stylus" scoped>
.app
  height 100vh
  .aside
    transition width .3s
    &::-webkit-scrollbar
      width 0
  .header
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
  .main
    padding 2rem
    background-color $bgc
    &::-webkit-scrollbar
      width .5rem
    &::-webkit-scrollbar-thumb
      background-color #bbb
      border-radius 1rem
      &:hover
        background-color #bbb - 10%
</style>
