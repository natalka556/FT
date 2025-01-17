// Import necessary functions and modules from Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import the components that will be used as views for specific routes
import HomeView from '../views/HomeView.vue'; // Main home page
import Accessories from '../components/Accessories.vue'; // Accessories page
import Cart from '../components/Cart.vue'; // Shopping cart page
import Consoles from '../components/Consoles.vue'; // Gaming consoles page
import Games from '../components/Games.vue'; // Games page
import Pc from '../components/Pc.vue'; // PC page
import Actions from '../components/Actions.vue'; // Actions or promotions page
import Order from '../components/Order.vue'; // Order details page
import OrderManager from '../components/OrderManager.vue'; // Order management page for admins or users

// Create a new router instance
const router = createRouter({
  // Use the HTML5 history mode to handle navigation without reloading the page
  history: createWebHistory(import.meta.env.BASE_URL), // BASE_URL is set in the environment variables

  // Define the routes for the application
  routes: [
    // Route for the home page
    {
      path: '/home', // URL path
      name: 'home', // Name of the route (optional, useful for programmatic navigation)
      component: HomeView, // Component to render when this route is accessed
    },
    // Route for the about page (lazy-loaded)
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), // Lazy-loaded to improve initial load time
    },
    // Route for the accessories page
    {
      path: '/accessories',
      name: 'accessories',
      component: Accessories,
    },
    // Route for the cart page
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    // Route for the gaming consoles page
    {
      path: '/consoles',
      name: 'consoles',
      component: Consoles,
    },
    // Route for the games page
    {
      path: '/games',
      name: 'games',
      component: Games,
    },
    // Route for the PC page
    {
      path: '/pc',
      name: 'pc',
      component: Pc,
    },
    // Route for the actions or promotions page
    {
      path: '/actions',
      name: 'actions',
      component: Actions,
    },
    // Route for the order details page
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    // Route for the order management page
    {
      path: '/orderManager',
      name: 'orderManager',
      component: OrderManager,
    },
    // Redirect the root URL ("/") to the home page ("/home")
    {
      path: '/',
      redirect: '/home', // Redirect ensures users are taken to "/home" when they visit the root
    },
  ],
});

// Export the router instance so it can be used in the main application
export default router;
