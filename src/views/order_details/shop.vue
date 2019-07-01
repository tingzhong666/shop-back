<template>
  <div>
    <titleq>商品信息</titleq>

    <el-table
      :data="info.shop"
      border
      class="table"
      style="width: 100%">
      <el-table-column
        v-for="item in th"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
        <template v-slot="{ row }">
          <!-- 商品名称 -->
          <div v-if="item.prop === 'title'" class="title">
            <img :src="row.img">

            <div class="info">
              <div class="name">{{row.title}}</div>
              <div class="spec">{{row.spec}}</div>
            </div>
          </div>

          <!-- 商品编码 -->
          <div v-if="item.prop === 'code'" class="center">
            {{ row.code || '--' }}
          </div>

          <!-- 重量 -->
          <div v-if="item.prop === 'weight'" class="center">
            {{ row.weight }}
          </div>

          <!-- 单价 -->
          <div v-if="item.prop === 'price'" class="center">
            ￥{{ row.price }}
          </div>

          <!-- 购买数量 -->
          <div v-if="item.prop === 'n'" class="center">
            x{{ row.n }}
          </div>

          <!-- 商品总价 -->
          <div v-if="item.prop === 'allPrice'" class="center">
            ￥{{ row.allPrice }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 留言 / 总计 -->
    <div class="footer">
      <div class="msg">买家留言：{{info.msg || '无'}}</div>
      <div class="allPrice">总计金额：￥{{info.allPrice}}</div>
    </div>
  </div>
</template>

<script>
import titleq from '@/components/title'

export default {
  components: { titleq },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      th: [
        {
          prop: 'title',
          label: '商品名称',
          width: '344'
        },
        {
          prop: 'code',
          label: '商品编码',
          width: '155'
        },
        {
          prop: 'weight',
          label: '重量(Kg)',
          width: '155'
        },
        {
          prop: 'price',
          label: '单价',
          width: '168'
        },
        {
          prop: 'n',
          label: '购买数量',
          width: '155'
        },
        {
          prop: 'allPrice',
          label: '商品总价',
          width: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.center
  text-align center
.table
  >>>
    .el-table__header .cell
        text-align center
    .el-table__body-wrapper
      font-size .8rem
      color #333
  .title
    position relative
    padding-left 5rem
    height 5rem
    img
      width 5rem
      position absolute
      left 0
      top .1rem
    .info
      .name
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        overflow hidden
        text-overflow ellipsis
      .spec
        color #888
        font-size .7rem
.footer
  width 100%
  border 1px solid #EBEEF5
  border-top 0
  margin-bottom 1rem
  overflow hidden
  padding .5rem
  .msg
    float left
  .allPrice
    float right
</style>
