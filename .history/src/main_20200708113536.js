import Vue from 'vue'
import App from './App.vue'
import cretae from './utils/create'

Vue.config.productionTip = false

Vue.protype.$cretae =cretae

new Vue({
  render: h => h(App),
}).$mount('#app')
