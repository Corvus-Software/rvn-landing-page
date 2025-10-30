<template>
  <div class="w-full min-h-screen bg-black relative overflow-hidden">
    <div
      ref="secondBannerSection"
      class="container mx-auto px-4 md:px-20 lg:px-32 py-24"
      :class="{ 'animate-fade-in-up': secondBannerVisible }"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]"
      >
        <div class="max-w-2xl">
          <h3
            class="text-5xl md:text-7xl lg:text-8xl font-satoshi text-white mb-8 leading-tight"
          >
            RIDE WITH
            <br />
            CONFIDENCE
          </h3>
          <p
            class="text-xl md:text-2xl text-white/90 font-general-sans max-w-xl"
          >
            No matter your skill level, <span class="font-chillax font-bold">RVN</span> is designed to help you get better session after session. 
            Our AI-powered insights and detailed analytics give you the tools you need to ride with confidence and improve your skills on every ride. 
            Attach <span class="font-chillax font-bold">RVN</span> to your motorcycle and it will learn your riding style, providing personalized feedback and recommendations to help you reach your full potential.
          </p>
        </div>

        <div
          class="w-4/5 ml-auto aspect-[3/5] bg-zinc-900 rounded-3xl overflow-hidden relative"
        >
          <img
            src="/images/image2.jpg"
            alt="Feature Image"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-black to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const secondBannerSection = ref(null);
const secondBannerVisible = ref(false);

let observer = null;

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === secondBannerSection.value) {
        secondBannerVisible.value = true;
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (secondBannerSection.value) observer.observe(secondBannerSection.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
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
