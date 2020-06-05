import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signin from '../views/Signin.vue'
import Donate from '../views/Donate.vue'
import Public from '../views/Public.vue'
import Donation from '../views/Donation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/public',
    name: 'Public',
    component: Public
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
