import Vue from 'vue'
import Router from 'vue-router'
import LandingPageApp from '../components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageApp
    }
  ]
})
