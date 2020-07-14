<template>
  <div class>
    <input :value="value" @input="changeMethods" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    value: {
      type: String
    }
  },
  computed: {},
  mounted() {},
  methods: {
    changeMethods(e) {
      this.$emit('input', e.target.value)
      // 将值返给fomritem 做校验
      this.$parent.$emit('validate')
    }
  }
}
</script>
<style scoped>
</style>