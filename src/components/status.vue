<template>
  <div>
    <div
      class="li"
      v-for="item in list"
      :key="item.label">
      <span>{{item.label}}：</span>
      <span :class="row[item.v] ? 'success' : 'fail'">{{item.status}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list () {
      return [
        {
          label: '付款状态',
          v: 'payed',
          status: this.row.payed ? '已付款' : '待付款'
        },
        {
          label: '发货状态',
          v: 'publish',
          status: this.row.publish ? '已发货' : '待发货'
        },
        {
          label: '收货状态',
          v: 'accept',
          status: this.row.accept ? '已收货' : '待收货'
        }
      ]
    }
  },
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.success,
.fail
  color #fff
  padding .05rem .5rem

.success
  background-color #67C23A
.fail
  background-color #909399
</style>
