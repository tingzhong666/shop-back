<template>
  <card>
    <template v-slot:header>
      <div class="header">
        <div class="title">商品列表</div>
        <el-button class="add" type="success" size="mini" icon="el-icon-plus" @click="add">新增</el-button>
      </div>
    </template>

    <!-- 搜索筛选 -->
    <search @submit="search"/>

    <!-- 表格列表 -->
    <tableq :list="list"/>

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
import card from '@/components/card'
import search from './search'
import tableq from './table'
import { shop } from '@/api'
import { mapState } from 'vuex'

export default {
  components: { card, search, tableq },
  data () {
    return {
      list: [],
      total: 0,
      page: 1,
      limit: 10
    }
  },
  computed: {
    ...mapState(['asideDom'])
  },
  methods: {
    search (form) {
      this.$message.info('没有接口')
    },
    async get () {
      const { code, data } = await shop({ page: this.page, limit: this.limit })
      if (code === 0) {
        this.total = data.total
        this.list = data.list
      }
    },
    // 添加商品
    add () {
      this.$router.push('/shop/add')
    },
    // 点击分页
    pageChange (current) {
      this.get()
    }
  },
  created () {
    this.asideDom.active = '/shop'
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.header
  overflow hidden
  .title
    float left
  .add
    float right
.page
  margin-top 2rem
</style>
