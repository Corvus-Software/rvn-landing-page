<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isMobile || scrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-muted/20'
        : 'bg-transparent',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center group">
            <span
              class="font-satoshi text-4xl font-[900] text-white group-hover:text-accent transition-colors"
              >RVN</span
            >
          </NuxtLink>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="header-link relative group text-white hover:text-accent"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </div>

        <!-- Desktop CTA -->
        <NuxtLink to="/waitlist" class="hidden md:flex">
          <button
            class="header-link-btn px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-accent hover:border-accent hover:text-white transition-colors duration-200 shadow-md"
          >
            Join Waitlist
          </button>
        </NuxtLink>

        <!-- Mobile Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-white hover:text-accent transition-colors"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          aria-controls="mobile-menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden flex flex-col pt-20 px-4 space-y-4 border-t border-muted/20"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          @click="mobileMenuOpen = false"
          class="header-link block text-white hover:text-accent transition-colors text-lg"
        >
          {{ item.label }}
        </NuxtLink>

        <NuxtLink to="/waitlist">
          <button
            @click="mobileMenuOpen = false"
            class="header-link w-full px-6 py-3 border-2 border-primary bg-black text-white rounded-full font-bold hover:bg-accent hover:border-accent hover:text-white transition-colors duration-200 shadow-md"
          >
            Join Waitlist
          </button>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "#imports";

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const isMobile = ref(false);

// shared nav items
const navItems = [
  { label: "Features", to: "/features" },
  { label: "Analysis", to: "/analysis" },
  { label: "About Us", to: "/about-us" },
];

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20;
  };

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768; // Tailwind md breakpoint
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkMobile);

  handleScroll();
  checkMobile();

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkMobile);
  });
});

// close mobile menu on route change
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  }
);
</script>

<style scoped>
@import "@/assets/css/fonts.css";

.header-link {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.33;
  text-transform: uppercase;
}

.header-link-btn {
  font-size: 0.8125rem;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 1.33;
  text-transform: uppercase;
}
</style>
