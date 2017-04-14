import Vue from 'vue'
import Router from 'vue-router'
import Fractals from '@/components/Fractals'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Fractals
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
