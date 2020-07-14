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
      // 数据
      type: Object,
      required: true
    },
    rules: {
      // 校验规则
      type: Object
    }
  },
  mounted() {
    console.log('$router', this.$router);
  },
  methods: {
    // 校验的最后结果
    validateForm(cb) {
      const tasks = this.$children
        .filter(item => item.prop) // 过滤掉按钮
        .map(item => item.validate()) // 查询数组中的值
      console.log('答案', tasks);
      
      // 结果返回的是promise数组,通过数组来校验 集合
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>
<style scoped>
</style>