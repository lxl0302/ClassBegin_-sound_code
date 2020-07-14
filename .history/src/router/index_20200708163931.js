import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建vue-router实例
// 2.1 导入路由映射组件
const router = new VueRouter({
  // 配置映射
  routes: []
})

// 3.导出
export default router