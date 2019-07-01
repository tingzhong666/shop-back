<template>
  <card>
    <template v-slot:header>商户信息</template>

    <div
      class="li"
      v-for="item in list"
      :key="item.label">
      <div class="label">{{item.label}}：</div>

      <div class="value" v-if="item.label !== '头像'">{{item.value}}</div>
      <div class="value" v-if="item.label === '头像'">
        <img :src="item.value" class="img">
      </div>
      </div>
  </card>
</template>

<script>
import { info } from '@/api'
import { mapState } from 'vuex'
import card from '@/components/card'

export default {
  components: { card },
  data () {
    return {
      info: {}
    }
  },
  computed: {
    ...mapState(['asideDom']),
    list () {
      return [
        {
          label: '头像',
          value: this.info.img
        },
        {
          label: '商户名称',
          value: this.info.name
        },
        {
          label: '商户ID',
          value: this.info.id
        },
        {
          label: '手机号',
          value: this.info.phone
        },
        {
          label: '简介',
          value: this.info.intro
        },
        {
          label: '公告',
          value: this.info.announcement
        },
        {
          label: '发货地址',
          value: this.info.address
        }
      ]
    }
  },
  methods: {
    async get () {
      const res = await info()
      if (res.code === 0) {
        this.info = res.data
      }
    }
  },
  created () {
    this.asideDom.active = this.$route.path
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.li
  color #666
  font-size .9rem
  > div
    display inline-block
    line-height 5rem
  .label
    width 5rem
  .value
    .img
      width 5rem
      height 5rem
      vertical-align middle
      border-radius 50%
</style>
