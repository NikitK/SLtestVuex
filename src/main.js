import Vue from 'vue'
import App from '@/App'

//Call vuex plugin and modules
import '@/plugins/vuex'
import store from './store'

//Call vue-router plugin and list of routes
import '@/plugins/router'
import router from './router/index'

import '@/plugins/axios'

//Call vuetify plugin with custom settings
import vuetify from '@/plugins/vuetify'




// Disable message about production tip in console
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
