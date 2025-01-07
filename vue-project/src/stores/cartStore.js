import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],  // Load cart items from localStorage
    products: [],  // Holds products loaded from products.json
    consoles: [],  // Holds consoles loaded from consoles.json
  }),

  actions: {
    // Load products from products.json (for product pages)
    async loadProducts() {
      try {
        const response = await fetch('/products.json');  // Adjust path to the location of products.json
        const data = await response.json();
        console.log("Fetched products:", data);  // Debugging output

        this.products = data.map(product => ({
          ...product,
          image: `/images/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    // Load consoles from consoles.json (for console-specific pages)
    async loadConsoles() {
      try {
        const response = await fetch('/consoles.json');  // Adjust path to the location of consoles.json
        const data = await response.json();
        console.log("Fetched consoles:", data);  // Debugging output

        this.consoles = data.map(consoleItem => ({
          ...consoleItem,
          image: `/images/${consoleItem.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching consoles:", error);
      }
    },

    async loadGames() {
        try {
          const response = await fetch('/games.json');  // Adjust path to the location of consoles.json
          const data = await response.json();
          game.log("Fetched games:", data);  // Debugging output
  
          this.games = data.map(gameItem => ({
            ...gameItem,
            image: `/images/${gameItem.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
          }));
        } catch (error) {
          game.error("Error fetching games:", error);
        }
      },

    // Add product to the cart
    addItem(productId) {
      const product = this.products.find(item => item.id === productId);  // Find product by ID
      if (!product) {
        console.error("Product not found:", productId);
        return;
      }

      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;  // If the product exists, increment the quantity
      } else {
        this.items.push({ ...product, quantity: 1 });  // Otherwise, add the product with quantity 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items:", this.items);  // Debugging output
    },

    // Add console to the cart
    addConsole(consoleId) {
      const consoleItem = this.consoles.find(item => item.id === consoleId);  // Find console by ID
      if (!consoleItem) {
        console.error("Console not found:", consoleId);
        return;
      }

      const existingItem = this.items.find(item => item.id === consoleItem.id);
      if (existingItem) {
        existingItem.quantity++;  // If the console exists, increment the quantity
      } else {
        this.items.push({ ...consoleItem, quantity: 1 });  // Otherwise, add the console with quantity 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items:", this.items);  // Debugging output
    },

    addGame(gameId) {
        const gameItem = this.games.find(item => item.id === gameId);  // Find console by ID
        if (!gameItem) {
          game.error("Game not found:", gameId);
          return;
        }
  
        const existingItem = this.items.find(item => item.id === gameItem.id);
        if (existingItem) {
          existingItem.quantity++;  // If the console exists, increment the quantity
        } else {
          this.items.push({ ...gameItem, quantity: 1 });  // Otherwise, add the console with quantity 1
        }
  
        this.saveCart();  // Save updated cart to localStorage
        console.log("Updated cart items:", this.items);  // Debugging output
      },

    // Remove item from the cart
    removeItem(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;  // If quantity > 1, decrease the quantity by 1
      } else {
        this.items = this.items.filter(item => item.id !== itemId);  // Remove the item if quantity is 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items after remove:", this.items);  // Debugging output
    },

    // Clear the cart
    clearCart() {
      this.items = [];
      this.saveCart();  // Save empty cart to localStorage
    },

    // Save cart to localStorage
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));  // Save cart items as JSON string
    },
  },

  getters: {
    // Get total items in the cart
    totalItems: (state) => state.items.length,

    // Calculate total price of all items in the cart
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
});
