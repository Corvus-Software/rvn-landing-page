<template>
  <div class="w-full py-24 bg-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-40">
      <svg width="1400" height="800" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full right-0 absolute z-0 scale-125">
        <path d="M400 150 Q600 100 800 150 Q1000 200 1200 150 Q1300 120 1400 150" stroke="#2563EB" stroke-opacity="0.4" stroke-width="4" stroke-miterlimit="10" fill="none"/>
        <path d="M350 180 Q550 130 750 180 Q950 230 1150 180 Q1250 150 1350 180" stroke="#3B82F6" stroke-opacity="0.35" stroke-width="4" stroke-miterlimit="10" fill="none"/>
        <path d="M300 210 Q500 160 700 210 Q900 260 1100 210 Q1200 180 1300 210" stroke="#60A5FA" stroke-opacity="0.3" stroke-width="4" stroke-miterlimit="10" fill="none"/>

        <path d="M200 300 Q400 250 600 300 Q800 350 1000 300 Q1200 250 1400 300" stroke="#93C5FD" stroke-opacity="0.25" stroke-width="4" stroke-miterlimit="10" fill="none"/>
        <path d="M150 350 Q350 300 550 350 Q750 400 950 350 Q1150 300 1350 350" stroke="#BFDBFE" stroke-opacity="0.2" stroke-width="4" stroke-miterlimit="10" fill="none"/>

        <path d="M100 450 Q300 400 500 450 Q700 500 900 450 Q1100 400 1300 450" stroke="#DBEAFE" stroke-opacity="0.15" stroke-width="4" stroke-miterlimit="10" fill="none"/>
        <path d="M250 520 Q450 470 650 520 Q850 570 1050 520 Q1250 470 1400 520" stroke="#EFF6FF" stroke-opacity="0.1" stroke-width="4" stroke-miterlimit="10" fill="none"/>

        <path d="M50 600 Q250 550 450 600 Q650 650 850 600 Q1050 550 1250 600" stroke="#2563EB" stroke-opacity="0.2" stroke-width="4" stroke-miterlimit="10" fill="none"/>
        <path d="M150 650 Q350 600 550 650 Q750 700 950 650 Q1150 600 1350 650" stroke="#3B82F6" stroke-opacity="0.15" stroke-width="4" stroke-miterlimit="10" fill="none"/>

        <path d="M300 750 Q500 700 700 750 Q900 800 1100 750 Q1300 700 1400 750" stroke="#60A5FA" stroke-opacity="0.1" stroke-width="4" stroke-miterlimit="10" fill="none"/>
      </svg>
    </div>

    <div
        ref="appShowcaseSection"
        class="container mx-auto px-4 md:px-20 lg:px-32 relative z-10"
        :class="{ 'animate-fade-in-up': appShowcaseVisible }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <div class="lg:col-span-1 relative h-[600px]">
          <div class="space-y-6">
            <h2
                class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 leading-tight transition-all duration-500"
                :key="activeSlide"
            >
              {{ features[activeSlide].title }}
            </h2>
            <p
                class="text-xl text-gray-700 font-general-sans max-w-lg transition-all duration-500"
                :key="activeSlide + 'desc'"
            >
              {{ features[activeSlide].description }}
            </p>
          </div>

          <div class="absolute bottom-8 left-0">
            <div class="flex space-x-4 py-6 justify-start">
              <div
                  v-for="(feature, index) in features"
                  :key="index"
                  class="cursor-pointer transition-all duration-300 transform hover:scale-125"
                  @click="setActiveSlide(index)"
              >
                <div
                    class="w-3 h-3 rounded-full transition-all duration-500"
                    :class="activeSlide === index
                    ? 'bg-blue-600 shadow-md shadow-blue-200'
                    : 'bg-gray-300 hover:bg-blue-400'"
                >
                </div>
              </div>
            </div>

            <div class="flex space-x-4">
              <button
                  @click="previousSlide"
                  class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
                  :disabled="activeSlide === 0"
                  :class="{ 'opacity-50 cursor-not-allowed': activeSlide === 0 }"
              >
                <svg class="w-5 h-5 text-gray-600 transition-transform duration-200 group-hover:-translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </button>
              <button
                  @click="nextSlide"
                  class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
                  :disabled="activeSlide === features.length - 1"
                  :class="{ 'opacity-50 cursor-not-allowed': activeSlide === features.length - 1 }"
              >
                <svg class="w-5 h-5 text-gray-600 transition-transform duration-200 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 relative h-[600px] flex items-center justify-center overflow-hidden">
          <div class="relative w-full h-full flex items-center justify-center">
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="absolute w-[22rem] h-[38rem] bg-zinc-900 rounded-3xl shadow-2xl border-4 border-gray-200 transition-all duration-700 ease-in-out"
                :class="getSlideClasses(index)"
            >
              <div class="w-full h-full flex flex-col items-center justify-center text-white/30 p-8">
                <div class="text-center">
                  <h4 class="text-lg font-satoshi font-bold mb-4">{{ feature.title }}</h4>
                  <p class="text-sm font-general-sans opacity-70 mb-8">{{ feature.description }}</p>
                  <div class="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-24 bg-white relative overflow-hidden">

    <div
        ref="raiSection"
        class="container mx-auto px-4 md:px-20 lg:px-32 relative z-10"
        :class="{ 'animate-fade-in-up': raiVisible }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="bg-zinc-900 rounded-3xl h-[600px] p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10"></div>

            <div class="relative z-10 border-b border-zinc-700 pb-4 mb-6">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-satoshi font-bold text-white">RAi Assistant</h4>
                  <p class="text-sm text-white/60">Your personal riding coach</p>
                </div>
                <div class="ml-auto">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div class="relative z-10 space-y-4 h-[400px] overflow-hidden">
              <div class="flex justify-end">
                <div class="bg-red-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                  <p class="text-sm font-general-sans">How can I improve my cornering technique on the track?</p>
                </div>
              </div>

              <div class="flex justify-start">
                <div class="bg-zinc-800 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                  <p class="text-sm font-general-sans mb-2">Based on your last 15 track sessions, I've analyzed your data:</p>
                  <div class="text-xs text-white/80 space-y-1">
                    <p>• Average lean angle: 42° (optimal: 45-48°)</p>
                    <p>• Entry speed: 15% below optimal</p>
                    <p>• Apex hitting accuracy: 73%</p>
                  </div>
                  <p class="text-sm font-general-sans mt-2">Try carrying 3-5mph more entry speed and focus on hitting the apex consistently.</p>
                </div>
              </div>

              <div class="flex justify-end">
                <div class="bg-red-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                  <p class="text-sm font-general-sans">Show me my progress over the last month</p>
                </div>
              </div>

              <div class="flex justify-start">
                <div class="bg-zinc-800 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                  <p class="text-sm font-general-sans mb-3">Here's your monthly progress:</p>
                  <div class="bg-zinc-700 rounded-lg p-3">
                    <div class="grid grid-cols-2 gap-4 text-xs">
                      <div class="text-center">
                        <div class="text-green-400 font-bold">+2.3s</div>
                        <div class="text-white/60">Lap time improvement</div>
                      </div>
                      <div class="text-center">
                        <div class="text-green-400 font-bold">+12%</div>
                        <div class="text-white/60">Consistency score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative z-10 border-t border-zinc-700 pt-4">
              <div class="flex items-center space-x-3">
                <div class="flex-1 bg-zinc-800 rounded-full px-4 py-2">
                  <p class="text-sm text-white/60 font-general-sans">Ask RAi anything about your riding...</p>
                </div>
                <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="text-red-400 font-general-sans text-sm uppercase tracking-wide mb-4">Intelligent Assistant</div>
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-black mb-6">Meet RAi</h2>
          <p class="text-xl text-black/90 font-general-sans mb-8">
            Your personal riding coach powered by Throttle AI. RAi analyzes your riding data to provide personalized insights, answer questions about your performance, and help you become a better rider through data-backed recommendations.
          </p>

          <div class="space-y-6 mb-8">
            <div
                v-for="(capability, index) in raiCapabilities"
                :key="index"
                class="flex items-start space-x-4 cursor-pointer group"
                @click="setActiveRaiCapability(index)"
            >
              <div
                  class="w-6 h-6 rounded-full border-2 transition-all duration-300 flex-shrink-0 mt-1"
                  :class="activeRaiCapability === index
                    ? 'bg-red-600 border-red-600'
                    : 'bg-transparent border-white/30 group-hover:border-red-400'"
              >
                <div
                    v-if="activeRaiCapability === index"
                    class="w-2 h-2 bg-black rounded-full mx-auto mt-0.5"
                ></div>
              </div>
              <div>
                <h3
                    class="text-lg font-satoshi font-bold mb-1 transition-colors duration-300"
                    :class="activeRaiCapability === index ? 'text-red-400' : 'text-black'"
                >
                  {{ capability.title }}
                </h3>
                <p
                    class="font-general-sans text-sm transition-colors duration-300"
                    :class="activeRaiCapability === index ? 'text-white/90' : 'text-black/60'"
                >
                  {{ capability.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">24/7</div>
              <div class="text-sm text-black/60 font-general-sans">Available</div>
            </div>
            <div>
              <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">100M+</div>
              <div class="text-sm text-black/60 font-general-sans">Data Points Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-8 bg-blue-600">
    <div
        ref="featuresSection"
        class="container mx-auto px-4 md:px-20 lg:px-32"
        :class="{ 'animate-fade-in-up': featuresVisible }"
    >
      <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        <div class="flex items-center space-x-3 text-white">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
          <span class="text-lg font-general-sans font-medium">Free worldwide shipping</span>
        </div>

        <div class="hidden md:block w-px h-8 bg-white/30"></div>

        <div class="flex items-center space-x-3 text-white">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"/>
          </svg>
          <span class="text-lg font-general-sans font-medium">Lifetime warranty</span>
        </div>

        <div class="hidden md:block w-px h-8 bg-white/30"></div>

        <div class="flex items-center space-x-3 text-white">
          <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
          </svg>
          <span class="text-lg font-general-sans font-medium">30 Day Returns</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const appShowcaseSection = ref(null)
const appShowcaseVisible = ref(false)
const activeSlide = ref(0)
const isTransitioning = ref(false)

const features = ref([
  {
    title: 'After Action Reports',
    description: 'Monitor your speed, lean angles, and performance metrics after your ride with precision GPS tracking and advanced sensors.'
  },
  {
    title: 'Data Analytics',
    description: 'Deep insights into your riding patterns with beautiful charts, graphs, and personalized performance metrics.'
  },
  {
    title: 'Safety Alerts',
    description: 'AI-powered notifications and warnings to keep you safe on every journey with predictive analytics.'
  },
  {
    title: 'Progress Insights',
    description: 'Track your improvement over time with detailed performance analysis and milestone achievements.'
  }
])

const previousSlideIndex = computed(() => {
  return activeSlide.value > 0 ? activeSlide.value - 1 : null
})

const nextSlideIndex = computed(() => {
  return activeSlide.value < features.value.length - 1 ? activeSlide.value + 1 : null
})

const getSlideClasses = (index) => {
  if (index === activeSlide.value) {
    return 'opacity-100 scale-100 z-30 translate-x-0'
  } else if (index < activeSlide.value) {
    return 'opacity-0 scale-90 z-5 -translate-x-full'
  } else {
    return 'opacity-0 scale-90 z-5 translate-x-full'
  }
}

const setActiveSlide = (index) => {
  if (index === activeSlide.value) return
  activeSlide.value = index
}

const nextSlide = () => {
  if (activeSlide.value < features.value.length - 1) {
    setActiveSlide(activeSlide.value + 1)
  }
}

const previousSlide = () => {
  if (activeSlide.value > 0) {
    setActiveSlide(activeSlide.value - 1)
  }
}

let observer = null

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === appShowcaseSection.value) {
        appShowcaseVisible.value = true
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (appShowcaseSection.value) observer.observe(appShowcaseSection.value)
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

[ref="appShowcaseSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}

.carousel-enter-active, .carousel-leave-active {
  transition: all 0.7s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.8);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-100px) scale(0.8);
}
</style>
