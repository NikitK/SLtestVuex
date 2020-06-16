import axios from 'axios'

export default {
  get() {
    let token = window.localStorage.getItem('token')

    return token
  },
  set(token) {
    window.localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  },
  remove() {
    window.localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
  }
}
