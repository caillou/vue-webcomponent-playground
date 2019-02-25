import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dateTime: new Date()
  },
  mutations: {
    updateDateTime (state) {
      state.dateTime = new Date()
    }
  },
  actions: {

  },
  getters: {
    dateTimeISO: state => state.dateTime.toISOString()
  }
})

export default store

function loop () {
  store.commit('updateDateTime')
  requestAnimationFrame(loop)
}
loop()
