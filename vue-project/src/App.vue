<script setup>
</script>

<template>
  <!-- Navigation Bar at the Top -->
  <header>
    <nav>
      <RouterLink to="/home">Home</RouterLink>     
      <RouterLink to="/actions">Akcie</RouterLink>      
      <RouterLink to="/pc">PC</RouterLink>
      <RouterLink to="/consoles">Herné konzoly</RouterLink>
      <RouterLink to="/games">Hry</RouterLink>
      <RouterLink to="/accessories">Príslušenstvo</RouterLink>
      <RouterLink to="/cart">Košík</RouterLink>
    </nav>
  </header>


  <RouterView />


  
</template>

<style scoped>

/* Header style with navigation */
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dd5858;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-radius: 25px;
  padding: 0;
  margin: 0;
}

.logo {
  display: block;
}

nav {
  display: flex;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #555;
}

.wrapper {
  text-align: center;
  margin-top: 100px; /* Add margin to avoid header overlap */
}

@media (min-width: 1024px) {
  header {
    padding: 15px 30px;
  }

  nav a {
    font-size: 1.5rem;
  }
}
</style>
