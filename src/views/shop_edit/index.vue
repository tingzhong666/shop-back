<template>
  <el-card>
    <!-- 基本信息 -->
    <baseq v-bind.sync="base"/>

    <!-- 库存/规格 -->
    <spec v-bind.sync="spec"/>

    <!-- 详情 -->
    <detailsq :details.sync="details"/>

    <!-- 其他设置 -->
    <adjacent v-bind.sync="adjacent"/>

    <!-- 会员折扣 -->
    <vip v-bind.sync="vip"/>

    <el-button type="primary" class="submit" @click="submit">提交</el-button>
  </el-card>
</template>

<script>
import baseq from './base'
import { mapState } from 'vuex'
import spec from './spec'
import detailsq from './details'
import adjacent from './adjacent'
import vip from './vip'
import { shopDetails } from '@/api'

export default {
  components: { baseq, spec, detailsq, adjacent, vip },
  data () {
    return {
      // 基本信息
      base: {
        title: '',
        tab: ['0'],
        imgs: [],
        intro: ''
      },
      // 规格/库存
      spec: {
        // 商品编码
        code: '',
        price: '',
        // 划线价
        scribing: '',
        // 库存
        n: '',
        // 商品重量
        weight: ''
      },
      // 详情 一组图片
      details: [],
      // 其他设置
      adjacent: {
        // 商品状态
        status: 'up',
        // 运费
        freight: 0
      },
      // 会员折扣
      vip: {
        // 是否开启折扣
        swi: false,
        // 折扣设置  默认/单独
        def: true,
        // 单独折扣
        alone: 0
      }
    }
  },
  computed: {
    ...mapState(['asideDom']),
    mode () {
      if (this.$route.path === '/shop/add') return 'add'
      if (/^\/shop\/edit\//.test(this.$route.path)) return 'edit'
      return ''
    },
    id () {
      if (this.mode === 'edit') return this.$route.params.id
      return ''
    }
  },
  watch: {
    mode (newV, oldV) {
      if (oldV === 'edit' && newV === 'add') {
        this.base = { tab: ['0'] }
        this.details = []
        this.adjacent = { status: 'up' }
        this.vip = {
          swi: false,
          def: true,
          alone: 0
        }
        this.spec = {}
      }
    }
  },
  methods: {
    submit () {
      this.$message.info('没有接口')
    },
    async get () {
      const { code, data } = await shopDetails(this.id)
      if (code === 0) {
        const { title, tab, imgs, intro, shopImg, status, freight, swi, def, alone, code, price, scribing, n, weight } = data
        this.base = { title, tab, imgs, intro }
        this.details = shopImg
        this.adjacent = { status, freight }
        this.vip = { swi, def, alone }
        this.spec = { code, price, scribing, n, weight }
      }
    }
  },
  created () {
    if (this.mode === 'add') this.asideDom.active = '/shop/add'
    if (this.mode === 'edit') this.get()
  }
}
</script>

<style lang="stylus" scoped>
.submit
  margin 2rem auto 0
  display block
</style>
