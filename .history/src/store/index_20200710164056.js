import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    masterName: '白焰小哥哥'
  },
  mutations: {
    increment(state) {
      state.count ++
    },
    decrement(state) {
      state.count --
    }
  }
})

export default store