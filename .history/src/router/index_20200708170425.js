import Vue from "vue";
import VueRouter from "vue-router";

// 1.安装插件
Vue.use(VueRouter);

// 2.创建vue-router实例
//   2.1 导入路由映射组件
import KFrom from "../form/index.vue";
import Tree from "../tree/index1.vue";
import HomePage from '../views/homepage.vue'
const router = new VueRouter({
  // 配置映射
  routes: [
    {
      path: '',
      redirect: '/pagehome'
    },
    {
      path: '/pagehome',
      component: HomePage
    },
    {
      path: "/kform", // 设置路由路径
      component: KFrom, // 路由路径对应组件
    },
    {
      path: "/tree",
      component: Tree,
    },
  ],
});

// 3.导出
export default router;
