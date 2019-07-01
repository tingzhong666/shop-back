<template>
  <card>
    <template v-slot:header>分类管理</template>

    <!-- 标题 -->
    <div class="th">
      <div class="li" v-for="item in list" :key="item">{{item}}</div>
    </div>

    <!-- 列表 -->
    <el-menu
      default-active="0"
      class="list">
      <div
        class="li"
        v-for="item in tabs"
        :key="item.id">
        <!-- 无子分类 -->
        <el-menu-item :index="item.id + ''" v-if="!item.child.length">
          <span slot="title">
            <div class="item">{{item.label}}</div>
            <div class="item">{{item.id}}</div>
            <div class="item">{{item.time | date}}</div>
            <div class="item">
              <el-button size="mini" icon="el-icon-edit" @click.stop="modify(item)">修改</el-button>
              <el-button size="mini" icon="el-icon-delete" @click.stop="rm(item)" type="danger">删除</el-button>
            </div>
          </span>
        </el-menu-item>

        <!-- 有子分类 -->
        <el-submenu :index="item.id + ''" v-if="item.child.length">
          <div slot="title" class="groupP">
            <div class="item">{{item.label}}</div>
            <div class="item">{{item.id}}</div>
            <div class="item">{{item.time | date}}</div>
            <div class="item">
              <el-button size="mini" icon="el-icon-edit" @click.stop="modify(item)">修改</el-button>
              <el-button size="mini" icon="el-icon-delete" @click.stop="rm(item)" type="danger">删除</el-button>
            </div>
          </div>

          <!-- 子分类 -->
          <el-menu-item-group class="group">
            <el-menu-item
              :index="v.id + ''"
              v-for="v in item.child"
              :key="v.id">
              <div class="item">{{v.label}}</div>
              <div class="item">{{v.id}}</div>
              <div class="item">{{v.time | date}}</div>
              <div class="item">
                <el-button size="mini" icon="el-icon-edit" @click.stop="modify(v)">修改</el-button>
                <el-button size="mini" icon="el-icon-delete" @click.stop="rm(v)" type="danger">删除</el-button>
              </div>
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </card>
</template>

<script>
import { tabs } from '@/api'
import { mapState } from 'vuex'
import card from '@/components/card'

export default {
  components: { card },
  data () {
    return {
      tabs: [],
      list: ['分类名称', 'ID', '添加时间', '操作']
    }
  },
  computed: {
    ...mapState(['asideDom'])
  },
  methods: {
    async get () {
      const res = await tabs()
      if (res.code === 0) {
        this.tabs = res.data
      }
    },
    // 修改页面
    modify (item) {
      this.$router.push('/tabs/modify?id=' + item.id)
    },
    // 删除
    rm (item) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.info('没有接口，仅供展示')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created () {
    this.asideDom.active = this.$route.path
    this.get()
  }
}
</script>

<style lang="stylus" scoped>
// 标题
.th
  margin-bottom .5rem
  margin-left .7rem
  font-size .9rem
  .li
    display inline-block
    width 25%
// 折叠列表
.list
  border none
  .li
    background-color #F9F9F9
    border-bottom 1px solid #ddd
    &:first-child
      border-top 1px solid #ddd
    // 一级分类每行
    >>> .el-submenu__title
    .el-menu-item
      height 2.5rem
      line-height 2.5rem
      .item
        display inline-block
        width 25%
    // 有子分类的父行
    .groupP
      color #666
      font-size .8rem
      .item
        // 操作按钮
        &:last-child
          position relative
          top -.2rem
          >>> .el-icon-delete
            color #fff
    // 子分类
    .group
      >>>
        .el-menu-item-group__title
          display none
        // 子分类每行
        .el-menu-item
          border-top 1px solid #ddd
          .item
            // id
            &:nth-child(2)
              position relative
              left -.5rem
            // 时间
            &:nth-child(3)
              position relative
              left .2rem
            // 操作按钮
            &:last-child
              position relative
              left .9rem
              top -.2rem
    // 选中清除
    .is-active
      color #333
    // 每行  不包括有子分类的父行
    .el-menu-item
      cursor default
      color #666
      font-size .8rem
      &:focus
      &:hover
        background-color #ffffff00
      .item
        // 操作按钮
        &:last-child
          position relative
          top -.2rem
          >>> .el-icon-delete
            color #fff
</style>
