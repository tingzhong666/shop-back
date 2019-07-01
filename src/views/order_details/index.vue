<template>
  <el-card>
    <!-- 步骤条 -->
    <step :info="info"/>

    <!-- 基本信息 -->
    <baseInfo class="base" :info="info"/>

    <!-- 商品信息 -->
    <shop class="shop" :info="info"/>

    <!-- 收货地址 -->
    <accept class="accept" :info="info"/>
  </el-card>
</template>

<script>
import { orderDetails } from '@/api'
import step from './step'
import baseInfo from './base'
import shop from './shop'
import accept from './accept'

export default {
  components: { step, baseInfo, shop, accept },
  data () {
    return {
      info: {}
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    async get () {
      const { code, data } = await orderDetails({ id: this.id })
      if (code === 0) {
        this.info = data
      }
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.base
.shop
.accept
  margin-top 2rem
</style>
