<template>
  <card>
    <template v-slot:header>评价列表</template>

    <el-table
      :data="list"
      stripe
      class="list"
      style="width: 100%">
      <el-table-column
        v-for="item in th"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
        <template v-slot="{ row }">
          <!-- id -->
          <div v-if="item.prop === 'id'">
            {{row.id}}
          </div>

          <!-- 商品图片 -->
          <div v-if="item.prop === 'shopImg'" class="shopImg">
            <img :src="row.shopImg">
          </div>

          <!-- 商品名称 -->
          <div v-if="item.prop === 'title'" class="title">
            {{row.title}}
          </div>

          <!-- 用户 -->
          <div v-if="item.prop === 'username'">
            {{row.username}}
          </div>

          <!-- 评分 -->
          <div v-if="item.prop === 'n'">
            {{row.n}}分
          </div>

          <!-- 评价内容 -->
          <div v-if="item.prop === 'content'" class="content">
            {{row.content}}
          </div>

          <!-- 配图 -->
          <div v-if="item.prop === 'img'" class="img">
            <div v-if="!row.img.length">无</div>
            <div v-if="row.img.length" class="btn" @click="imgLook(row)">点击查看</div>
          </div>

          <!-- 评价时间 -->
          <div v-if="item.prop === 'time'">
            {{row.time | date}}
          </div>

          <!-- 操作 -->
          <div v-if="item.prop === 'handle'">
            <el-button size="mini" @click="comment(row)">回复</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      class="page"
      @current-change="pageChange"
      :current-page.sync="page"
      :page-size="limit"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>

    <!-- 评价配图 -->
    <imgq :show.sync="imgShow" :img="img"/>

    <!-- 回复框 -->
    <comment :show.sync="commentShow" :id="commentId"/>
  </card>
</template>

<script>
import card from '@/components/card'
import { evaluate } from '@/api'
import imgq from './img'
import comment from './comment'
import { mapState } from 'vuex'

export default {
  components: { card, imgq, comment },
  data () {
    return {
      // 配图查看框
      imgShow: false,
      // 配图查看
      img: [],
      // 回复框
      commentShow: false,
      // 回复的评价的id
      commentId: '',
      limit: 10,
      page: 1,
      list: [],
      // 总条数
      total: 0,
      // 表格头
      th: [
        {
          prop: 'id',
          label: 'ID',
          width: '100'
        },
        {
          prop: 'shopImg',
          label: '商品图片',
          width: '120'
        },
        {
          prop: 'title',
          label: '商品名称',
          width: '120'
        },
        {
          prop: 'username',
          label: '用户',
          width: '72'
        },
        {
          prop: 'n',
          label: '评分',
          width: '60'
        },
        {
          prop: 'content',
          label: '评价内容',
          width: '120'
        },
        {
          prop: 'img',
          label: '配图',
          width: '100'
        },
        {
          prop: 'time',
          label: '评价时间',
          width: '150'
        },
        {
          prop: 'handle',
          label: '操作',
          width: ''
        }
      ]
    }
  },
  computed: {
    ...mapState(['asideDom'])
  },
  methods: {
    async get () {
      const { code, data } = await evaluate({ limit: this.limit, page: this.page })
      if (code === 0) {
        this.list = data.list
        this.total = data.total
      }
    },
    // 配图查看
    imgLook (item) {
      this.img = item.img
      this.imgShow = true
    },
    // 回复
    comment (item) {
      this.commentShow = true
      this.commentId = item.id + ''
    },
    // 点击分页
    pageChange (currentPage) {
      this.$message.info('没有接口')
    }
  },
  created () {
    this.asideDom.active = '/evaluate'
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
.list >>>
  .el-table__header-wrapper .cell
    text-align center
  .el-table__body-wrapper .cell
    font-size .8rem
    color #333
    text-align center
.shopImg
  img
    width 100%
.title
.content
  display -webkit-box
  -webkit-line-clamp 3
  -webkit-box-orient vertical
  overflow hidden
  text-overflow ellipsis
.img
  .btn
    color #409EFF
    cursor pointer
.page
  margin-top 2rem
</style>
