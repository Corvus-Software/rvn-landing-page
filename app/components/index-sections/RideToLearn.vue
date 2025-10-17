<!-- Ride to Learn Section -->
<template>
  <div class="w-full py-24 bg-black">
    <div
      ref="rideToLearnSection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': rideToLearnVisible }"
    >
      <!-- Section Header -->
      <div class="max-w-4xl mb-16">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4">Ride to learn</h2>
      </div>

      <!-- Big Rounded Rectangle - Full Width -->
      <div class="bg-zinc-900 rounded-3xl p-8 h-[37rem] flex items-center justify-center mb-16">
        <div class="text-center">
          <h3 class="text-2xl font-satoshi font-bold text-white mb-4">{{ activeTab.title }}</h3>
          <p class="text-white/70 font-general-sans">{{ activeTab.subtitle }}</p>
          <div class="mt-6 text-white/50 font-general-sans">
            Active content for: {{ activeTab.id }}
          </div>
        </div>
      </div>

      <!-- Tab Blocks - Three Equal Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="cursor-pointer transition-all duration-300"
          @click="setActiveTab(index)"
        >
          <!-- Tab Header with Underline -->
          <div class="relative pb-4 mb-6">
            <h3
              class="text-2xl font-satoshi font-bold mb-2 transition-colors duration-300"
              :class="activeTabIndex === index ? 'text-green-500' : 'text-gray-400'"
            >
              {{ tab.title }}
            </h3>
            <p
              class="text-lg font-general-sans mb-4 transition-colors duration-300"
              :class="activeTabIndex === index ? 'text-green-400' : 'text-gray-500'"
            >
              {{ tab.subtitle }}
            </p>
            <!-- Thick underline for active tab -->
            <div
              class="absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300"
              :class="activeTabIndex === index ? 'w-20' : 'w-0'"
            ></div>
          </div>

          <!-- Tab Content -->
          <div class="transition-all duration-300">
            <p
              class="font-general-sans mb-4 transition-colors duration-300"
              :class="activeTabIndex === index ? 'text-white/80' : 'text-gray-600'"
            >
              {{ tab.description }}
            </p>

            <!-- Bullet Points -->
            <ul class="space-y-2">
              <li
                v-for="point in tab.bulletPoints"
                :key="point"
                class="flex items-start font-general-sans transition-colors duration-300"
                :class="activeTabIndex === index ? 'text-white/70' : 'text-gray-600'"
              >
                <span
                  class="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-300"
                  :class="activeTabIndex === index ? 'bg-green-500' : 'bg-gray-600'"
                ></span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const rideToLearnSection = ref(null)
const rideToLearnVisible = ref(false)
const activeTabIndex = ref(0)

const tabs = ref([
  {
    id: 'performance',
    title: 'Performance Tracking',
    subtitle: 'Monitor your riding metrics in real-time',
    description: 'Track your speed, lean angles, braking patterns, and acceleration to understand your riding style and identify areas for improvement.',
    bulletPoints: [
      'Real-time speed and acceleration monitoring',
      'Lean angle detection and analysis',
      'Braking force and timing measurements',
      'Cornering speed optimization tips'
    ]
  },
  {
    id: 'safety',
    title: 'Safety Analytics',
    subtitle: 'AI-powered safety insights and alerts',
    description: 'Get intelligent safety recommendations based on your riding patterns, weather conditions, and road analysis to stay safe yet fast on every ride.',
    bulletPoints: [
      'Predictive safety alerts and warnings',
      'Road condition analysis and recommendations',
      'Weather-based riding suggestions'
    ]
  },
  {
    id: 'improvement',
    title: 'Skill Development',
    subtitle: 'Personalized training and improvement plans',
    description: 'Receive customized training recommendations and track your progress over time with detailed analytics and coaching insights.',
    bulletPoints: [
      'Personalized training recommendations',
      'Progress tracking and milestone celebrations',
      'Technique analysis and improvement tips',
      'Community challenges and leaderboards',
      'Goal oriented session feedback tailored to you'
    ]
  }
])

const activeTab = computed(() => tabs.value[activeTabIndex.value])

const setActiveTab = (index) => {
  activeTabIndex.value = index
}

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
      if (entry.isIntersecting && entry.target === rideToLearnSection.value) {
        rideToLearnVisible.value = true
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (rideToLearnSection.value) observer.observe(rideToLearnSection.value)
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

[ref="rideToLearnSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
