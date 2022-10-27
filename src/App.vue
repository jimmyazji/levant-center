<template>
  <Navigation />
  <!-- Page content here -->
  <main class="bg-accent pt-20">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Footer from "./components/MainFooter.vue";
import Navigation from "./components/MainNavigation.vue";
onMounted(() => {
  AOS.init({ once: false, mirror: true, duration: 800 });
});
</script>
