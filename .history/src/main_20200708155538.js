import Vue from 'vue'
import App from './App.vue'
import create from './utils/create'
import router from './router/index'

Vue.config.productionTip = false

Vue.prototype.$create =create
Vue.prototype.$router = router

new Vue({
  render: h => h(App),
}).$mount('#app')
