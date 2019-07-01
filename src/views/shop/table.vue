<template>
  <el-table
    :data="list"
    border
    stripe
    class="list"
    style="width: 100%">
    <el-table-column
      v-for="item in th"
      :key="item.label"
      :prop="item.prop"
      :label="item.label"
      :width="item.width">
      <template v-slot="{ row }">
        <!-- id -->
        <div v-if="item.prop === 'id'">
          {{row.id}}
        </div>

        <!-- 商品图片 -->
        <div v-if="item.prop === 'img'" class="img">
          <img :src="row.img">
        </div>

        <!-- 商品名称 -->
        <div v-if="item.prop === 'title'" class="title">
          {{row.title}}
        </div>

        <!-- 商品分类 -->
        <div v-if="item.prop === 'tab'">
          {{row.tab}}
        </div>

        <!-- 实际销量 -->
        <div v-if="item.prop === 'volume'">
          {{row.volume}}
        </div>

        <!-- 商品状态 -->
        <div v-if="item.prop === 'status'" class="status">
          {{row.status}}
        </div>

        <!-- 添加时间 -->
        <div v-if="item.prop === 'time'" class="time">
          {{row.time | date}}
        </div>

        <!-- 操作 -->
        <div v-if="item.prop === 'handle'">
          <el-button size="mini" icon="el-icon-edit" @click="edit(row)">编辑</el-button>
          <el-button size="mini" icon="el-icon-delete" type="danger" @click="rm(row)">删除</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      th: [
        {
          prop: 'id',
          label: 'ID',
          width: '59'
        },
        {
          prop: 'img',
          label: '商品图片',
          width: '80'
        },
        {
          prop: 'title',
          label: '商品名称',
          width: '352'
        },
        {
          prop: 'tab',
          label: '商品分类',
          width: '80'
        },
        {
          prop: 'volume',
          label: '实际销量',
          width: '80'
        },
        {
          prop: 'status',
          label: '商品状态',
          width: '80'
        },
        {
          prop: 'time',
          label: '添加时间',
          width: '148'
        },
        {
          prop: 'handle',
          label: '操作',
          width: ''
        }
      ]
    }
  },
  methods: {
    // 删除
    rm (item) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
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
    },
    // 编辑
    edit (item) {
      this.$router.push('/shop/edit/' + item.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list >>>
  .el-table__header-wrapper .cell
    text-align center
  .el-table__body-wrapper .cell
    font-size .8rem
    color #333
    text-align center
.img
  img
    width 100%
.status
  background #67C23A
  color #fff
  width 3rem
  text-align center
  margin 0 auto
  font-size .7rem
  font-weight 900
</style>
