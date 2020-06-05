import Vue from 'vue'
import VueRouter from 'vue-router'
import {db} from '../db'
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
    component: Public,
    meta: {requiresAuth: true}
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  const currentUser = db.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser){
    alert("請先登入會員")
    next('/login')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
});

export default router
