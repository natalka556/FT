<template>
    <div class="order-page">
      <h1>Prehľad objednávky</h1>
  
      <form @submit.prevent="placeOrder">
        <div class="form-group">
          <label for="name">Celé meno:</label>
          <input type="text" id="name" v-model="fullName" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
  
        <div class="order-summary">
          <h2>Zhrnutie objednávky</h2>
          <ul>
            <li v-for="item in cartItems" :key="item.id">
              {{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} USD
            </li>
          </ul>
          <p class="total">Celkom: {{ totalPrice.toFixed(2) }} USD</p>
        </div>
  
        <button type="submit">Kúpiť s povinnosťou platby</button>
      </form>
    </div>
  </template>
  
  <script>
  // Import the `useCartStore` store for managing cart data
  import { useCartStore } from "@/stores/cartStore"; // Adjust the path if necessary based on your project structure

  export default {
    // Component's data properties
    data() {
      return {
        // User's full name for the order
        fullName: "",
        // User's email for the order
        email: "",
      };
    },

    // Computed properties for reactive access to store data
    computed: {
      // Access the items in the cart
      cartItems() {
        // Get the cart store instance
        const cartStore = useCartStore();
        // Return the `items` array from the cart store
        return cartStore.items;
      },
      // Access the total price of items in the cart
      totalPrice() {
        // Get the cart store instance
        const cartStore = useCartStore();
        // Return the computed `totalPrice` from the cart store
        return cartStore.totalPrice;
      },
    },

    // Methods for handling user actions
    methods: {
      // Method to place an order
      placeOrder() {
        // Validate that both full name and email fields are filled
        if (!this.fullName || !this.email) {
          alert("Vyplňte všetky polia."); // Display an alert if fields are empty
          return;
        }

        // Create an order object with order details
        const order = {
          // Generate a unique order number using the current timestamp
          orderNumber: Date.now(),
          // Include the user's full name
          name: this.fullName,
          // Include the user's email
          email: this.email,
          // Map cart items to include name, quantity, and price
          items: this.cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          // Include the total price of the order
          total: this.totalPrice,
        };

        // Log the order details for debugging
        console.log("[Order.vue] Placing order:", order);

        // Get the cart store instance
        const cartStore = useCartStore();

        // Check if the `addOrder` method exists in the cart store
        if (!cartStore.addOrder) {
          console.error("[Order.vue] addOrder is not defined in cartStore.");
          return;
        }

        // Add the order to the store using the `addOrder` method
        cartStore.addOrder(order);
        // Clear the cart after placing the order
        cartStore.clearCart();

        // Log a success message for debugging
        console.log("[Order.vue] Order placed successfully:", order);

        // Display a success message to the user
        alert("Objednávka úspešne prijatá.");

        // Reset the input fields for full name and email
        this.fullName = "";
        this.email = "";

        // Redirect the user to the home page (or another page)
        this.$router.push("/home");
      },
    },
  };
</script>

  
  <style scoped>
  /* General Styling */
  .order-page {
    position: absolute;
    top: 10%;
    left: 0;
    font-family: 'Poppins', sans-serif;
    color: #333;
    background: linear-gradient(to bottom, #da6767, #fff);
    padding: 30px;
    text-align: center;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    border-radius: 8px;
  }
  
  .order-page h1 {
    color: #fff;
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 1.2em;
    color: #fff;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background: linear-gradient(to right, #ff0000, #e60000);
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 12px 20px;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  button:hover {
    background: linear-gradient(to right, #e60000, #b30000);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  button:active {
    transform: scale(0.98);
  }
  
  .order-summary {
    margin-top: 20px;
    text-align: left;
    color: #333;
  }
  
  .order-summary ul {
    list-style-type: none;
    padding: 0;
  }
  
  .order-summary li {
    margin-bottom: 10px;
    font-size: 1.1em;
  }
  
  .order-summary .total {
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 10px;
    color: #b30000;
  }
  </style>
  