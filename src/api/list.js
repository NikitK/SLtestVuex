import axios from 'axios'

export default {
  //Examples for CRUD requests
  list(data) {
    return axios.get('/tasks', data).then(response => {
      return { success: true, data: response.data }
    }, response => {
      throw { success: false, errors: response.errors }
    })
  }
}