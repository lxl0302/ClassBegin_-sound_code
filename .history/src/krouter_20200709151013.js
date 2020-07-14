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
}