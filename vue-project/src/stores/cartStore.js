import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],  // Load cart items from localStorage
    products: [],  // Holds products loaded from products.json
    consoles: [],  // Holds consoles loaded from consoles.json
    games: [],  // Holds games loaded from games.json
    pcs: [],  // Holds pcs loaded from pc.json
    actions: [],
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
        const response = await fetch('/consoles.json');  // Adjust path to the location of products.json
        const data = await response.json();
        console.log("Fetched products:", data);  // Debugging output

        this.consoles = data.map(console => ({
          ...console,
          image: `/images/${console.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async loadGames() {
      try {
        const response = await fetch('/games.json');  // Adjust path to the location of products.json
        const data = await response.json();
        console.log("Fetched products:", data);  // Debugging output

        this.games = data.map(game => ({
          ...game,
          image: `/images/${game.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async loadPcs() {
      try {
        const response = await fetch('/pc.json');  // Adjust path to the location of products.json
        const data = await response.json();
        console.log("Fetched products:", data);  // Debugging output

        this.pcs = data.map(pc => ({
          ...pc,
          image: `/images/${pc.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async loadActions() {
      try {
        const response = await fetch('/actions.json');  // Adjust path to the location of products.json
        const data = await response.json();
        console.log("Fetched products:", data);  // Debugging output

        this.actions = data.map(action => ({
          ...action,
          image: `/images/${action.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,  // Adjust image path
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
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
      const console = this.consoles.find(item => item.id === consoleId);  // Find product by ID
      if (!console) {
        console.error("Product not found:", consoleId);
        return;
      }

      const existingItem = this.items.find(item => item.id === console.id);
      if (existingItem) {
        existingItem.quantity++;  // If the product exists, increment the quantity
      } else {
        this.items.push({ ...console, quantity: 1 });  // Otherwise, add the product with quantity 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items:", this.items);  // Debugging output
    },

    addGame(gameId) {
      const game = this.games.find(item => item.id === gameId);  // Find product by ID
      if (!game) {
        console.error("Product not found:", gameId);
        return;
      }

      const existingItem = this.items.find(item => item.id === game.id);
      if (existingItem) {
        existingItem.quantity++;  // If the product exists, increment the quantity
      } else {
        this.items.push({ ...game, quantity: 1 });  // Otherwise, add the product with quantity 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items:", this.items);  // Debugging output
    },

    addPc(pcId) {
      const pc = this.pcs.find(item => item.id === pcId);  // Find product by ID
      if (!pc) {
        pc.error("Product not found:", pcId);
        return;
      }

      const existingItem = this.items.find(item => item.id === pc.id);
      if (existingItem) {
        existingItem.quantity++;  // If the product exists, increment the quantity
      } else {
        this.items.push({ ...pc, quantity: 1 });  // Otherwise, add the product with quantity 1
      }

      this.saveCart();  // Save updated cart to localStorage
      console.log("Updated cart items:", this.items);  // Debugging output
    },

    addAction(actionId) {
      const action = this.actions.find(item => item.id === actionId);  // Find product by ID
      if (!action) {
        action.error("Product not found:", pcId);
        return;
      }

      const existingItem = this.items.find(item => item.id === action.id);
      if (existingItem) {
        existingItem.quantity++;  // If the product exists, increment the quantity
      } else {
        this.items.push({ ...action, quantity: 1 });  // Otherwise, add the product with quantity 1
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
