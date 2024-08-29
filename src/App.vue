<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
import SectionProduct from './page/SectionProduct.vue';
import Home2 from './page/Home2.vue';
import Cart from './page/Cart.vue';
import Footer from './components/Footer.vue';
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
/* or in your `app.css` file */
</script>

<template>
  <Navbar />
  <Home />
  <Home2 />
  <SectionProduct />
  <Cart />
  <Footer />
</template>

<style scoped></style>
