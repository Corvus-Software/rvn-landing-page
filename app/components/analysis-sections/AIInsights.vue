<template>
  <div class="w-full py-24 bg-gray-900">
    <div
        ref="aiInsightsSection"
        class="container mx-auto px-4 md:px-20 lg:px-32"
        :class="{ 'animate-fade-in-up': aiInsightsVisible }"
    >
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4">AI Performance Coach</h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto">Your personal riding instructor powered by machine learning</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Insights Cards -->
        <div class="space-y-6">
          <div
              v-for="(insight, index) in aiInsights"
              :key="index"
              class="bg-zinc-800 rounded-2xl p-6 hover:bg-zinc-700 transition-all duration-300 cursor-pointer"
              @click="setActiveInsight(index)"
              :class="{ 'ring-2 ring-blue-500': activeInsight === index }"
          >
            <div class="flex items-start space-x-4">
              <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  :class="getInsightColor(insight.type)"
              >
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="insight.type === 'improvement'" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  <path v-else-if="insight.type === 'achievement'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  <path v-else-if="insight.type === 'warning'" fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  <path v-else fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-satoshi font-bold text-white mb-2">{{ insight.title }}</h3>
                <p class="text-white/70 font-general-sans mb-3">{{ insight.description }}</p>
                <div class="text-sm text-blue-400 font-general-sans mb-2">{{ insight.action }}</div>
                <div class="text-xs text-white/50 font-general-sans">Potential gain: {{ insight.potentialGain }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic AI Coach Visualization -->
        <div class="bg-zinc-800 rounded-3xl h-[600px] p-8 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
          <div class="relative z-10 h-full">
            <h3 class="text-2xl font-satoshi font-bold text-white mb-6">{{ currentInsight.title }}</h3>

            <!-- Detailed Analysis -->
            <div class="bg-zinc-700 rounded-2xl p-4 mb-6">
              <h4 class="text-lg font-satoshi font-bold text-white mb-3">Detailed Analysis</h4>
              <p class="text-sm text-white/80 font-general-sans mb-4">{{ currentInsight.detailedAnalysis }}</p>

              <!-- Progress Metrics -->
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="text-xl font-satoshi font-bold text-blue-400">{{ currentInsight.currentValue }}</div>
                  <div class="text-xs text-white/60">Current</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-satoshi font-bold text-green-400">{{ currentInsight.targetValue }}</div>
                  <div class="text-xs text-white/60">Target</div>
                </div>
              </div>
            </div>

            <!-- Action Steps -->
            <div class="bg-zinc-700 rounded-2xl p-4 mb-6">
              <h4 class="text-lg font-satoshi font-bold text-white mb-3">Action Steps</h4>
              <div class="space-y-2">
                <div
                    v-for="(step, index) in currentInsight.actionSteps"
                    :key="index"
                    class="flex items-center space-x-3 text-sm text-white/80"
                >
                  <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">{{ index + 1 }}</div>
                  <span>{{ step }}</span>
                </div>
              </div>
            </div>

            <!-- Apply Insight Button -->
            <button
                @click="applyInsight(currentInsight)"
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-general-sans font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Apply This Insight
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  selectedMetric: {
    type: Number,
    default: 0
  },
  currentSession: {
    type: Object,
    default: null
  }
})

// Reactive state
const activeInsight = ref(0)

// Visibility refs
const aiInsightsSection = ref(null)
const aiInsightsVisible = ref(false)

// Data
const aiInsights = ref([
  {
    type: 'improvement',
    title: 'Corner Entry Optimization',
    description: 'Your corner entry speeds are 8% below optimal based on your bike\'s capabilities.',
    action: 'Practice trail braking techniques',
    potentialGain: '0.8s per lap',
    detailedAnalysis: 'Analysis of 200+ laps shows consistent early braking in turns 2, 5, and 8. Your bike can handle 12mph more entry speed with proper technique.',
    currentValue: '67mph',
    targetValue: '75mph',
    actionSteps: [
      'Practice trail braking in Turn 2 specifically',
      'Move brake point 15m later on approach',
      'Gradually increase entry speed over 5 sessions',
      'Focus on smooth brake release through turn-in'
    ]
  },
  {
    type: 'achievement',
    title: 'Consistency Milestone',
    description: 'You\'ve achieved 95% lap time consistency - placing you in the top 5% of riders.',
    action: 'Time to focus on raw speed',
    potentialGain: 'Top 1% ranking',
    detailedAnalysis: 'Your lap time deviation is now just 0.4 seconds across 15-lap sessions. This consistency foundation enables focus on advanced techniques.',
    currentValue: '95%',
    targetValue: '97%',
    actionSteps: [
      'Maintain current smoothness approach',
      'Begin experimenting with racing lines',
      'Try different turn-in points systematically',
      'Document what works for each corner'
    ]
  },
  {
    type: 'warning',
    title: 'Tire Temperature Alert',
    description: 'Front tire temperatures exceeding optimal range in sessions longer than 20 minutes.',
    action: 'Adjust tire pressure and riding style',
    potentialGain: 'Improved safety & performance',
    detailedAnalysis: 'Front tire hitting 210°F+ after 15 laps, causing reduced grip and increased wear. This affects corner confidence and lap times.',
    currentValue: '210°F',
    targetValue: '190°F',
    actionSteps: [
      'Reduce front tire pressure by 2 PSI',
      'Take cooling laps every 10 laps',
      'Reduce aggressive braking in first 5 laps',
      'Monitor tire temps with pyrometer'
    ]
  },
  {
    type: 'social',
    title: 'Beat Your Best Friend',
    description: 'Sarah is only 0.7s faster than you at Laguna Seca - perfect challenge opportunity.',
    action: 'Analyze her sector times',
    potentialGain: 'Beat your friend!',
    detailedAnalysis: 'Sarah gains 0.4s in sector 2 (turns 4-6) but you\'re faster in sector 3. Her racing line through the chicane is more efficient.',
    currentValue: '1:42.8',
    targetValue: '1:42.1',
    actionSteps: [
      'Study her line through turns 4-5-6',
      'Practice later apex in turn 5',
      'Work on chicane rhythm and flow',
      'Challenge her to a session next weekend'
    ]
  }
])

// Computed
const currentInsight = computed(() => aiInsights.value[activeInsight.value])

// Methods
const setActiveInsight = (index) => {
  activeInsight.value = index
}

const getInsightColor = (type) => {
  switch (type) {
    case 'improvement': return 'bg-yellow-600'
    case 'achievement': return 'bg-green-600'
    case 'warning': return 'bg-red-600'
    case 'social': return 'bg-purple-600'
    default: return 'bg-blue-600'
  }
}

const applyInsight = (insight) => {
  emit('insight-applied', insight)
}

// Emits
const emit = defineEmits(['insight-applied'])

// Intersection Observer
let observer = null

const createObserver = () => {
  const options = { root: null, rootMargin: '0px', threshold: 0.1 }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === aiInsightsSection.value) {
        aiInsightsVisible.value = true
        if (observer) observer.unobserve(entry.target)
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (aiInsightsSection.value) observer.observe(aiInsightsSection.value)
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
