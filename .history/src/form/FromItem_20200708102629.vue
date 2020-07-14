<template>
  <div class>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'FromItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate
    })
  },
  methods: {
    validate() {
      // 做校验
      const value = this.form.model[this.prop]
      console.log('value',value,'this.prop',this.prop);
      console.log('this.form.rules',  this.form.rules);
      const rules = this.form.rules[this.prop]
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      // return的是校验结果的Promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>
<style scoped>
</style>