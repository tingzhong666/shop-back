<template>
  <div>
    <titleq>规格/库存</titleq>

    <el-form label-width="6rem" class="form" :model="form" :rules="rules">
      <el-form-item label="商品编码" prop="code">
        <el-input type="number" :value="code" @input="$emit('update: code', $event)"></el-input>
      </el-form-item>

      <el-form-item label="商品价格" prop="price">
        <el-input type="number" :value="price" @input="$emit('update: price', $event)"></el-input>
      </el-form-item>

      <el-form-item label="商品划线价" prop="scribing">
        <el-input type="number" :value="scribing" @input="$emit('update: scribing', $event)"></el-input>
      </el-form-item>

      <el-form-item label="当前库存量" prop="n">
        <el-input type="number" :value="n" @input="$emit('update: n', $event)"></el-input>
      </el-form-item>

      <el-form-item label="商品重量(Kg)" prop="weight">
        <el-input type="number" :value="weight" @input="$emit('update: weight', $event)"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import titleq from '@/components/title'

export default {
  components: { titleq },
  props: ['code', 'price', 'scribing', 'n', 'weight'],
  data () {
    return {
      rules: {
        price: [{ required: true, message: '请填写商品价格！', trigger: 'blur' }],
        n: [{ required: true, message: '请填写库存数量！', trigger: 'blur' }],
        weight: [{ required: true, message: '请填写商品重量！', trigger: 'blur' }]
      }
    }
  },
  computed: {
    form () {
      return {
        code: this.code,
        price: this.price,
        scribing: this.scribing,
        n: this.n,
        weight: this.weight
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
