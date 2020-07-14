<template>
  <div>
    <div>
      {{model.title}}
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item1',
  data() {
    return {}
  },
  props: {
    model: {
      type: Object
    }
  },
  computed: {
    isFolder() {
      return this.model.Children && this.model.Children.length
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped>
</style>