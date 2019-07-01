<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item>
      <el-select v-model="form.region" placeholder="快递">
        <el-option :label="item.label" :value="item.value" v-for="item in express" :key="item.label"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-date-picker
        v-model="form.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>

    <el-form-item>
      <el-input
        v-model="form.id"
        placeholder="订单号/用户昵称">
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        region: '',
        date: '',
        id: ''
      },
      express: [
        { label: '圆通快递', value: 'yuantogn' },
        { label: '申通快递', value: 'shentong' }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', [])
    }
  }
}
</script>

<style lang="stylus" scoped>
// 日期范围组件  ‘至’字这个标签
>>> .el-date-editor .el-range-separator
  width 7%
</style>
