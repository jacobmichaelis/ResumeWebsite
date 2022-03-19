import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify: new Vuetify({})
}).$mount('#app')
