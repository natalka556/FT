<template>
    <div>
      <h1>Hry</h1>
      <p>Vyberte si svoju obľúbenú hru.</p>
  
      <div class="products-grid">
        <div class="product" v-for="game in games" :key="game.id">
          <img :src="game.image" :alt="game.name" />
          <h3>{{ game.name }}</h3>
          <p>{{ game.description }}</p>
          <p class="price">{{ game.price }} €</p>
          <button @click="addToCart(game.id)">Pridať do košíka</button>
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
      cartStore.loadGames();
  
      // Add console to cart
      const addToCart = (gameId) => {
        cartStore.addGames(gameId);
      };
  
      return {
        games: cartStore.games,  // Access consoles from the store
        addToCart,  // Function to add consoles to the cart
      };
    },
  };
  </script>
  