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