import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import PersonalizeQuiz from '../views/PersonalizeQuiz.vue'
import Outfits from '../views/Outfits.vue'
import CustomerOrders from '../views/CustomerOrder.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'
import AboutView from '../views/About.vue'
import Submit from '../views/Submit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/personalizequiz',
      name: 'personalizequiz',
      component: () => import('../views/PersonalizeQuiz.vue')
    },
    {
      path: '/outfits/:skintone/:undertone/:eyecolor/:haircolor',
      name: 'outfits',
      component: () => import('../views/Outfits.vue')
    },
    {
      path:'/customerorder',
      name: 'customerorder',
      component: () => import('../views/CustomerOrder.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/Submit.vue')
    }
  ]
})

export default router

