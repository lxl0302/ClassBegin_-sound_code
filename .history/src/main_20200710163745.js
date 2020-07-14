import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'
import router from './router/index'
import vuex from './store/index'

Vue.config.productionTip = false

Vue.prototype.$create =create

new Vue({
  router,
  vuex,
  render: h => h(App),
}).$mount('#app')