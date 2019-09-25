import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import TallifyPrivacyPolicy from './components/TallifyPrivacyPolicy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/tallify-privacy',
      name: 'tallify-privacy-policy',
      component: TallifyPrivacyPolicy
    }
  ]
})
