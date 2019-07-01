<template>
  <div>
    <titleq>其他设置</titleq>

    <el-form label-width="5rem" class="form" :model="form" :rules="rules">
      <el-form-item label="运费" prop="freight">
        <el-input :value="form.freight" @input="$emit('update:freight', $event)" type="number"></el-input>
      </el-form-item>
      <el-form-item label="商品状态" prop="status">
        <el-radio-group :value="form.status" @input="$emit('update:status', $event)">
          <el-radio label="up">上架</el-radio>
          <el-radio label="down">下架</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import titleq from '@/components/title'

export default {
  components: { titleq },
  props: ['freight', 'status'],
  data () {
    return {
      rules: {
        freight: [{ required: true, message: '请设置运费', trigger: 'blur' }],
        status: [{ required: true }]
      }
    }
  },
  computed: {
    form () {
      return {
        freight: this.freight + '',
        status: this.status
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  max-width 60rem
  margin 0 auto
  margin-top 1rem
</style>
