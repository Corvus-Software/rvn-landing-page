<template>
  <div>
    <Header v-if="showNavigation" />
    <main class="bg-red-500 min-h-screen">
      <NuxtPage />
    </main>
    <Footer v-if="showNavigation" />
  </div>
</template>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Check if user is authenticated via cookie
const cookie = useCookie('rvn_auth', {
  default: () => null,
  secure: true,
  sameSite: 'strict'
});

const isAuthenticated = computed(() => cookie.value === 'authenticated');
const isLoginPage = computed(() => route.path === '/login');

// Show navigation only if authenticated and not on login page
const showNavigation = computed(() => isAuthenticated.value && !isLoginPage.value);
</script>
