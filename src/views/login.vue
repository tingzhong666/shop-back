<template>
  <div class="login">
    <div class="container">
      <div class="title">TZ后台管理系统</div>

      <div class="form">
        <el-input
          class="control"
          v-model="username"
          placeholder="用户名"
          @blur="blur('name')"></el-input>
        <div class="tip">
          <div class="text" :style="{ height: nameHeight }">请输入用户名</div>
        </div>

        <el-input
          class="control"
          v-model="password"
          placeholder="密码" type="password"
          @blur="blur('pass')"></el-input>
        <div class="tip">
          <div class="text" :style="{ height: passHeight }">请输入密码</div>
        </div>

        <el-button class="control" type="primary" @click="submit">登录</el-button>
        <div class="tip">
          账号：admin 密码：admin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      nameHeight: '0',
      passHeight: '0'
    }
  },
  watch: {
    username (newV, oldV) {
      if (newV) {
        this.nameHeight = '0'
      }
    },
    password (newV, oldV) {
      if (newV) {
        this.passHeight = '0'
      }
    }
  },
  methods: {
    ...mapMutations(['setLogined']),
    blur (label) {
      if (label === 'name' && !this.username) {
        this.nameHeight = '100%'
      }

      if (label === 'pass' && !this.password) {
        this.passHeight = '100%'
      }
    },
    // 登录提交
    async submit () {
      this.blur('name')
      this.blur('pass')
      if (!this.username || !this.password) return

      const res = await login({ username: this.username, password: this.password })

      if (res.code === 0) {
        this.setLogined(true)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  background-color $color
  padding-top 1px
  > .container
    width 23rem
    margin 10vh auto 0
    text-align center
  .title
    color #fff
    font-size 2rem
  .form
    background-color #fff
    padding 1.7rem 0 .2rem
    border-radius .3rem
    margin-top 5vh
    .control
      width 20rem
    .tip
      color red
      font-size .8rem
      height 1.5rem
      line-height 1.5rem
      position relative
      .text
        text-align left
        position absolute
        left 1.5rem
        overflow hidden
        transition height .3s
      &:last-child
        margin-top .2rem
</style>
