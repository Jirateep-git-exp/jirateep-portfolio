<template>
  <div>
    <section id="banner" class="mx-auto">
      <Banner />
    </section>
    <section id="hero" class="container mx-auto px-6 py-20">
      <Hero />
    </section>
    <section id="about" class="container mx-auto px-6 py-20">
      <About />
    </section>

    <section id="projects" class="container mx-auto px-6 py-20">
      <Projects />
    </section>

    <section id="skills" class="container mx-auto px-6 py-20">
      <Skills />
    </section>

    <section id="contact" class="container mx-auto px-6 py-20">
      <Contact />
    </section>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
</script>
