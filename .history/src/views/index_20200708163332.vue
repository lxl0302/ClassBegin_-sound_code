<template>
  <div class="zong">
    <div class="toolbar">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
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
  div {
    /*早期浏览器*/
    /* user-select: none; */
  }

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
    /* 设置元素两端对齐 */
    text-align: justify;
  }

  .toolbar::after {
    content: '';
    display: inline-block;
    overflow: hidden;
    width: 100%;
  }

  .toolbar span {
    width: 25%;
    /* 设置盒子为行内块 */
    display: inline-block;
    /* background-color: skyblue; */
    /* 设置盒子内元素水平居中 */
    text-align: center;
    /* 设置盒子内容垂直居中 */
    line-height: 30px;
  }

  .toolbar span::before {
    color: greenyellow;
  }
</style>