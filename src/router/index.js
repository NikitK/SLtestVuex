import Router from 'vue-router'
import * as pages from '@/pages'
import * as layouts from '@/layouts'
import token from '@/utils/storage/token'

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

const router = new Router({ routes, mode: 'history', base: '/'})

// Use code below when you done with authorization part of your application.

// This code will check presence of auth token at localstorage
// and redirect user to login page if he dont have a token.

// const whiteList = ['Login','Main'] 

router.beforeEach((to, from, next) => {
  let auth = token.get()

  if (to.name !== 'Login' && !auth) next({ name: 'Login' })
  else next()

  if (to.name == 'Login' && auth) next({ name: 'Main' })
  else next()
})

export default router