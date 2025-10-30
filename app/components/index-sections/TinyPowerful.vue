<template>
  <div class="w-full py-24 bg-white">
    <div
      ref="tinyPowerfulSection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': tinyPowerfulVisible }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="flex flex-col justify-center">
          <h2
            class="text-5xl md:text-6xl font-satoshi font-[900] text-blue-600 mb-8 leading-tight"
          >
            Tiny, yet powerful
          </h2>
          <p class="text-xl text-gray-700 font-general-sans mb-12 max-w-xl">
            Despite its compact size, <span class="font-chillax font-bold">RVN</span> packs cutting-edge technology that delivers
            professional-grade data analysis and insights for every ride.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <span class="text-gray-800 font-general-sans font-medium"
                >Ultra Compact</span
              >
            </div>

            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-800 font-general-sans font-medium"
                >12 Day Battery Life</span
              >
            </div>

            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-800 font-general-sans font-medium"
                >Industry Standard Modules</span
              >
            </div>
          </div>

          <button
            class="font-sans px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md inline-flex items-center space-x-2 group w-fit"
          >
            <span class="tracking-[1px] text-sm uppercase font-bold"
              >Explore the Device</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

        <div class="space-y-11 w-full max-w-7xl">
          <div class="grid grid-cols-2 gap-11">
            <div class="bg-zinc-800 h-[27rem] rounded-tl-3xl">
              <div
                class="w-full h-full flex items-center justify-center text-white/20"
              >
                <span class="text-sm font-general-sans">Content Block 1</span>
              </div>
            </div>

            <div class="bg-zinc-800 h-[27rem] rounded-tr-3xl">
              <div
                class="w-full h-full flex items-center justify-center text-white/20"
              >
                <span class="text-sm font-general-sans">Content Block 2</span>
              </div>
            </div>
          </div>

          <div class="bg-zinc-800 h-[27rem] rounded-bl-3xl rounded-br-3xl">
            <div
              class="w-full h-full flex items-center justify-center text-white/20"
            >
              <span class="text-sm font-general-sans">Content Block 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const tinyPowerfulSection = ref(null);
const tinyPowerfulVisible = ref(false);

let observer = null;

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === tinyPowerfulSection.value) {
        tinyPowerfulVisible.value = true;
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (tinyPowerfulSection.value) observer.observe(tinyPowerfulSection.value);
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

[ref="tinyPowerfulSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
