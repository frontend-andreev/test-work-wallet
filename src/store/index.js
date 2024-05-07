import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      webSocket: 'wss://stream.binance.com:9443/ws/bnbbtc@depth',
      api: 'https://api.binance.com/api/v3/depth',
      connection: null,
      currentCurrency: 'BTCUSDT',
      currentLimit: 100,
      data: null,
      logs: []
    }
  },
  mutations: {
    changeData (state, data) {
      state.data = data
    },
    changeLogs(state, logs) {
      state.logs.push(logs)
    },
    changeCurrency(state, currency) {
      state.currentCurrency = currency
    },
    changeLimit(state, limit) {
      state.currentLimit = limit
    },
    changeConnection(state, connection) {
      state.connection = connection
    }
  },
  actions: {
    rest({state, commit}, currency) {
      commit('changeCurrency', currency)
      state.connection?.close()
      commit('changeConnection', new WebSocket(state.webSocket))
      state.connection.onmessage = (() => {
        axios.get(state.api, {
          params: {limit: state.currentLimit, symbol: currency}
        }).then((response) => {
          commit('changeData', response.data)
        })
      })
    }
  },
  getters: {
    getBids(state) {
      return state.data?.bids
    },
    getAsks(state) {
      return state.data?.asks
    },
    getLogs(state) {
      return state.logs
    },
    getCurrentCurrency(state) {
      return state.currentCurrency
    },
    getCurrentLimit(state) {
      return state.currentLimit
    }
  }
})
export default store