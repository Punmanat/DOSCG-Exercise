import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FindXYZ from '../views/FindXYZ.vue'
import FindBC from '../views/FindBC.vue'
import FindDistance from '../views/FindDistance.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/findXYZ',
    name: 'findXYZ',
    component: FindXYZ
  },
  {
    path: '/findBC',
    name: 'findBC',
    component: FindBC
  },
  {
    path: '/findDistance',
    name: 'findDistance',
    component: FindDistance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
