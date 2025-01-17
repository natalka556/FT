// Create an object named `saveOrder` to handle saving and retrieving orders
const saveOrder = {
  // Method to retrieve saved orders from the browser's localStorage
  loadOrders() {
    // Get the "orders" item from localStorage (stored as a JSON string)
    const orders = localStorage.getItem("orders");
    // Log the loaded orders for debugging purposes
    console.log("[saveOrder] Loaded orders from localStorage:", orders);
    // If orders exist, parse the JSON string into an array; otherwise, return an empty array
    return orders ? JSON.parse(orders) : [];
  },

  // Method to save an array of orders to localStorage
  saveOrders(orders) {
    // Log the orders being saved for debugging purposes
    console.log("[saveOrder] Saving orders to localStorage:", orders);
    // Convert the orders array to a JSON string and store it in localStorage under the key "orders"
    localStorage.setItem("orders", JSON.stringify(orders));
  },

  // Method to add a new order to the saved orders
  addOrder(order) {
    // Retrieve the current list of orders from localStorage
    const orders = this.loadOrders();
    // Log the current orders before adding the new order
    console.log("[saveOrder] Current orders before adding:", orders);

    // Add the new order to the orders array
    orders.push(order);
    // Save the updated orders array back to localStorage
    this.saveOrders(orders);

    // Log the added order and the updated list of orders for debugging purposes
    console.log("[saveOrder] New order added:", order);
    console.log("[saveOrder] Updated orders in localStorage:", orders);
  },

  // Method to retrieve all saved orders
  getOrders() {
    // Simply return the result of the `loadOrders` method
    return this.loadOrders();
  },
};

// Export the `saveOrder` object so it can be used in other parts of the application
export default saveOrder;
