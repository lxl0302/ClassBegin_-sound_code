<template>
  <div>
    <div @click="nodeChange">
      {{model.titile}}
      <span v-show="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-if="open">
      <item1 v-for="model in model.Children" :model=model :key="model.titile"></item1>
    </ul>
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
  methods: {
    nodeChange() {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
</style>