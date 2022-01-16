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
    name: 'LiveEvents',
    component: () => import('../views/LiveEvents.vue')
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue')
  },  {
    path: '/graffiti',
    name: 'Graffiti',
    component: () => import('../views/Graffiti.vue')
  },
  {
    path: '/ideeen',
    name: 'Ideeen',
    component: () => import('../views/Ideeen.vue')
  },
  {
    path: '/muziek',
    name: 'Muziek',
    component: () => import('../views/Muziek.vue')
  },
  {
    path: '/grafisch',
    name: 'Grafisch',
    component: () => import('../views/Grafisch.vue')
  },
  {
    path: '/over',
    name: 'Over',
    component: () => import('../views/Over.vue')
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: () => import('../views/Fotos.vue')
  },
  {
    path: '/tekeningen',
    name: 'Tekeningen',
    component: () => import('../views/Tekeningen.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
