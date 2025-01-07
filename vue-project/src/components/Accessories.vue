<template>
    <div class="accessories-page">
      <h1>Príslušenstvo</h1>
      <p>Široká ponuka herného príslušenstva pre každého hráča!</p>
  
      <!-- Example of a featured product grid for accessories -->
      <div class="products-grid">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">{{ product.price }} €</p>
          <button @click="addToCart(product.id)">Pridať do košíka</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';
  
  export default {
    name: 'Accessories',
    data() {
      return {};
    },
    computed: {
      products() {
        const cartStore = useCartStore();
        return cartStore.products;  // Access the products loaded from the JSON file
      },
    },
    methods: {
      async addToCart(productId) {
        const cartStore = useCartStore();
        cartStore.addItem(productId);  // Add the product to the cart using its ID
      },
    },
    created() {
      const cartStore = useCartStore();
      cartStore.loadProducts();  // Load product data when the component is created
    },
  };
  </script>
  