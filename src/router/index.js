import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import HTMLTag from '@/components/test/webApplication/HTMLTag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/htmlTag',
      name: 'web_htmlTag',
      component: HTMLTag
    }
  ]
})
