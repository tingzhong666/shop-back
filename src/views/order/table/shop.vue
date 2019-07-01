<template>
  <div class="shop">
    <!-- 日期 单号 -->
    <div class="info">
      <div class="time">{{ row.time | date }}</div>
      <div class="id">订单号：{{ row.orderN }}</div>
    </div>

    <!-- 商品列表 -->
    <div class="list">
      <div
        class="li"
        v-for="item in row.shop"
        :key="item.title">
        <!-- 图片 -->
        <div class="img">
          <img :src="item.img">
        </div>

        <!-- 信息 -->
        <div class="info">
          <!-- 标题 -->
          <div class="title">{{item.title}}</div>

          <!-- 规格 -->
          <div class="spec">{{item.spec}}</div>
        </div>
      </div>
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

.shop > .info
  border-bottom 1px solid $border
  overflow hidden
  line-height 2rem
  .time
    float left
    margin-left .5rem
  .id
    float right
    margin-right .5rem
.list
  .li
    padding .5rem 0
    padding-left 5rem
    position relative
    border-bottom 1px solid $border
    overflow hidden
    height 6rem
    &:last-child
      border none
    .img
      position absolute
      left 0
      top .5rem
      width 5rem
      img
        width 100%
    > .info
      .title
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
        overflow hidden
        text-overflow ellipsis
      .spec
        color #888
        font-size .7rem
</style>
