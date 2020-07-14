<template>
  <div class="zong">
    <div class="toolbar">
      <span @click="formClick">表单</span>
      <span @click="treeClick">树</span>
      <span>告示板</span>
      <span>详情</span>
    </div>
    <!-- 展示路由组件 -->
    <router-view></router-view>
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
    methods: {
      formClick() {
        alert('1')
        this.$router.push('/kform')
      },
      treeClick() {}
    }
  }
</script>
<style scoped>
  div {
    /*早期浏览器*/
    user-select: none;
  }

  .zong {
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 255, 200, 0.418); */
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

  .toolbar span:hover {
    font-size: 16px;
    color: rgb(47, 206, 255);
  }
</style>