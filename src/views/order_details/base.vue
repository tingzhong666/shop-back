<template>
  <div class="base">
    <titleq class="title">基本信息</titleq>

    <el-table
      :data="table"
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
          <!-- 订单号 -->
          <div v-if="item.prop === 'orderN'" class="item">
            {{row.id}}
          </div>

          <!-- 买家 -->
          <div v-if="item.prop === 'name'" class="item name">
            {{row.name}}
            <div class="nameId">
              (用户id：{{row.nameId}})
            </div>
          </div>

          <!-- 订单金额 -->
          <div v-if="item.prop === 'money'" class="item money">
            <div
              class="li"
              v-for="item in money"
              :key="item.label">
              <div class="label">{{item.label}}</div>
              <div class="v" :class="{ actual: item.label === '实付款金额' }">￥{{item.v}}</div>
            </div>
          </div>

          <!-- 支付方式 -->
          <div v-if="item.prop === 'payMethod'" class="item">
            <div class="tag">{{row.payMethod}}</div>
          </div>

          <!-- 快递 -->
          <div v-if="item.prop === 'express'" class="item">
            <div class="tag">{{row.express}}</div>
          </div>

          <!-- 交易状态 -->
          <div v-if="item.prop === 'status'" class="item">
            <status :row="row"/>
          </div>

          <!-- 操作 -->
          <div v-if="item.prop === 'handle'" class="item">
            <div class="handle" @click="modify = true">修改价格</div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改价格 弹框 -->
    <el-dialog title="修改价格" :visible.sync="modify" width="20rem">
      <el-form :model="modifyForm">
        <el-form-item label="订单金额" label-width="5rem">
          <el-input-number
            v-model="modifyForm.order"
            controls-position="right"
            :min="0">
          </el-input-number>
        </el-form-item>

        <el-form-item label="运费金额" label-width="5rem">
          <el-input-number
            v-model="modifyForm.freight"
            controls-position="right"
            :min="0">
          </el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modify = false">取 消</el-button>
        <el-button type="primary" @click="modifySure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import titleq from '@/components/title'
import status from '@/components/status'

export default {
  components: { titleq, status },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      modify: false,
      modifyForm: {
        order: 0,
        freight: 0
      },
      th: [
        {
          prop: 'orderN',
          label: '订单号',
          width: '187'
        },
        {
          prop: 'name',
          label: '买家',
          width: '158'
        },
        {
          prop: 'money',
          label: '订单金额',
          width: '295'
        },
        {
          prop: 'payMethod',
          label: '支付方式',
          width: '108'
        },
        {
          prop: 'express',
          label: '快递',
          width: '108'
        },
        {
          prop: 'status',
          label: '交易状态',
          width: '193'
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
    table () {
      return [this.info]
    },
    money () {
      return [
        {
          label: '订单总额',
          v: this.info.moneyAll
        },
        {
          label: '运费',
          v: this.info.freight
        },
        {
          label: '后台改价',
          v: this.info.backModify
        },
        {
          label: '实付款金额',
          v: this.info.actual
        }
      ]
    }
  },
  methods: {
    // 修改价格
    modifySure () {
      // console.log(this.modifyForm)
      this.$message.info('没有接口')
    }
  }
}
</script>

<style lang="stylus" scoped>
.base >>> .el-table__header .cell
  text-align center
.item
  text-align center
  font-size .8rem
  color #333
.name
  .nameId
    color #888
.money
  .li
    overflow hidden
    .label
      float left
    .v
      float right
      &.actual
        color red
.tag
  background-color #409EFF
  color #fff
  font-weight 900
  display inline-block
  padding 0 .5rem
  font-size .7rem
.handle
  cursor pointer
  color #409EFF
</style>
