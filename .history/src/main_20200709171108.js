import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'
// import router from './krouter'
import router from './router/index'

Vue.config.productionTip = false

Vue.prototype.$create =create

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
