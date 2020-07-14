<template>
  <div class>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Form',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: String
      }
    }
  },
  methods: {
    // 校验的最后结果
    validate() {
      
    }
  }
}
</script>
<style scoped>
</style>