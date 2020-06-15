import Router from 'vue-router'
import * as pages from '@/pages'
import * as layouts from '@/layouts'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: layouts.login,
        children: [{
          path: '/login',
          name: 'Login',
          component: pages.Login,
        }]
      }
    ,{
    path: '/',
    name: 'DefaultLayout',
    component: layouts.default,
    children: [
      {
        path: '/',
        name: 'Main',
        component: pages.Main,
      }
    ]
  } 

]

const router = new Router({ routes, mode: 'history', base: '/' })
export default router