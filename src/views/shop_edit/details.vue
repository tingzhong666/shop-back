<template>
  <div>
    <titleq>商品详情</titleq>

    <el-form label-width="5rem" class="form">
      <el-form-item label="商品详情">
        <el-upload
          class="upload"
          action="#"
          multiple
          accept="image/*"
          :auto-upload="false"
          :file-list="details"
          :on-change="change">
          <el-button size="mini" type="primary">点击选择</el-button>

        </el-upload>
      </el-form-item>
    </el-form>

    <!-- 预览 -->
    <div class="preview">
      {{details.length ? '' : '预览'}}

      <img
        v-for="(item, i) in list"
        :key="i"
        :src="item"/>
    </div>
  </div>
</template>

<script>
import titleq from '@/components/title'

export default {
  components: { titleq },
  props: ['details'],
  data () {
    return {
      list: []
    }
  },
  watch: {
    details () {
      this.update(this.details)
    }
  },
  methods: {
    change (file, fileList) {
      this.update(fileList)

      this.$emit('update:details', fileList)
    },
    update (fileList) {
      let arr = []
      fileList.forEach(item => {
        if (!item.raw) {
          arr.push(item.url)
          return
        }

        const read = new FileReader()
        read.readAsDataURL(item.raw)
        read.onload = function (res) {
          arr.push(res.target.result)
        }
      })
      this.list = arr
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  max-width 60rem
  margin 0 auto
  margin-top 1rem
.preview
  max-width 25rem
  margin-left 1rem
  border 1px solid #d4d4d4
  height 35rem
  color #888
  font-size .8rem
  text-align center
  margin 0 auto
  padding 1px
  overflow-y scroll
  &::-webkit-scrollbar
    width .5rem
  &::-webkit-scrollbar-thumb
    border-radius 1rem
    background-color #bbb
    &:hover
      background-color #bbb - 10%
  img
    width 100%
    vertical-align middle
</style>
