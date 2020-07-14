import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    eatFood: '',
    masterName: '白焰小哥哥'
  },
  mutations: {
    getFoods(state) {
      state.eatFood  = '好吃的'
    },
    decrement(state) {
      state.eatFood --
    }
  }
})

export default store