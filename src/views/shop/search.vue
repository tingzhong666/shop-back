<template>
  <el-form :model="form" :inline="true">
    <el-form-item>
      <el-cascader
        v-model="form.tabs"
        placeholder="商品分类"
        :options="tabs"
        filterable></el-cascader>
    </el-form-item>

    <el-form-item>
      <el-select v-model="form.status" placeholder="商品状态">
        <el-option
          v-for="item in status"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-input v-model="form.q" placeholder="请输入商品名称"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="submit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { tabs } from '@/api'

export default {
  data () {
    return {
      form: {
        tabs: '',
        status: '',
        q: ''
      },
      tabs: [],
      status: [
        {
          label: '上架',
          value: 'up'
        },
        {
          label: '下架',
          value: 'down'
        },
        {
          label: '全部',
          value: 'all'
        }
      ]
    }
  },
  methods: {
    async get () {
      const { code, data } = await tabs()
      if (code === 0) {
        this.tabsHandle(data)
      }
    },
    tabsHandle (data) {
      data.map(item => {
        item.value = item.id + ''

        item.children = item.child.map(v => {
          v.value = v.id + ''
          return v
        })

        item.children.push({
          value: item.id + '0',
          label: '全部'
        })
      })

      data.push({
        value: '0',
        label: '全部'
      })

      this.tabs = data
    },
    // 查询提交
    submit () {
      this.$emit('submit', this.form)
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="stylus" scoped>

</style>
