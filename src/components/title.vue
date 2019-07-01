<template>
  <div class="title">
    <div class="label">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.title
  border-bottom 1px solid #eef1f5
  padding-bottom 1rem
  padding-left .3rem
  margin-top .5rem
  .label
    border-left .2rem solid #409EFF
    padding-left 1rem
</style>
