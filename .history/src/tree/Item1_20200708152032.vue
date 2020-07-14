<template>
  <div>
    <div>
      {{model.title}}
      <span v-show="isFolder">[{{open ? '+' : '-'}}]</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item1',
  data() {
    return {
      open: false
    }
  },
  props: {
    model: {
      type: Object
    }
  },
  computed: {
    isFolder() { // 判断有没有子类
      return this.model.Children && this.model.Children.length
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped>
</style>