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
      </div>
      <div v-else>
        <p>Váš košík je prázdny.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'Cart',
  data() {
    return {
      cartStore: useCartStore(), // Access cart store
    };
  },
  computed: {
    cartItems() {
      return this.cartStore.items; // Access cart items
    },
    totalPrice() {
      return this.cartStore.totalPrice; // Access total price
    },
  },
  methods: {
    removeItem(itemId) {
      this.cartStore.removeItem(itemId); // Remove item from cart
    },
  },
  created() {
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
</style>
