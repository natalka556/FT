<template>
    <div>
      <h2>Your Cart</h2>
      <div v-if="cartItems.length">
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            <span>{{ item.name }} (x{{ item.quantity }}) - €{{ item.price * item.quantity }}</span>
            <button @click="removeItem(item.id)">Remove</button>
          </li>
        </ul>
        <p>Total: €{{ totalPrice }}</p>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';  // Access the cart store
  
  export default {
    setup() {
      const cartStore = useCartStore();  // Access cart store from Pinia
  
      // Load products and consoles on component mount
      cartStore.loadProducts();
      cartStore.loadConsoles();
  
      // Remove item from cart by ID
      const removeItem = (itemId) => {
        cartStore.removeItem(itemId);
      };
  
      return {
        cartItems: cartStore.items,  // Access cart items
        totalPrice: cartStore.totalPrice,  // Access total price of items in the cart
        removeItem,  // Function to remove items from the cart
      };
    }
  };
  </script>
  