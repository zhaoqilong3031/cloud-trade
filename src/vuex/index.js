import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    user
  }
})

export default store
