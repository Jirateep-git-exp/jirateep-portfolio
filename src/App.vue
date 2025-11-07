<template>
  <main class="min-h-screen bg-cream-50 text-slate-700 pt-16">
    <Navbar />
    <RouterView />

    <Footer />

  </main>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './shares/Navbar.vue'
</script>
