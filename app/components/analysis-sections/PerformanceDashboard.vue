<template>
  <div class="w-full py-24 bg-black">
    <div
      ref="dashboardSection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': dashboardVisible }"
    >
      <div class="text-center mb-16">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4"
        >
          Performance Dashboard
        </h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto">
          Real-time insights into your riding performance
        </p>

        <div class="flex justify-center mt-8">
          <div class="bg-zinc-800 rounded-full p-1 flex space-x-1">
            <button
              v-for="(period, index) in timePeriods"
              :key="index"
              @click="setActivePeriod(index)"
              class="px-6 py-3 rounded-full text-sm font-general-sans font-medium transition-all duration-300"
              :class="
                activePeriod === index
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              "
            >
              {{ period }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 space-y-6">
          <div
            v-for="(metric, index) in performanceMetrics"
            :key="index"
            class="bg-zinc-900 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            :class="{
              'ring-4 ring-blue-500 bg-zinc-800': activeMetric === index,
            }"
            @click="setActiveMetric(index)"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-satoshi font-bold text-white">
                {{ metric.title }}
              </h3>
              <div class="w-3 h-3 rounded-full" :class="metric.color"></div>
            </div>
            <div class="text-3xl font-satoshi font-[900] text-white mb-2">
              {{ metric.value }}
            </div>
            <div class="text-sm text-white/60 font-general-sans">
              {{ metric.change }}
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div
            class="bg-zinc-900 rounded-3xl h-[500px] p-8 relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
            ></div>
            <div class="relative z-10 h-full">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-2xl font-satoshi font-bold text-white">
                  {{ performanceMetrics[activeMetric].title }} Analysis
                </h3>
                <div class="text-white/60 text-sm font-general-sans">
                  {{ timePeriods[activePeriod] }}
                </div>
              </div>

              <div class="h-full flex items-center justify-center">
                <div class="text-center text-white">
                  <div
                    class="w-32 h-32 border-8 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-8"
                  ></div>
                  <div class="text-xl font-satoshi font-bold mb-4">
                    {{ performanceMetrics[activeMetric].title }} Trends
                  </div>
                  <p class="text-white/70 font-general-sans">
                    {{ performanceMetrics[activeMetric].description }}
                  </p>

                  <div class="grid grid-cols-3 gap-6 mt-8">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-blue-400">
                        {{ performanceMetrics[activeMetric].avg }}
                      </div>
                      <div class="text-sm text-white/60">Average</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-green-400">
                        {{ performanceMetrics[activeMetric].best }}
                      </div>
                      <div class="text-sm text-white/60">Best</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-purple-400">
                        {{ performanceMetrics[activeMetric].improvement }}
                      </div>
                      <div class="text-sm text-white/60">Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  initialMetric: {
    type: Number,
    default: 0,
  },
});

const activePeriod = ref(0);
const activeMetric = ref(props.initialMetric);

const dashboardSection = ref(null);
const dashboardVisible = ref(false);

const timePeriods = ref(["Last Ride", "This Week", "This Month", "All Time"]);

const performanceMetrics = ref([
  {
    title: "Average Speed",
    value: "67 mph",
    change: "+3% from last week",
    color: "bg-blue-500",
    description:
      "Your average speed across all recent rides with detailed velocity analysis",
    avg: "67",
    best: "89",
    improvement: "+12%",
  },
  {
    title: "Lean Angle",
    value: "42°",
    change: "+2° improvement",
    color: "bg-green-500",
    description:
      "Maximum lean angles achieved during cornering with safety recommendations",
    avg: "38°",
    best: "47°",
    improvement: "+8°",
  },
  {
    title: "Safety Score",
    value: "9.2/10",
    change: "+0.3 this month",
    color: "bg-purple-500",
    description:
      "AI-calculated safety rating based on riding patterns and risk assessment",
    avg: "8.7",
    best: "9.6",
    improvement: "+0.8",
  },
  {
    title: "Efficiency",
    value: "94%",
    change: "+5% optimized",
    color: "bg-yellow-500",
    description:
      "Route and riding efficiency metrics with fuel consumption analysis",
    avg: "89%",
    best: "97%",
    improvement: "+11%",
  },
]);

const setActivePeriod = (index) => {
  activePeriod.value = index;
};
const setActiveMetric = (index) => {
  activeMetric.value = index;
};

const emit = defineEmits(["metric-changed", "period-changed"]);

watch(activeMetric, (newValue) => {
  emit("metric-changed", newValue);
});

watch(activePeriod, (newValue) => {
  emit("period-changed", newValue);
});

let observer = null;

const createObserver = () => {
  const options = { root: null, rootMargin: "0px", threshold: 0.1 };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === dashboardSection.value) {
        dashboardVisible.value = true;
        if (observer) observer.unobserve(entry.target);
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (dashboardSection.value) observer.observe(dashboardSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
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

[ref]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
