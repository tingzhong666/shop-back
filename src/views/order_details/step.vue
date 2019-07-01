<template>
  <el-steps :active="info.step" align-center>
    <el-step
      v-for="item in step"
      :key="item.title"
      :title="item.title"
      :description="item.description">
      </el-step>
  </el-steps>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    // 步骤条
    step () {
      return [
        {
          title: '下单',
          description: this.info.step >= 1 ? '2018-08-01 16:40:26' : ''
        },
        {
          title: '付款',
          description: this.info.step >= 2 ? '2018-08-02 16:40:26' : ''
        },
        {
          title: '发货',
          description: this.info.step >= 3 ? '2018-08-03 16:40:26' : ''
        },
        {
          title: '收货',
          description: this.info.step >= 4 ? '2018-08-04 16:40:26' : ''
        },
        {
          title: '评价',
          description: this.info.step >= 5 ? '2018-08-05 16:40:26' : ''
        },
        {
          title: '完成',
          description: this.info.step >= 6 ? '2018-08-06 16:40:26' : ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
