import Vue from 'vue'
import VueRouter from 'vue-router'
import { childrenRoute } from './childrenRoute'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: childrenRoute
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
