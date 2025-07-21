import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/App.vue'
import About from '@/views/About.vue'
import Lycoris from '@/views/Lycoris.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/lycoris',
    name: 'Lycoris',
    component: Lycoris
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router