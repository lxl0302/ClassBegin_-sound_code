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
      state.eatFood  = '鸡腿'
    },
    decrement(state) {
      state.eatFood --
    }
  }
})

export default store