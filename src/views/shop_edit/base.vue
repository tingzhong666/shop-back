<template>
  <div>
    <titleq>基本信息</titleq>

    <el-form label-width="5rem" class="form" :rules="rules" :model="form">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="form.title" @input="$emit('update:title', $event)"></el-input>
      </el-form-item>

      <el-form-item label="商品分类" prop="tab">
        <el-cascader
          placeholder="请选择商品分类"
          v-model="form.tab"
          @input="$emit('update:tab', $event)"
          :options="tabs"
          filterable></el-cascader>
      </el-form-item>

      <el-form-item label="商品图片" prop="imgs">
        <el-upload
          ref="upload"
          action="#"
          :file-list="imgs"
          :auto-upload="false"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品卖点" prop="intro">
        <el-input v-model="form.intro" @input="$emit('update:intro', $event)"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import titleq from '@/components/title'
import { tabs } from '@/api'

export default {
  components: { titleq },
  props: ['title', 'imgs', 'tab', 'intro'],
  data () {
    return {
      tabs: [],
      rules: {
        title: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }
        ],
        tab: [{ required: true }],
        imgs: [{ required: true }]
      }
    }
  },
  computed: {
    form () {
      return {
        title: this.title,
        imgs: this.imgs,
        tab: this.tab,
        intro: this.intro
      }
    }
  },
  methods: {
    async getTabs () {
      const { code, data } = await tabs()
      if (code === 0) {
        this.tabsHandle(data)
      }
    },
    tabsHandle (data) {
      data = data.map(item => {
        item.value = item.id + ''

        item.children = item.child.map(v => {
          v.value = v.id + ''
          return v
        })

        item.children.push({
          value: item.id + '0',
          label: '全部'
        })

        return item
      })

      data.push({
        value: '0',
        label: '全部'
      })

      this.tabs = data
    }
  },
  created () {
    this.getTabs()
  }
}
</script>

<style lang="stylus" scoped>
.form
  max-width 60rem
  margin 0 auto
  margin-top 1rem
</style>
