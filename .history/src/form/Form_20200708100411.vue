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
    validate(cb) {
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())

      // 所有任务都通过才算校验通过
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>
<style scoped>
</style>