// Import the `ref` and `computed` functions from Vue for creating reactive state and computed properties
import { ref, computed } from 'vue';
// Import the `defineStore` function from Pinia to define a new store
import { defineStore } from 'pinia';

// Define a new Pinia store named 'counter'
export const useCounterStore = defineStore('counter', () => {
  // Reactive state variable to hold the current count value
  const count = ref(0);

  // Computed property that calculates double the value of `count`
  const doubleCount = computed(() => count.value * 2);

  // Function to increment the `count` value by 1
  function increment() {
    count.value++; // Increment the reactive `count` variable
  }

  // Return the reactive state, computed properties, and methods to make them available for use
  return { count, doubleCount, increment };
});
