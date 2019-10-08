import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import HelloWorld from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
