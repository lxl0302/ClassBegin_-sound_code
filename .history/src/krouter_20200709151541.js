import Vue from "vue"

class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};
    // 路由响应式
    this.app = new Vue({
      data: {
        current: "/"
      }
    })
  }
  init() {
    this.bindEvents(); //监听url变化
    this.createRouteMap(this.$options); // 解析路由配置
    this.initComponent(); // 实现两个组件
  }
  bindEvents() {
    window.addEventListener("load", this.onHashChange.bind(this))
    window.addEventListener("hashchange", this.onHashChange.bind(this))
  }
  onHashChange() { // 当路径改变时 找到当前最新路径
    this.app.current = window.location.hash.slice(1) || "/";
  }
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component;
    })
  }
  initComponent() { // 创建<router-link></router-link> and <router-view></router-view>
    Vue.component("router-link", {
      props: {to: String},
      render(h) {
        return h("a", {attrs: {href: '#' + this.to}}, [
          this.$slots.default
        ]);
      }
    })
  }
}