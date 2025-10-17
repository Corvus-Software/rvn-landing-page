<!-- Second Banner Section -->
<template>
  <div class="w-full min-h-screen bg-black relative overflow-hidden">
    <div
      ref="secondBannerSection"
      class="container mx-auto px-4 md:px-20 lg:px-32 py-24"
      :class="{ 'animate-fade-in-up': secondBannerVisible }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <h2 class="text-6xl md:text-7xl lg:text-8xl font-satoshi text-white mb-8 leading-tight">
            RIDE WITH
            <br />
            CONFIDENCE
          </h2>
          <p class="text-xl md:text-2xl text-white/90 font-general-sans max-w-xl">
            Get feedback and insights for every corner, segment, lap, and session tailored to your riding skill, and style.
          </p>
        </div>

        <!-- Image Placeholder -->
        <div class="w-4/5 ml-auto aspect-[3/5] bg-zinc-900 rounded-3xl overflow-hidden">
          <div class="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20">
            <span class="text-lg font-general-sans">Feature Image</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const secondBannerSection = ref(null)
const secondBannerVisible = ref(false)

// Intersection Observer for lazy loading
let observer = null

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === secondBannerSection.value) {
        secondBannerVisible.value = true
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (secondBannerSection.value) observer.observe(secondBannerSection.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

[ref="secondBannerSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
