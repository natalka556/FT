<template> 
  <div class="accessories-page">
    <h1>Váš Košík</h1>
    <div class="cart-container">
      <div v-if="cartItems.length">
        <ul class="cart-items">
          <li v-for="item in cartItems" :key="item.id" class="cart-item">
            <span class="item-details">
              {{ item.name }} (x{{ item.quantity }}) - €{{ item.price * item.quantity }}
            </span>
            <button @click="removeItem(item.id)" class="remove-button">Odstrániť</button>
          </li>
        </ul>
        <p class="cart-total">Celková cena: €{{ totalPrice }}</p>
        <button @click="confirmOrder" class="confirm-button">Potvrdiť objednávku</button>
        
      </div>
      <div v-else>
        <p>Váš košík je prázdny.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'; // Import the cart store for managing cart-related data and actions
import { useRouter } from 'vue-router'; // Import Vue Router for navigation

export default {
  // Define the component name for debugging and Vue DevTools
  name: 'Cart',

  // Reactive data properties
  data() {
    return {
      // Create an instance of the cart store for accessing its state and actions
      cartStore: useCartStore(),
      // Create an instance of Vue Router for navigation
      router: useRouter(),
    };
  },

  // Computed properties for reactive data derived from the store
  computed: {
    // Get the list of items in the cart
    cartItems() {
      return this.cartStore.items;
    },
    // Get the total price of all items in the cart
    totalPrice() {
      return this.cartStore.totalPrice;
    },
  },

  // Methods for handling user interactions
  methods: {
    // Remove an item from the cart by its ID
    removeItem(itemId) {
      this.cartStore.removeItem(itemId); // Call the `removeItem` method from the store
    },
    // Navigate to the order confirmation page
    confirmOrder() {
      this.router.push('/order'); // Use Vue Router to navigate to the `/order` route
    },
  },

  // Lifecycle hook that runs when the component is created
  created() {
    // Load products and consoles when the component is initialized
    this.cartStore.loadProducts();
    this.cartStore.loadConsoles();
  },
};
</script>


<style scoped>
/* General Page Styling */
.accessories-page {
  position: absolute;
  top: 10%;
  left: 0;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #da6767, #fff); /* Matching red gradient */
  padding: 30px;
  text-align: center;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
  box-sizing: border-box;
}

.accessories-page h1 {
  color: #fff;
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-container {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 800px;
  text-align: left;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ffcccc;
}

.item-details {
  font-size: 1.2em;
  color: #333;
}

.remove-button {
  background: linear-gradient(to right, #ff0000, #e60000);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 15px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.remove-button:hover {
  background: linear-gradient(to right, #e60000, #b30000);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.cart-total {
  font-size: 1.5em;
  font-weight: 700;
  color: #b30000;
  margin-top: 20px;
  text-align: right;
}

.confirm-button {
  background: linear-gradient(to right, #c40404, #ff0000);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  margin-left: auto;
  display: block;
  text-align: right;
  align-items: right;
}

.confirm-button:hover {
  background: linear-gradient(to right, #df6b6bad, #f83535);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.confirm-button:active {
  background: #bb5151;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}
</style>

