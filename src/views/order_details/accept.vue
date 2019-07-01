<template>
  <div>
    <titleq>收货信息</titleq>

    <el-table
      :data="[info]"
      border
      class="table"
      style="width: 100%">
      <el-table-column
        v-for="item in th"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
    </el-table>
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
          label: '收货人',
          prop: 'acceptPeople',
          width: '186'
        },
        {
          label: '收货电话',
          prop: 'acceptPhone',
          width: '322'
        },
        {
          label: '收货地址',
          prop: 'acceptAddress',
          width: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.table
  >>> .cell
    text-align center
</style>
