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
  methods: {}
}
</script>
<style scoped>
</style>