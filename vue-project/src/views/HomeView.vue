<template>
  <div class="accessories-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Vitajte na eshope s hernými potrebami</h1>
      <p>Najlepšie produkty pre vašich herných hrdinov</p>
      <button @click="navigateToShop">Pozrite si ponuku</button>
    </section>

    <!-- About Section -->
    <section class="about">
      <h2>O nás</h2>
      <p>Špecializujeme sa na kvalitné herné príslušenstvo pre každého hráča.</p>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <h2>Kontaktujte nás</h2>
      <p>Máte nejaké otázky? Neváhajte nás kontaktovať!</p>
      <button @click="navigateToContact">Kontaktovať nás</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* General Page Styling */
.accessories-page {
  position: absolute;
  top: 10%;
  left: 0;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #da6767, #fff); /* Red gradient background */
  padding: 30px;
  text-align: center;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
  box-sizing: border-box;
}

.accessories-page * {
  margin: 0;
  padding: 0;
  text-align: center;
}

/* Hero Section Styling */
.hero {
  color: white;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero p {
  font-size: 1.5em;
  margin-bottom: 30px;
}

.hero button {
  padding: 12px 25px;
  background: linear-gradient(to right, #ff0000, #e60000);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #b30000;
}

/* About and Contact Section Styling */
.about, .contact {
  margin-top: 50px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  color: #333;
}

.about h2, .contact h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: 700;
}

.about p, .contact p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.contact button, .about button {
  padding: 12px 25px;
  background: linear-gradient(to right, #ff0000, #e60000);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.contact button:hover, .about button:hover {
  background: #b30000;
}

/* Additional Styling for Consistency */
section {
  margin-bottom: 30px;
}

</style>
