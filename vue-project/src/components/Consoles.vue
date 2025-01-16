<template>
  <div class="accessories-page">
    <h1>Herne konzoly</h1>
    <p>Vyberte si svoju obľúbenú hernu konzolu.</p>

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
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'Consoles',
  data() {
    return {};
  },
  computed: {
    consoles() {
      const cartStore = useCartStore();
      return cartStore.consoles;  // Access the products loaded from the JSON file
    },
  },
  methods: {
    async addToCart(consoleId) {
      const cartStore = useCartStore();
      cartStore.addConsole(consoleId);  // Add the product to the cart using its ID
    },
  },
  created() {
    const cartStore = useCartStore();
    cartStore.loadConsoles();  // Load product data when the component is created
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
  background: linear-gradient(to bottom, #da6767, #fff);
  padding: 30px;
  text-align: center;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
  box-sizing: border-box;
}

.accessories-page * {
  margin: 0;
  padding: 0;
  text-align: center;
}

.accessories-page h1 {
  color: #fff;
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.accessories-page p {
  font-size: 1.2em;
  margin-bottom: 25px;
  line-height: 1.6;
  color: #555;
}

/* Product Grid Styling */
.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center; /* Center items horizontally */
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 50px; /* Adjust the space from the top */
}

.product {
  background: #fff;
  border: 1px solid #ffcccc;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  width: calc(33.333% - 25px); /* Adjusts for three items per row */
  max-width: 300px;
}

@media (max-width: 768px) {
  .product {
    width: calc(50% - 25px); /* Two items per row on medium screens */
  }
}

@media (max-width: 480px) {
  .product {
    width: 100%; /* One item per row on small screens */
  }
}

.product:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.product:hover img {
  transform: scale(1.05);
}

.product h3 {
  font-size: 1.4em;
  color: #e60000;
  margin-bottom: 10px;
}

.product p {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}

.product .price {
  font-weight: 700;
  font-size: 1.2em;
  color: #b30000;
  margin-bottom: 15px;
}

/* Button Styling */
.product button {
  background: linear-gradient(to right, #ff0000, #e60000);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 12px 20px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product button:hover {
  background: linear-gradient(to right, #e60000, #b30000);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product button:active {
  transform: scale(0.98);
}
</style>
