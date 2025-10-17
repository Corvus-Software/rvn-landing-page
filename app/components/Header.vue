<template>
  <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-background/80 backdrop-blur-md border-b border-muted/20' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center group">
            <span class="font-satoshi text-4xl font-[900] text-white group-hover:text-accent transition-colors">RVN</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/features" class="header-link relative group text-white hover:text-accent">
            Features
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/analysis" class="header-link relative group text-white hover:text-accent">
            Analysis
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/about-us" class="header-link relative group text-white hover:text-accent">
            About Us
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <NuxtLink to="/waitlist">
          <div class="hidden md:flex items-center space-x-4">
            <button class="header-link-btn px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-accent hover:border-accent hover:text-white transition-colors duration-200 shadow-md">
              Join Waitlist
            </button>
          </div>
        </NuxtLink>


        <!-- Mobile Menu Button -->
        <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-white hover:text-accent transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
          v-if="mobileMenuOpen"
          class="md:hidden py-4 border-t border-muted/20"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/features" class="header-link block px-4 py-2 text-white hover:text-accent transition-colors">
            Features
          </NuxtLink>
          <NuxtLink to="/how-it-works" class="header-link block px-4 py-2 text-white hover:text-accent transition-colors">
            How It Works
          </NuxtLink>
          <NuxtLink to="/pricing" class="header-link block px-4 py-2 text-white hover:text-accent transition-colors">
            Pricing
          </NuxtLink>
          <NuxtLink to="/docs" class="header-link block px-4 py-2 text-white hover:text-accent transition-colors">
            Docs
          </NuxtLink>
          <button class="header-link mx-4 px-6 py-2.5 border-2 border-primary bg-black text-white rounded-full font-bold hover:bg-accent hover:border-accent hover:text-white transition-colors duration-200 shadow-md">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
@import '@/assets/css/fonts.css';

.header-link {
  font-size: .8125rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.33;
  text-transform: uppercase;
}

.header-link-btn {
  font-size: .8125rem;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 1.33;
  text-transform: uppercase;
}
</style>
