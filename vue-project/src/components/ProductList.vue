<!-- src/components/ProductList.vue -->
<template>
    <div>
      <h2>Products</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.name }} - ${{ product.price }}</span>
          <button @click="addProductToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore'
  
  export default {
    setup() {
      const cartStore = useCartStore()
  
      const products = [
        { id: 1, name: 'Gaming Mouse', price: 25 },
        { id: 2, name: 'Gaming Keyboard', price: 50 },
        { id: 3, name: 'Headset', price: 75 }
      ]
  
      const addProductToCart = (product) => {
        cartStore.addItem(product)
      }
  
      return {
        products,
        addProductToCart
      }
    }
  }
  </script>
  