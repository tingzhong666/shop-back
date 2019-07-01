<template>
  <div class="n">

    <div class="line" :style="{ marginTop: '1px' }"></div>

    <div
      class="li"
      v-for="item in row.shop"
      :key="item.title">
      ￥{{item.price}}
      <div>x{{item.n}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
// 边框
$border = #ebeef5

.n
  padding-top 2rem
  .li
    height 6rem
    text-align center
    padding-top 1.5rem
    border-bottom 1px solid $border
    &:last-child
      border 0
</style>
