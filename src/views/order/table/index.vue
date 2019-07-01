<template>
  <div>
    <el-table
      :data="list"
      border
      class="table"
      style="width: 100%">
      <el-table-column
        v-for="item in th"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
        <template  v-slot="{ row }">
          <!-- 商品列 -->
          <shop :row="row" v-if="item.prop === 'shop'"/>

          <!-- 单价/数量 -->
          <n :row="row" v-if="item.prop === 'n'"/>

          <!-- 实付款 -->
          <div class="center" v-if="item.prop === 'pay'">
            ￥{{row.pay}}
            <div class="color">
              (含运费：￥{{row.freight}})
            </div>
          </div>

          <!-- 买家 -->
          <div class="center" v-if="item.prop === 'name'">
            {{row.name}}
            <div class="color">
              (用户ID：{{row.nameId}})
            </div>
          </div>

          <!-- 支付方式 -->
          <div class="tag" v-if="item.prop === 'payMethod'">
            {{row.payMethod}}
          </div>

          <!-- 快递 -->
          <div class="tag" v-if="item.prop === 'express'">
            {{row.express}}
          </div>

          <!-- 交易状态 -->
          <div v-if="item.prop === 'status'">
            <status :row="row"/>
          </div>

          <!-- 操作 -->
          <div v-if="item.prop === 'handle'">
            <div class="details" @click="details(row)">订单详情</div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import shop from './shop'
import n from './n'
import status from '@/components/status'

export default {
  components: { n, shop, status },
  data () {
    return {
      th: [
        {
          label: '商品信息',
          prop: 'shop',
          width: '300'
        },
        {
          label: '单价/数量',
          prop: 'n',
          width: '112'
        },
        {
          label: '实付款',
          prop: 'pay',
          width: '168'
        },
        {
          label: '买家',
          prop: 'name',
          width: '130'
        },
        {
          label: '支付方式',
          prop: 'payMethod',
          width: '84'
        },
        {
          label: '快递',
          prop: 'express',
          width: '84'
        },
        {
          label: '交易状态',
          prop: 'status',
          width: '145'
        },
        {
          label: '操作',
          prop: 'handle',
          width: ''
        }
      ]
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 去往订单详情
    details (item) {
      this.$router.push('/order/' + item.orderN)
    }
  }
}
</script>

<style lang="stylus" scoped>
.table >>>
  .el-table__body-wrapper
    font-size .8rem
    color #333
    .el-table_2_column_9
    .el-table_1_column_1
    .el-table_1_column_2
      padding 0
      .cell
        padding 0
.center
  text-align center
  .color
    color #888
.tag
  background-color #409EFF
  color #fff
  font-weight 900
  display inline-block
  padding 0 .5rem
  font-size .7rem
.details
  color #67C23A
  border 1px solid #67C23A
  width 100%
  text-align center
  max-width 7rem
  margin 0 auto
  cursor pointer
  transition background-color .3s, color .3s
  &:hover
    background-color #67C23A
    color #fff
</style>
