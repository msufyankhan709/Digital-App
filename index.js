import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Technology from '../components/Technology.vue'
import Work from '../components/Work.vue'
import Methodology from '../components/Methodology.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
    {
    path: '/technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
   {
    path: '/methodology',
    name: 'Methodology',
    component: Methodology
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
