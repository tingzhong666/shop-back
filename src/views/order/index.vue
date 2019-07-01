<template>
  <card>
    <template v-slot:header>
      <div class="header">
        <div>订单管理</div>
        <el-button icon="el-icon-download" type="primary" size="mini" @click="column">订单导出</el-button>
      </div>
    </template>

    <!-- 搜索 -->
    <div class="search">
      <search :mode="mode" @submit="change"/>
    </div>

    <!-- 表格 -->
    <div class="list">
      <list :list="list"/>
    </div>

    <!-- 分页 -->
    <el-pagination
      class="page"
      @current-change="pageChange"
      :current-page.sync="page"
      :page-size="limit"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </card>
</template>

<script>
import { mapState } from 'vuex'
import card from '@/components/card'
import { orderList } from '@/api'
import search from './search'
import list from './table/index'

export default {
  components: { card, search, list },
  data () {
    return {
      page: 1,
      limit: 10,
      total: 0,
      list: [],
      // mode 映射
      modeMap: {
        // 全部
        '/order': 'all',
        // 已完成
        '/order/success': 'success',
        // 待发货
        '/order/send': 'send',
        // 待付款
        '/order/pay': 'pay',
        // 待评价
        '/order/evaluate': 'evaluate',
        // 待收货
        '/order/collect': 'collect',
        // 已取消
        '/order/cancel': 'cancel',
        // 已退款
        '/order/refund': 'refund'
      }
    }
  },
  computed: {
    ...mapState(['asideDom']),
    mode () {
      return this.modeMap[this.$route.path]
    }
  },
  watch: {
    mode () {
      this.list = []
      if (this.mode === 'all' || this.mode === 'collect') {
        this.get()
      }
    }
  },
  methods: {
    async get () {
      const { code, data } = await orderList({ page: this.page, limit: this.limit })
      if (code === 0) {
        this.list = data.list
        this.total = data.total
      }
    },
    // 搜索筛选
    change (data) {
      this.$message.info('没接口')
      // this.list = data
    },
    // 订单导出
    column () {
      this.$message.info('没接口')
    },
    // 点击分页
    pageChange (currentPage) {
      // 进行发送相对应页面的请求
      this.get()
    }
  },
  created () {
    this.asideDom.active = this.$route.path
    if (this.mode === 'all' || this.mode === 'collect') {
      this.get()
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  justify-content space-between
.page
  margin-top 1rem
</style>
