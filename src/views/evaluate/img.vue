<template>
  <div class="img">
    <el-dialog
      title="配图查看"
      :visible="show"
      @update:visible="close">
      <img
        v-for="(item, index) in img"
        :key="index"
        :src="item">

      <template v-slot:footer>
        <el-button type="primary" @click="close">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.img
  img
    width 10rem
    margin 1rem
</style>
