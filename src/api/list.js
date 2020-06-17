import axios from 'axios'

export default {
  //Examples for CRUD requests
  get() {
    return axios.get('/tasks').then(response => {
      return { success: true, data: response.data }
    }, response => {
      throw { success: false, errors: response.errors }
    })
  }
}