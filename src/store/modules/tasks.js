import * as storage from '@/utils/storage'
import * as api from '@/api/'
export default {
  actions: {
    login({ commit, dispatch }, data) {
      return api.auth.login(data).then(response => {
        storage.token.set(response.user.api_token)
        commit('setUser', response.user)
  
        dispatch('getTasks')
      })
    },
    // getTasks({ commit }) {
    //   return api.auth.get().then(response => {
    //     commit("setUser", response.data)
    //   })
    // },
  },
  mutations: {

    updateStore(state) {
       state.user = JSON.parse(localStorage.getItem('user') || '[]')
    },
      setUser(state, user) {
        state.user = user
      }
    
  },
  state: {
    user: JSON.parse(localStorage.getItem('user') || '[]')
  },
  getters: {
    userName(state) {
      return state.user.name
    },
    userToken(state) {
      return state.user.api_token
    }
  }
}