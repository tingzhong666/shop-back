<template>
  <el-card class="card">
    <template v-slot:header>
      <div class="header">
        <slot name="header"></slot>
      </div>
    </template>

    <slot></slot>
  </el-card>
</template>

<style lang="stylus" scoped>
.card
  padding 1rem 2rem
.header
  border-left .2rem solid $card-blue
  padding-left 1rem
</style>
