<template>
  <div>
    <el-menu
      ref="menu"
      :default-active="active"
      class="menu"
      background-color="#324057"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="asideSwitch">
      <div
        v-for="item in list"
        :key="item.label">
        <!-- 无子菜单 -->
        <el-menu-item
          @click="to(item)"
          v-if="!item.child.length"
          :index="item.path">
          <i :class="item.iconfont" class="iconfont"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <!-- 有子菜单 -->
        <el-submenu
          v-if="item.child.length"
          :index="item.label">
          <template slot="title">
            <i :class="item.iconfont" class="iconfont"></i>
            <span>{{item.label}}</span>
          </template>

          <!-- 子菜单 -->
          <el-menu-item-group>
            <el-menu-item
              @click="to(v)"
              v-for="v in item.child"
              :key="v.label"
              :index="v.path">{{v.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      active: '/index',
      list: [
        {
          path: '/index',
          label: '商户信息',
          iconfont: 'icon-shanghuxinxi',
          child: []
        },
        {
          path: '/tabs',
          label: '分类',
          iconfont: 'icon-leimupinleifenleileibie',
          child: [
            {
              path: '/tabs',
              label: '查看'
            },
            {
              path: '/tabs/add',
              label: '添加'
            }
          ]
        },
        {
          path: '/order',
          label: '订单',
          iconfont: 'icon-dingdan',
          child: [
            {
              path: '/order',
              label: '全部'
            },
            {
              path: '/order/success',
              label: '已完成'
            },
            {
              path: '/order/send',
              label: '待发货'
            },
            {
              path: '/order/pay',
              label: '待付款'
            },
            {
              path: '/order/evaluate',
              label: '待评价'
            },
            {
              path: '/order/collect',
              label: '待收货'
            },
            {
              path: '/order/cancel',
              label: '已取消'
            },
            {
              path: '/order/refund',
              label: '已退款'
            }
          ]
        },
        {
          path: '/evaluate',
          label: '评价',
          iconfont: 'icon-evaluate',
          child: []
        },
        {
          path: '/shop',
          label: '商品',
          iconfont: 'icon-shangpin',
          child: [
            {
              path: '/shop/add',
              label: '添加'
            },
            {
              path: '/shop',
              label: '查看'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['asideSwitch'])
  },
  methods: {
    ...mapMutations(['setAsideDom']),
    to (item) {
      this.$router.push(item.path)
    }
  },
  created () {
    this.setAsideDom(this)
  }
}
</script>

<style lang="stylus" scoped>
.iconfont
  margin-right 1.7rem
>>>
  // 折叠时 右尖括号字体样式
  .el-submenu__icon-arrow
    right .5rem
    margin-top -0.3rem
  // 最里面 ul 标签
  .menu
    min-height 100vh
    width 100%
    transition width 0s
    overflow hidden
</style>
