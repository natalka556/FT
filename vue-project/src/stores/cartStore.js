// Import the `defineStore` function from Pinia for creating a store
import { defineStore } from "pinia";
// Import the `saveOrder` module for handling saved orders
import saveOrder from "@/stores/saveOrder"; // Ensure the path matches your project's file structure

// Define a new store named "cart"
export const useCartStore = defineStore("cart", {
  // The `state` function defines reactive properties for the store
  state: () => ({
    // Array to hold items in the cart, loaded from localStorage if available
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    // Arrays to hold products, consoles, games, PCs, and actions data
    products: [], // Products loaded from `products.json`
    consoles: [], // Consoles loaded from `consoles.json`
    games: [], // Games loaded from `games.json`
    pcs: [], // PCs loaded from `pc.json`
    actions: [], // Actions loaded from `actions.json`
  }),

  // Actions define methods that can modify the state or perform async operations
  actions: {
    // Fetch and load products from `products.json`
    async loadProducts() {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        // Format product data and add an image path for each product
        this.products = data.map((product) => ({
          ...product,
          image: `/images/${product.name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    // Fetch and load consoles from `consoles.json`
    async loadConsoles() {
      try {
        const response = await fetch("/consoles.json");
        const data = await response.json();
        this.consoles = data.map((console) => ({
          ...console,
          image: `/images/${console.name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        }));
      } catch (error) {
        console.error("Error fetching consoles:", error);
      }
    },

    // Fetch and load games from `games.json`
    async loadGames() {
      try {
        const response = await fetch("/games.json");
        const data = await response.json();
        this.games = data.map((game) => ({
          ...game,
          image: `/images/${game.name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        }));
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    },

    // Fetch and load PCs from `pc.json`
    async loadPcs() {
      try {
        const response = await fetch("/pc.json");
        const data = await response.json();
        this.pcs = data.map((pc) => ({
          ...pc,
          image: `/images/${pc.name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        }));
      } catch (error) {
        console.error("Error fetching PCs:", error);
      }
    },

    // Fetch and load actions from `actions.json`
    async loadActions() {
      try {
        const response = await fetch("/actions.json");
        const data = await response.json();
        this.actions = data.map((action) => ({
          ...action,
          image: `/images/${action.name.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        }));
      } catch (error) {
        console.error("Error fetching actions:", error);
      }
    },

    // Add a product to the cart
    addItem(productId) {
      const product = this.products.find((item) => item.id === productId);
      if (!product) {
        console.error("Product not found:", productId);
        return;
      }

      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      this.saveCart(); // Save the cart to localStorage
    },

    // Similar methods to add consoles, games, PCs, or actions to the cart
    addConsole(consoleId) {
      const console = this.consoles.find((item) => item.id === consoleId);
      if (!console) {
        console.error("Console not found:", consoleId);
        return;
      }

      const existingItem = this.items.find((item) => item.id === console.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...console, quantity: 1 });
      }

      this.saveCart();
    },

    addGame(gameId) {
      const game = this.games.find((item) => item.id === gameId);
      if (!game) {
        console.error("Game not found:", gameId);
        return;
      }

      const existingItem = this.items.find((item) => item.id === game.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...game, quantity: 1 });
      }

      this.saveCart();
    },

    addPc(pcId) {
      const pc = this.pcs.find((item) => item.id === pcId);
      if (!pc) {
        console.error("PC not found:", pcId);
        return;
      }

      const existingItem = this.items.find((item) => item.id === pc.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...pc, quantity: 1 });
      }

      this.saveCart();
    },

    addAction(actionId) {
      const action = this.actions.find((item) => item.id === actionId);
      if (!action) {
        console.error("Action not found:", actionId);
        return;
      }

      const existingItem = this.items.find((item) => item.id === action.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...action, quantity: 1 });
      }

      this.saveCart();
    },

    // Remove an item from the cart or decrement its quantity
    removeItem(itemId) {
      const item = this.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.items = this.items.filter((item) => item.id !== itemId);
      }

      this.saveCart();
    },

    // Clear all items from the cart
    clearCart() {
      this.items = [];
      this.saveCart();
    },

    // Save the cart items to localStorage
    saveCart() {
      localStorage.setItem("cartItems", JSON.stringify(this.items));
    },

    // Save an order using the `saveOrder` module
    addOrder(order) {
      saveOrder.addOrder(order);
    },
  },

  // Getters to compute derived state
  getters: {
    // Calculate the total number of items in the cart
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    // Calculate the total price of all items in the cart
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
});
