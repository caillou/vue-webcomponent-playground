import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const CancelToken = axios.CancelToken

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    origin: undefined,
    destination: undefined,
    trips: undefined,
    language: 'de'
  },
  mutations: {
  },
  actions: {
    origin (store, value) {
      store.state.origin = value
      getTripData(store)
    },
    destination (store, value) {
      store.state.destination = value
      getTripData(store)
    }
  },
  getters: {
    dateTimeISO: state => state.dateTime.toISOString()
  }
})

let tripRequestCancelation

function getTripData (store) {
  const origin = store.state.origin
  const destination = store.state.destination

  const originAndDestinationSet = (origin && destination)
  if (!originAndDestinationSet) return

  store.state.trips = 'loading'

  tripRequestCancelation && tripRequestCancelation()

  axios
    .get(`https://global-warmer.com/sbb/from/${origin.uic}/to/${destination.uic}`, {
      cancelToken: new CancelToken(function executor (c) {
        // An executor function receives a cancel function as a parameter
        tripRequestCancelation = c
      })
    })
    .then((result) => {
      store.state.trips = result.data.trips
    })
}
