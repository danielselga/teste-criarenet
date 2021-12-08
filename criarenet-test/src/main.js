import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import vuetify from './plugins/vuetify'
import store from './store'

import VueMask from 'v-mask'
Vue.use(VueMask);



Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  VueMask,
  render: h => h(App)
}).$mount('#app')
