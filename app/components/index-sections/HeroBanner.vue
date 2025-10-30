<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div class="w-full h-screen relative overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 z-0 w-full h-full object-cover"
    >
      <source src="/images/home-page.mp4" type="video/mp4" />
    </video>

    <!-- Optional: Dark overlay for better text readability -->
    <div class="absolute inset-0 z-[1] bg-black/30"></div>
      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 md:px-20 lg:px-32">
          <div class="max-w-4xl">
            <h1 class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-8 leading-tight">
              THE WORLD
              <br/>
              IS YOUR
              <br/>
              TRACK
            </h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-general-sans">
              Discover the cutting-edge technology that makes <span class="font-chillax font-bold">RVN</span> the ultimate riding
              companion for every motorcycle enthusiast.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 h-full flex items-center">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="max-w-4xl">
          <h1
            class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-8 leading-tight"
          >
            THE WORLD
            <br />
            IS YOUR TRACK
          </h1>
          <p
            class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-general-sans"
          >
            <span class="font-chillax font-bold">RVN</span> is your AI-powered telemetry unit that provides insights and post-ride
            analysis to help you become a better rider.
          </p>
          <button
            ref="heroSection"
            class="font-sans px-10 py-4 bg-black text-white rounded-full hover:bg-accent hover:text-white transition-colors duration-200 shadow-md border-2 border-white/20 inline-flex items-center space-x-2 group"
            :class="{ 'animate-fade-in': heroVisible }"
          >
            <span class="tracking-[2px] text-[.8125rem] uppercase"
              >JOIN THE WAITLIST</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const heroSection = ref(null);
const heroVisible = ref(false);

let observer = null;

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === heroSection.value) {
        heroVisible.value = true;
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (heroSection.value) observer.observe(heroSection.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

[ref="heroSection"]:not(.animate-fade-in) {
  opacity: 0;
}
</style>
