import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const paths = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

const routes = paths.map(path => {
  return {
    ...path,
    component: () =>
      import(/* webpackChunckName: "[request]" */ `@/views/${path.name}/Index`)
  }
})

const router = new VueRouter({
  routes
})

export default router
