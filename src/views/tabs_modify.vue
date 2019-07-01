<template>
  <card class="card">
    <template v-slot:header>{{mode === 'add' ? '分类添加' : '分类修改'}}</template>

    <el-form class="form" :model="form" label-width="5rem" :rules="rules">
      <el-form-item label="分类名称" prop="name">
        <el-input step="1" v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="上级分类" prop="parentId">
        <el-select v-model="form.parentId" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="分类图片" prop="img">
        <el-upload
          :multiple="false"
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          class="upload"
          ref="upload"
          :on-success="uploadOK"
          :file-list="files"
          :limit="1">
            <!-- 添加 -->
            <i slot="default" class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </card>
</template>

<script>
import { mapState } from 'vuex'
import { tabs, tabInfo } from '@/api'
import card from '@/components/card'

export default {
  components: { card },
  data () {
    return {
      // 图片
      files: [],
      // 上级分类
      options: [
        {
          id: 0,
          label: '无'
        }
      ],
      // 表单
      form: {
        name: '',
        parentId: ''
      },
      // 表单验证规则
      rules: {
        name: [
          {
            required: true,
            message: '请输入分类名称！',
            trigger: 'blur'
          }
        ],
        parentId: [
          {
            required: true,
            message: '请选择上级分类！',
            trigger: 'blur'
          }
        ],
        img: [
          {
            required: true
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['asideDom']),
    mode () {
      if (this.$route.path === '/tabs/add') return 'add'
      if (this.$route.path === '/tabs/modify') return 'modify'
      return ''
    },
    id () {
      return this.mode === 'modify' ? this.$route.query.id : ''
    }
  },
  watch: {
    mode (newV, oldV) {
      if (oldV === 'modify' && newV === 'add') {
        this.form = {
          name: '',
          parentId: ''
        }
        this.files = []
      }
    }
  },
  methods: {
    // 获取分类
    async getTabs () {
      const res = await tabs()
      if (res.code === 0) {
        this.options = this.options.concat(res.data)
      }
    },
    // 提交
    submit () {
      // 上传图片
      // this.$refs.upload.submit()
      this.$message.info('没有接口')
    },
    // 图片上传完成，进行提交数据
    uploadOK () {
      console.log(this.form)
    },
    init () {
      this.asideDom.active = this.$route.path
      this.getTabs()

      if (this.mode === 'modify') {
        this.getTabInfo()
      }
    },
    // 修改页面时 获取该分类信息
    async getTabInfo () {
      const res = await tabInfo()
      if (res.code === 0) {
        this.form = {
          name: res.data.label,
          parentId: res.data.parentId,
          id: res.data.id
        }
        this.files = [{
          name: 'a.jpg',
          url: res.data.img
        }]
      }
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
.upload
  overflow hidden
  width 10rem
  height 10rem
</style>
