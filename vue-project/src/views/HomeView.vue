<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Vitajte na eshope s hernými potrebami</h1>
      <p>Najlepšie produkty pre vašich herných hrdinov</p>
      <button @click="navigateToShop">Pozrite si ponuku</button>
    </section>

    <!-- Featured Products Section -->
    

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
.home-page {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  padding: 0 20px;
  margin: 0;
}

.hero {
  background: linear-gradient(135deg, #ff7f50, #ff6347);
  color: white;
  text-align: center;
  padding: 100px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 3.5em;
  margin-bottom: 20px;
  font-weight: 600;
}

.hero p {
  font-size: 1.5em;
  margin-bottom: 30px;
}

.hero button {
  padding: 12px 25px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #555;
}

.featured-products {
  margin-top: 60px;
  text-align: center;
}

.featured-products h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
  font-weight: 600;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.product {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product h3 {
  font-size: 1.5em;
  margin-top: 15px;
  color: #333;
}

.product p {
  font-size: 1.1em;
  margin: 10px 0;
  color: #555;
}

.product .price {
  font-size: 1.3em;
  color: #ff6347;
  font-weight: 600;
  margin: 10px 0;
}

.product button {
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.product button:hover {
  background-color: #ff7f50;
}

.about, .contact {
  margin-top: 80px;
  text-align: center;
}

.about h2, .contact h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}

.about p, .contact p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
}

.about button, .contact button {
  padding: 12px 25px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.about button:hover, .contact button:hover {
  background-color: #555;
}
</style>
