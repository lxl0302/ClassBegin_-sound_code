<template>
  <div class>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  name: 'FromItem',
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMessage: ""
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate
    })
  },
  methods: {}
}
</script>
<style scoped>
</style>