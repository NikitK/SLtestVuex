import axios from 'axios'

export default {
  //Examples for CRUD requests
  get(params) {
    return axios.get('/tasks', { params: params }).then(response => {
      return { success: true, data: response.data }
    }, response => {
      throw { success: false, errors: response.errors }
    })
  }
}