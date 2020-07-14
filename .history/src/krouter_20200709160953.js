import Vue from "vue";
//组件路由
import KFrom from "./form/index.vue";
import Tree from "./tree/index1.vue";
import HomePage from "./views/homepage.vue";

class VueRouter {
  constructor(options) {
    // options就是vue-router实例中的方法
    this.$options = options;
    this.routeMap = {};
    // 路由响应式
    this.app = new Vue({
      data: {
        current: "/",
      },
    });
  }
  init() {
    this.bindEvents(); //监听url变化
    console.log('什么是this.$options:',this.$options)
    this.createRouteMap(this.$options); // 解析路由配置
    this.initComponent(); // 实现两个组件
  }
  bindEvents() {
    window.addEventListener("load", this.onHashChange.bind(this));
    window.addEventListener("hashchange", this.onHashChange.bind(this));
  }
  onHashChange() {
    // 当路径改变时 找到当前最新路径
    this.app.current = window.location.hash.slice(1) || "/";
  }
  createRouteMap(options) {
    options.routes.forEach((item) => {
      this.routeMap[item.path] = item.component;
    });
  }
  initComponent() {
    // 创建<router-link></router-link> and <router-view></router-view>
    Vue.component("router-link", {
      props: { to: String },
      render(h) {
        return h("a", { attrs: { href: "#" + this.to } }, [
          this.$slots.default,
        ]);
      },
    });
    Vue.component("router-view", {
      // 根据对应路由创建组件
      render: (h) => {
        const comp = this.routeMap[this.app.current];
        return h(comp);
      },
    });
  }
}
// Vue.use 启动的方法
VueRouter.install = function(Vue) {
  // 混入
  Vue.mixin({
    beforeCreate() {
      // this是挂载过的实例
      if (this.$options.router) {
        // 仅在根组件执行一次
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    },
  });
};

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/pagehome",
    },
    {
      path: "/pagehome",
      component: HomePage,
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
