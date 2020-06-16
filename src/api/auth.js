import axios from 'axios'

export default {
  //Examples for login and get profile requests
  login(data) {
    return axios.post('/login', data).then(response => {
      return { success: true, user: response.data }
    }, response => {
      throw { success: false, errors: response.errors }
    })
  },
  get() {
    return axios.get('/tasks').then(response => {
      return { success: true, user: response.data }
    }, response => {
      throw { success: false, errors: response.errors }
    })
  }
}
