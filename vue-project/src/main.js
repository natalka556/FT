// Import the main CSS file for global styles
import './assets/main.css';

// Import the Vue framework for creating the application
import { createApp } from 'vue';

// Import the Pinia state management library
import { createPinia } from 'pinia';

// Import the main App component, which serves as the root component of the application
import App from './App.vue';

// Import the router configuration for handling navigation between pages
import router from './router';

// Create a new Vue application instance using the root App component
const app = createApp(App);

// Register Pinia as a plugin for state management
app.use(createPinia());

// Register the router as a plugin for navigation and routing
app.use(router);

// Mount the Vue application to the DOM element with the ID `app`
// This connects the Vue app to the HTML file and makes it interactive
app.mount('#app');
