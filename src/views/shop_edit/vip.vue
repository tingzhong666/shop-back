<template>
  <div>
    <titleq>会员折扣</titleq>

    <el-form label-width="10rem" class="form" :model="form" :rules="rules">
      <el-form-item label="是否开启会员折扣" prop="swi">
        <el-radio-group :value="form.swi" @input="$emit('update:swi', $event)">
          <el-radio :label="true">开启</el-radio>
          <el-radio :label="false">关闭</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="商品状态" v-if="swi" prop="def">
        <el-radio-group :value="form.def" @input="$emit('update:def', $event)">
          <el-radio :label="true">默认折扣</el-radio>
          <el-radio :label="false">单独设置折扣</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="折扣率" v-if="!def && swi" prop="alone">
        <el-input :value="form.alone" :placeholder="0" type="number" @input="$emit('update:alone', $event)"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import titleq from '@/components/title'

export default {
  components: { titleq },
  props: ['swi', 'def', 'alone'],
  computed: {
    rules () {
      return {
        swi: [{ required: true }],
        def: [{ required: this.swi }],
        alone: [{ required: this.swi && !this.def }]
      }
    },
    form () {
      return {
        swi: this.swi,
        def: this.def,
        alone: this.alone
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
