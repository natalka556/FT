<template>
    <div>
      <h1>Herné Konzoly</h1>
      <p>Vyberte si svoju obľúbenú hernú konzolu.</p>
  
      <div class="products-grid">
        <div class="product" v-for="console in consoles" :key="console.id">
          <img :src="console.image" :alt="console.name" />
          <h3>{{ console.name }}</h3>
          <p>{{ console.description }}</p>
          <p class="price">{{ console.price }} €</p>
          <button @click="addToCart(console.id)">Pridať do košíka</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';  // Access the cart store
  
  export default {
    name: 'Consoles',
    setup() {
      const cartStore = useCartStore();  // Access cart store from Pinia
  
      // Load consoles when the component is mounted
      cartStore.loadConsoles();
  
      // Add console to cart
      const addToCart = (consoleId) => {
        cartStore.addConsole(consoleId);
      };
  
      return {
        consoles: cartStore.consoles,  // Access consoles from the store
        addToCart,  // Function to add consoles to the cart
      };
    },
  };
  </script>
  