import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import store from '@/store'

import token from '@/utils/storage/token'

// You must edit file .env.example at the root catalog and set VUE_APP_BASE_URL for your app.
// Also you must duplicate your base url below in else statement.
let url = process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : 'https://api.grtsk-cmp.studio-luck.ru';

axios.defaults.baseURL = url + '/api/common/'

// Variable $baseURL allowed globally in your app
Vue.prototype.$baseURL = url

axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    token.remove()
    store.commit('updateStore');  
    router.push({ name: "login" })
    
  }
  return Promise.reject(error.response.data)
})

let auth = token.get()
if (auth) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
  store.dispatch('getTasks')
  console.log(token.get())
}else{
  console.log(token.get())
}
