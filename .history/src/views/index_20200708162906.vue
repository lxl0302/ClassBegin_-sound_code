<template>
  <div class="zong">
    <div class="toolbar">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>
<style scoped>
  .zong {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 200, 0.418);
  }

  .toolbar {
    position: absolute;
    top: 30px;
    left: 40%;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.377);
    display: flex;
  }
</style>