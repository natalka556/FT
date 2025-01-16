import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Accessories from '../components/Accessories.vue'
import Cart from '../components/Cart.vue'
import Consoles from '../components/Consoles.vue'
import Games from '../components/Games.vue'
import Pc from '../components/Pc.vue'
import Actions from '../components/Actions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/accessories', 
      name: 'accessories',
      component: Accessories, 
    },
    {
      path: '/cart', 
      name: 'cart',
      component: Cart, 
    },
    {
      path: '/consoles', 
      name: 'consoles',
      component: Consoles, 
    },
    {
      path: '/games', 
      name: 'games',
      component: Games, 
    },
    {
      path: '/pc', 
      name: 'pc',
      component: Pc, 
    },
    {
      path: '/actions', 
      name: 'actions',
      component: Actions, 
    },
  ],
})

export default router
