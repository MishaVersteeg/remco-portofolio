import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/live-events',
    name: 'events',
    component: () => import('../views/LiveEvents.vue')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('../views/Films.vue')
  },  {
    path: '/graffiti',
    name: 'graffiti',
    component: () => import('../views/Graffiti.vue')
  },
  {
    path: '/ideeen',
    name: 'ideeen',
    component: () => import('../views/Ideeen.vue')
  },
  {
    path: '/muziek',
    name: 'muziek',
    component: () => import('../views/Muziek.vue')
  },
  {
    path: '/grafisch',
    name: 'grafisch',
    component: () => import('../views/Grafisch.vue')
  },
  {
    path: '/over',
    name: 'over',
    component: () => import('../views/Over.vue')
  },
  {
    path: '/fotos',
    name: 'fotos',
    component: () => import('../views/Fotos.vue')
  },
  {
    path: '/tekeningen',
    name: 'tekeningen',
    component: () => import('../views/Tekeningen.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
