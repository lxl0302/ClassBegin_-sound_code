import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$create =create

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')