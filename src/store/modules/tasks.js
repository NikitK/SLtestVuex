import * as storage from '@/utils/storage'
import * as api from '@/api/'

// initial state
const state = {
  user: storage.user.get()
}
// getters
const getters = {
  user: state => state.user,
}

// actions
const actions = {
  // Methods allowed from vuex in all application.
  login({ commit }, data) {
    return api.auth.login(data).then(response => {
      storage.token.set(response.user.api_token)
      storage.user.set(response.user)
      commit('setUser', response.user)

      // dispatch('getUser')
    })
  },
  // getUser({ commit }) {
  //   return api.auth.get().then(response => {
  //     commit("setUser", response.user)
  //   })
  // },
  logout({ commit }) {
    commit('setUser', false)
    storage.token.remove()
    storage.user.remove()
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
