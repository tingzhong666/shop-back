<template>
  <div id="app">
    <transition mode="out-in" name="app">
      <components
        :is="logined ? 'app' : 'login'"
        class="com"/>
    </transition>
  </div>
</template>

<script>
import login from '@/views/login'
import app from '@/views/app/index'
import { mapState, mapActions } from 'vuex'

export default {
  components: { login, app },
  computed: {
    ...mapState(['logined'])
  },
  methods: {
    ...mapActions(['check'])
  },
  created () {
    this.check()
  }
}
</script>

<style lang="stylus" scoped>
#app
  .com
    height 100vh
</style>

<style lang="stylus">
:root
  font-size 16px
*
  box-sizing border-box
body
  margin 0
  color #333

// 组件过渡
.app-enter,
.app-leave-to
  transform translateY(-2rem)
  opacity 0
.app-enter-active,
.app-leave-active
  transition transform .3s, opacity .3s
</style>
