<template>
    <div class="order-manager">
      <h1>Všetky objednávky</h1>
      <div v-if="orders.length > 0">
        <table>
          <thead>
            <tr>
              <th>Číslo objednávky</th>
              <th>Meno zákazníka</th>
              <th>Email</th>
              <th>Produkty</th>
              <th>Celkom</th>
              <th>Dátum objednávky</th>
              <th>Akcie</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.orderNumber">
              <td>{{ order.orderNumber }}</td>
              <td>{{ order.name }}</td>
              <td>{{ order.email }}</td>
              <td>
                <ul>
                  <li v-for="item in order.items" :key="item.name">
                    {{ item.name }} - {{ item.quantity }} x {{ item.price.toFixed(2) }} EUR
                  </li>
                </ul>
              </td>
              <td>{{ order.total.toFixed(2) }} EUR</td>
              <td>{{ formatDate(order.orderNumber) }}</td>
              <td>
                <button @click="editOrder(order)">Upraviť</button>
                <button @click="removeOrder(order.orderNumber)">Vymazať</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Žiadne objednávky.</p>
      </div>
  
      <!-- Edit Order Modal -->
      <div v-if="isEditing" class="modal">
        <div class="modal-content">
          <h2>Upraviť Objednávku</h2>
          <form @submit.prevent="saveEdit">
            <label>
              Meno Zákazníka:
              <input type="text" v-model="currentOrder.name" />
            </label>
            <label>
              Email:
              <input type="email" v-model="currentOrder.email" />
            </label>
            <label>
              Produkty:
              <ul>
                <li v-for="(item, index) in currentOrder.items" :key="index">
                  <input
                    type="text"
                    v-model="item.name"
                    placeholder="Item Name"
                  />
                  <input
                    type="number"
                    v-model.number="item.quantity"
                    placeholder="Quantity"
                  />
                  <input
                    type="number"
                    v-model.number="item.price"
                    placeholder="Price"
                    step="0.01"
                  />
                </li>
              </ul>
            </label>
            <label>
              Celkom:
              <input type="number" v-model.number="currentOrder.total" step="0.01" />
            </label>
            <button type="submit">Uložiť</button>
            <button type="button" @click="cancelEdit">Zrušiť</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  // Import the `saveOrder` module for managing saved orders
  import saveOrder from "@/stores/saveOrder"; // Adjust the import path as necessary

  export default {
    // Define the component's data properties
    data() {
      return {
        // Array to store the list of orders
        orders: [],
        // Boolean flag to indicate if an order is being edited
        isEditing: false,
        // Object to store the currently selected order for editing
        currentOrder: null,
      };
    },
    methods: {
      // Method to load orders from the `saveOrder` store
      loadOrders() {
        // Retrieve orders from `saveOrder` and assign them to `orders`
        this.orders = saveOrder.getOrders();
      },
      // Method to format a timestamp into a readable date and time
      formatDate(timestamp) {
        // Create a Date object from the timestamp
        const date = new Date(timestamp);
        // Return the date and time in a human-readable format
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      // Method to remove an order by its order number
      removeOrder(orderNumber) {
        // Filter out the order with the specified order number from the `orders` array
        this.orders = this.orders.filter(order => order.orderNumber !== orderNumber);
        // Save the updated orders array to `saveOrder`
        saveOrder.setOrders(this.orders);
      },
      // Method to start editing an order
      editOrder(order) {
        // Create a deep copy of the selected order and assign it to `currentOrder`
        this.currentOrder = JSON.parse(JSON.stringify(order));
        // Set the editing flag to true
        this.isEditing = true;
      },
      // Method to save changes to the currently edited order
      saveEdit() {
        // Find the index of the current order in the `orders` array
        const index = this.orders.findIndex(
          order => order.orderNumber === this.currentOrder.orderNumber
        );
        // If the order exists, update it in the `orders` array
        if (index !== -1) {
          this.orders.splice(index, 1, this.currentOrder);
          // Save the updated orders array to `saveOrder`
          saveOrder.setOrders(this.orders);
        }
        // Reset the editing flag and clear the current order
        this.isEditing = false;
        this.currentOrder = null;
      },
      // Method to cancel editing an order
      cancelEdit() {
        // Reset the editing flag and clear the current order
        this.isEditing = false;
        this.currentOrder = null;
      },
    },
    // Lifecycle hook that is called when the component is created
    created() {
      // Load the saved orders when the component is initialized
      this.loadOrders();
    },
  };
</script>

  

  
<style scoped>
/* General styling */
.order-manager {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    overflow-y: auto;
}

/* Table styling */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-family: 'Arial', sans-serif;
    overflow-x: auto;
}

thead {
    background-color: #d32f2f;
    color: #000000;
}

th,
td {
    background-color: #f5caca;
    padding: 15px;
    border: 1px solid #e0e0e0;
    text-align: left;
    word-wrap: break-word;
}

th {
    font-weight: bold;
    text-transform: uppercase;
}

tr:nth-child(even) {
    background-color: #ffeeee;
}

tr:nth-child(odd) {
    background-color: #ffffff;
}

/* Button styling */
button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
    opacity: 0.9;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

button:nth-child(1) {
    background-color: #d32f2f;
    color: #ffffff;
}

button:nth-child(1):hover {
    background-color: #b71c1c;
}

button:nth-child(2) {
    background-color: #ffffff;
    color: #d32f2f;
    border: 1px solid #d32f2f;
}

button:nth-child(2):hover {
    background-color: #ffe6e6;
}

/* Modal styling */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(211, 47, 47, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: #ffffff;
    padding: 30px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid #d32f2f;
    box-sizing: border-box;
}

/* Form styling */
form label {
    display: block;
    margin: 10px 0;
    font-weight: bold;
    color: #d32f2f;
}

form input {
    width: calc(100% - 20px);
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #d32f2f;
    border-radius: 6px;
    background-color: #ffeeee;
    color: #d32f2f;
    font-size: 14px;
    box-sizing: border-box;
}

form input:focus {
    outline: none;
    box-shadow: 0 0 5px #d32f2f;
}

/* Utility classes */
.no-orders {
    text-align: center;
    color: #d32f2f;
    font-weight: bold;
    padding: 20px 0;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .order-manager {
        padding: 15px;
    }

    table {
        font-size: 14px;
    }

    th,
    td {
        padding: 10px;
    }

    button {
        font-size: 12px;
        padding: 8px 15px;
    }

    .modal-content {
        padding: 20px;
        width: 95%;
    }
}

@media screen and (max-width: 480px) {
    th,
    td {
        font-size: 12px;
        padding: 8px;
    }

    button {
        font-size: 10px;
        padding: 6px 10px;
    }
}

</style>

  
