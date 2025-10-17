<template>
  <div class="w-full py-24 bg-black">
    <div
        ref="sessionTrendsSection"
        class="container mx-auto px-4 md:px-20 lg:px-32"
        :class="{ 'animate-fade-in-up': sessionTrendsVisible }"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight">Session to Session Evolution</h2>
          <p class="text-xl text-white/90 font-general-sans mb-8">
            Track your progression across multiple track sessions and discover patterns that unlock consistent performance improvements.
          </p>

          <!-- Session Cards -->
          <div class="space-y-4">
            <div
                v-for="(session, index) in sessionData"
                :key="index"
                class="bg-zinc-900 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-zinc-800"
                @click="setActiveSession(index)"
                :class="{ 'ring-2 ring-blue-500': activeSession === index }"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-lg font-satoshi font-bold text-white">{{ session.name }}</h4>
                  <p class="text-sm text-white/60">{{ session.date }} • {{ session.laps }} laps</p>
                </div>
                <div class="text-right">
                  <div class="text-lg font-satoshi font-bold" :class="session.trendColor">{{ session.bestLap }}</div>
                  <div class="text-xs text-white/60">{{ session.improvement }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Session Visualization -->
        <div class="bg-zinc-900 rounded-3xl h-[600px] p-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
          <div class="relative z-10 h-full">
            <h3 class="text-2xl font-satoshi font-bold text-white mb-6">{{ sessionData[activeSession].name }}</h3>

            <!-- Lap Time Graph Mockup -->
            <div class="bg-zinc-800 rounded-2xl h-64 mb-6 p-4 flex items-end justify-center space-x-2">
              <div
                  v-for="(bar, index) in sessionData[activeSession].lapTimes"
                  :key="index"
                  class="bg-blue-500 rounded-t-sm transition-all duration-500 hover:bg-blue-400"
                  :style="{ height: bar + 'px', width: '12px' }"
              ></div>
            </div>

            <!-- Session Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-2xl font-satoshi font-[900] text-green-400">{{ sessionData[activeSession].avgLap }}</div>
                <div class="text-sm text-white/60">Average Lap</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-satoshi font-[900] text-purple-400">{{ sessionData[activeSession].consistency }}</div>
                <div class="text-sm text-white/60">Consistency</div>
              </div>
            </div>

            <div class="mt-6 p-4 bg-zinc-800 rounded-xl">
              <div class="text-sm text-white/80 font-general-sans">
                <strong>Key Insight:</strong> {{ sessionData[activeSession].insight }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const activeSession = ref(0)

// Visibility refs
const sessionTrendsSection = ref(null)
const sessionTrendsVisible = ref(false)

// Data
const sessionData = ref([
  {
    name: 'Morning Track Session',
    date: 'Oct 15, 2025',
    laps: 12,
    bestLap: '1:42.8',
    avgLap: '1:45.2',
    consistency: '92%',
    improvement: '-0.8s',
    trendColor: 'text-green-400',
    insight: 'Consistent improvement in sector 2 times, focus on late braking technique',
    lapTimes: [80, 75, 70, 65, 68, 62, 60, 58, 55, 60, 58, 56]
  },
  {
    name: 'Evening Practice',
    date: 'Oct 12, 2025',
    laps: 15,
    bestLap: '1:43.6',
    avgLap: '1:46.1',
    consistency: '88%',
    improvement: '-0.3s',
    trendColor: 'text-green-400',
    insight: 'Good progress on turn 3 entry, work on maintaining speed through chicane',
    lapTimes: [85, 82, 78, 75, 72, 70, 68, 65, 67, 63, 61, 64, 62, 60, 58]
  },
  {
    name: 'Weekend Track Day',
    date: 'Oct 8, 2025',
    laps: 18,
    bestLap: '1:43.9',
    avgLap: '1:47.3',
    consistency: '85%',
    improvement: '+0.2s',
    trendColor: 'text-red-400',
    insight: 'Tire degradation affected later laps, consider tire pressure adjustments',
    lapTimes: [90, 88, 85, 80, 78, 75, 73, 70, 72, 75, 78, 80, 82, 85, 87, 89, 90, 92]
  }
])

// Methods
const setActiveSession = (index) => {
  activeSession.value = index
  // Emit session change event for parent components
  emit('session-changed', sessionData.value[index])
}

// Emits
const emit = defineEmits(['session-changed'])

// Intersection Observer
let observer = null

const createObserver = () => {
  const options = { root: null, rootMargin: '0px', threshold: 0.1 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === sessionTrendsSection.value) {
        sessionTrendsVisible.value = true
        if (observer) observer.unobserve(entry.target)
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (sessionTrendsSection.value) observer.observe(sessionTrendsSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
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

[ref]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
