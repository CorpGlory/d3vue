import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'components/index'
import {routes as demoRoutes} from './demos'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Index
    }, ... demoRoutes

  ]
})
