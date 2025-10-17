<template>
  <div>
    <Header />
    <main class="bg-red-500 min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>
