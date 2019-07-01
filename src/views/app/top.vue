<template>
  <div>
    <div class="left" :style="{ transform: `rotateZ(${rotateZ})` }">
      <i class="iconfont icon-menu-open" @click="setAsideSwitch(!asideSwitch)"></i>
    </div>

    <div class="right">
      欢迎您，admin
      <span class="btn" @click="logout">
        <i class="iconfont icon-tuichu"></i>
        退出
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { logout } from '@/api'

export default {
  computed: {
    ...mapState(['asideSwitch']),
    rotateZ () {
      return this.asideSwitch ? '0' : '-180deg'
    }
  },
  methods: {
    ...mapMutations(['setAsideSwitch']),
    ...mapActions(['check']),
    async logout () {
      await logout()
      this.check()
    }
  }
}
</script>

<style lang="stylus" scoped>
.left
  float left
  transition transform .3s
  .iconfont
    transition color .3s
    cursor pointer
    font-size 1.3rem
    padding .5rem
    &:hover
      color #333 + 40%
.right
  float right
  .btn
    display inline-block
    padding 0 1rem
    transition background-color .3s
    cursor pointer
    &:hover
      background-color #fff - 5%
</style>
