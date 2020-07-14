<template>
  <div class>
    <label></label>
    <slot></slot>
    <p></p>
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
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
</style>