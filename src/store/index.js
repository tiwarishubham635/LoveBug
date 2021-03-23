import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    adduser(cont,user){
      cont.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
