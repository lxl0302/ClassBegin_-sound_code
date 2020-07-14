<template>
  <div class="zong">
    <item1 :model="treeData"/>
  </div>
</template>

<script>
import item1 from './Item1'
export default {
  name: 'index',
  components: {
    item1
  },
  data() {
    return {
      treeData: [{
        titile: 'ClassBegin',
        Children: [{
          titile: 'Vue2.x',
          Children: [{
            titile: 'Vue基本语法'
          },{
            titile: '组件通信'
          },{
            titile: 'slot'
          },{
            titile: 'v-router'
          },{
            titile: 'vuex'
          },{
            tiitle: '源码',
            Children: [{
              titile: 'v-router源码'
            },{
              titile: 'vuex源码'
            },{
              titile: 'vue组成方式'
            }]
          }]
        },{
          titile: 'Vue3.0',
          Children: [{
            titile: '有待开发'
          }]
        }]
      }]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.zong{
  list-style: none;
}
</style>