<template>
  <div class="w-full py-24 bg-black">
    <div
      ref="meetRvnSection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': meetRvnVisible }"
    >
      <div class="max-w-4xl">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4"
        >
          Introducing RVN
        </h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mb-16">
          The future of motorcycle data analysis on your bike and in your pocket.
        </p>
      </div>

      <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div class="space-y-6">
            <div
              class="bg-zinc-900 rounded-3xl overflow-hidden group transition-transform duration-300 hover:-translate-y-2 aspect-[5/7]"
            >
              <div
                class="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20"
              >
                <span class="text-lg font-general-sans">Device Image</span>
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-satoshi font-bold text-white mb-2">
                Attach Anywhere
              </h3>
              <p class="text-white/70 font-general-sans">
                RVN is small and compact enough to be placed anywhere, in any
                orientation. Just attach it to your motorcycle and go.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="bg-zinc-900 rounded-3xl overflow-hidden group transition-transform duration-300 hover:-translate-y-2 aspect-[5/7]"
            >
              <div
                class="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20"
              >
                <span class="text-lg font-general-sans">RVN Console Image</span>
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-satoshi font-bold text-white mb-2">
                RVN Console App
              </h3>
              <p class="text-white/70 font-general-sans">
                RVN records then sends tracking, insights, and feedback placed in a
                beautifully designed interface on your phone, and computer.
              </p>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="bg-zinc-900 rounded-3xl overflow-hidden group transition-transform duration-300 hover:-translate-y-2 aspect-[5/7]"
            >
              <div
                class="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20"
              >
                <span class="text-lg font-general-sans"
                  >Analytics Dashboard</span
                >
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-satoshi font-bold text-white mb-2">
                Throttle AI
              </h3>
              <p class="text-white/70 font-general-sans">
                Advanced insights and personalized recommendations for every riding style and track
                powered by our Throttle AI engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const meetRvnSection = ref(null);
const meetRvnVisible = ref(false);

let observer = null;

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === meetRvnSection.value) {
        meetRvnVisible.value = true;
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (meetRvnSection.value) observer.observe(meetRvnSection.value);
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

[ref="meetRvnSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
