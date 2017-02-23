import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import {routes as demoRoutes} from './demos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Index
    }, ... demoRoutes

  ]
})
