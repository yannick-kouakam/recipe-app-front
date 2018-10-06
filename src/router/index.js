import Vue from 'vue'
import Router from 'vue-router'
import LandingPageApp from '../components/landing-page/LandingPage'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageApp
    }
  ]
})
