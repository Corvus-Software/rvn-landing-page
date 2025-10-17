<template>
  <div class="w-full h-screen relative overflow-hidden">
    <div
      class="absolute inset-0 z-0 bg-gradient-to-br from-red-950 via-red-900 to-black"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15),transparent_50%)]"
      ></div>
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
            RVN is your AI-powered data logger that provides insights and
            post-ride analysis to help you become a better rider.
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
