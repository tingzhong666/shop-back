<template>
  <div>
    <el-dialog title="回复" :visible="show" @update:visible="close">
      <el-input
        class="text"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 10}"
        placeholder="请输入内容"
        v-model="input">
      </el-input>

      <template v-slot:footer>
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submit">回复</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  props: {
    // 某条评价的id
    id: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
    },
    // 回复提交
    submit () {
      this.$message.info('莫接口')
    }
  }
}
</script>

<style lang="stylus" scoped>
.text >>> .el-textarea__inner
    resize none
</style>
