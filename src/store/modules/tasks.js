
export default {
  actions: {

    updateStore({
      commit
    }) {
      commit('updateStore')
    }
  },
  mutations: {

    updateStore(state) {
       state.user = JSON.parse(localStorage.getItem('user') || '[]')
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