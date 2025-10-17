<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section - Mobile Optimized -->
    <div
      class="w-full h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-black"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"
      ></div>

      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
          <div class="max-w-4xl">
            <h1
              class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-6 sm:mb-8 leading-tight"
            >
              DATA
              <br />
              DRIVES
              <br />
              GROWTH
            </h1>
            <p
              class="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-8 sm:mb-10 font-general-sans"
            >
              Deep dive into your riding analytics with AI-powered insights that
              help you become a better, safer rider.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="font-sans px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-base sm:text-lg font-bold"
              >
                <span class="tracking-[1px] uppercase">View Analytics</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:translate-x-1"
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
    </div>

    <!-- Live Session Data - Mobile Grid Layout -->
    <div class="w-full py-12 sm:py-16 bg-black border-b border-zinc-800">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div
          class="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0"
        >
          <div>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-satoshi font-[900] text-white mb-2">
              Live Session Data
            </h2>
            <p class="text-sm sm:text-base text-white/70 font-general-sans">
              Currently tracking your ride in real-time
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto lg:flex lg:gap-6 xl:gap-8">
            <div class="text-center">
              <div class="text-xl sm:text-2xl lg:text-3xl font-satoshi font-[900] text-blue-400">
                87
              </div>
              <div class="text-xs sm:text-sm text-white/60">MPH</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl lg:text-3xl font-satoshi font-[900] text-green-400">
                34°
              </div>
              <div class="text-xs sm:text-sm text-white/60">Lean</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl lg:text-3xl font-satoshi font-[900] text-purple-400">
                9.2
              </div>
              <div class="text-xs sm:text-sm text-white/60">Score</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl lg:text-3xl font-satoshi font-[900] text-red-400">
                23:45
              </div>
              <div class="text-xs sm:text-sm text-white/60">Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Metrics - Stacked on Mobile -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-black">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div class="lg:col-span-1 space-y-4">
            <h3 class="text-base sm:text-lg lg:text-xl font-satoshi font-bold text-white mb-4 lg:mb-6">
              Performance Metrics
            </h3>
            <div class="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
              <div
                v-for="(metric, index) in performanceMetrics"
                :key="index"
                class="p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300"
                :class="
                  activeMetric === index
                    ? 'bg-blue-600'
                    : 'bg-zinc-900 hover:bg-zinc-800'
                "
                @click="setActiveMetric(index)"
              >
                <div class="text-sm sm:text-base lg:text-lg font-satoshi font-bold text-white">
                  {{ metric.value }}
                </div>
                <div class="text-xs sm:text-sm text-white/70">{{ metric.title }}</div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-4 bg-zinc-900 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
            ></div>
            <div class="relative z-10 h-full flex flex-col">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-3 sm:gap-4">
                <h3 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-satoshi font-bold text-white">
                  {{ performanceMetrics[activeMetric].title }} Analysis
                </h3>
                <div class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-satoshi font-[900] text-blue-400">
                  {{ performanceMetrics[activeMetric].value }}
                </div>
              </div>

              <div
                class="flex-1 bg-zinc-800 rounded-xl lg:rounded-2xl p-4 sm:p-6 flex items-center justify-center"
              >
                <div class="text-center text-white">
                  <div
                    class="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-4 sm:border-6 lg:border-8 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-6 lg:mb-8"
                  ></div>
                  <div class="text-sm sm:text-base lg:text-lg xl:text-xl font-satoshi font-bold mb-4">
                    {{ performanceMetrics[activeMetric].description }}
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-8">
                    <div class="text-center">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">
                        {{ performanceMetrics[activeMetric].avg }}
                      </div>
                      <div class="text-xs sm:text-sm text-white/60">Average</div>
                    </div>
                    <div class="text-center">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">
                        {{ performanceMetrics[activeMetric].best }}
                      </div>
                      <div class="text-xs sm:text-sm text-white/60">Best</div>
                    </div>
                    <div class="text-center">
                      <div class="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">
                        {{ performanceMetrics[activeMetric].improvement }}
                      </div>
                      <div class="text-xs sm:text-sm text-white/60">Trend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Session Timeline - Mobile Friendly -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-black">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            Session Timeline
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            Track your progression across multiple sessions and discover what
            makes you faster
          </p>
        </div>

        <div class="relative">
          <div class="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-zinc-700"></div>

          <div class="space-y-6 sm:space-y-8">
            <div
              v-for="(session, index) in sessionData"
              :key="index"
              class="relative flex items-start"
            >
              <div
                class="absolute left-2.5 sm:left-6 top-4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-black z-10"
              ></div>

              <div
                class="ml-12 sm:ml-20 bg-zinc-900 rounded-xl lg:rounded-2xl p-4 sm:p-6 w-full hover:bg-zinc-800 transition-colors duration-300 cursor-pointer"
                @click="setActiveSession(index)"
              >
                <div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start lg:items-center">
                  <div class="w-full sm:w-auto">
                    <h4 class="text-base sm:text-lg lg:text-xl font-satoshi font-bold text-white">
                      {{ session.name }}
                    </h4>
                    <p class="text-sm text-white/60">{{ session.date }}</p>
                  </div>
                  <div class="text-left sm:text-center">
                    <div class="text-lg sm:text-xl lg:text-2xl font-satoshi font-bold text-green-400">
                      {{ session.bestLap }}
                    </div>
                    <div class="text-xs sm:text-sm text-white/60">Best Lap</div>
                  </div>
                  <div class="text-left sm:text-center">
                    <div class="text-lg sm:text-xl lg:text-2xl font-satoshi font-bold text-blue-400">
                      {{ session.laps }}
                    </div>
                    <div class="text-xs sm:text-sm text-white/60">Total Laps</div>
                  </div>
                  <div class="text-left sm:text-center">
                    <div
                      class="text-base sm:text-lg font-satoshi font-bold"
                      :class="session.trendColor"
                    >
                      {{ session.improvement }}
                    </div>
                    <div class="text-xs sm:text-sm text-white/60">vs Previous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Performance Coach - Mobile Optimized -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-black">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div class="lg:col-span-2">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-6 sm:mb-8"
            >
              AI Performance Coach
            </h2>

            <div class="space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              <div
                v-for="(insight, index) in aiInsights"
                :key="index"
                class="flex space-x-3 sm:space-x-4"
              >
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div class="bg-zinc-900 rounded-xl lg:rounded-2xl rounded-tl-sm p-4 sm:p-6 flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <h4 class="text-sm sm:text-base font-satoshi font-bold text-white">
                      {{ insight.title }}
                    </h4>
                    <div
                      class="w-2 h-2 rounded-full"
                      :class="getInsightColor(insight.type)"
                    ></div>
                  </div>
                  <p class="text-xs sm:text-sm lg:text-base text-white/80 font-general-sans mb-3 sm:mb-4">
                    {{ insight.description }}
                  </p>
                  <div class="text-xs sm:text-sm text-blue-400 font-general-sans mb-2 sm:mb-3">
                    {{ insight.action }}
                  </div>
                  <div class="text-xs text-white/50">
                    Potential gain: {{ insight.potentialGain }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 h-fit">
            <h3 class="text-lg sm:text-xl lg:text-2xl font-satoshi font-bold text-white mb-4 sm:mb-6">
              Quick Actions
            </h3>

            <div class="space-y-3 sm:space-y-4">
              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl font-general-sans font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Start New Session
              </button>
              <button
                class="w-full bg-zinc-800 hover:bg-zinc-700 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl font-general-sans font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Compare with Friends
              </button>
              <button
                class="w-full bg-zinc-800 hover:bg-zinc-700 text-white p-3 sm:p-4 rounded-lg sm:rounded-xl font-general-sans font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Export Data
              </button>
            </div>

            <div class="mt-6 sm:mt-8 p-3 sm:p-4 bg-zinc-800 rounded-lg sm:rounded-xl">
              <h4 class="text-sm sm:text-base font-satoshi font-bold text-white mb-2">
                Today's Goal
              </h4>
              <p class="text-xs sm:text-sm text-white/70 font-general-sans">
                Improve corner exit speed by 3mph in Turn 8
              </p>
              <div class="w-full bg-zinc-700 rounded-full h-2 mt-3">
                <div class="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div class="text-xs text-white/50 mt-1">75% complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leaderboard - Mobile Stacked Layout -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-gray-900 mb-3 sm:mb-4"
          >
            Riding Crew Leaderboard
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 font-general-sans max-w-2xl mx-auto">
            See how you stack up against your friends
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center sm:items-end justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-12">
          <div class="text-center order-2 sm:order-1">
            <div
              class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-4 h-24 sm:h-32 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 text-lg sm:text-2xl font-bold"
                >
                  S
                </div>
                <div class="text-sm sm:text-lg font-satoshi font-bold">Sarah</div>
                <div class="text-xs sm:text-sm">1:42.1</div>
              </div>
            </div>
            <div class="text-4xl sm:text-6xl text-gray-400 font-satoshi font-[900]">2</div>
          </div>

          <div class="text-center order-1 sm:order-2">
            <div
              class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-4 h-32 sm:h-40 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 text-xl sm:text-2xl font-bold"
                >
                  M
                </div>
                <div class="text-lg sm:text-xl font-satoshi font-bold">Marcus</div>
                <div class="text-sm">1:41.2</div>
              </div>
            </div>
            <div class="text-6xl sm:text-8xl text-yellow-500 font-satoshi font-[900]">
              1
            </div>
          </div>

          <div class="text-center order-3">
            <div
              class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-4 h-20 sm:h-24 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div
                  class="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-base sm:text-xl font-bold"
                >
                  J
                </div>
                <div class="text-sm sm:text-base font-satoshi font-bold">Jake</div>
                <div class="text-xs">1:43.5</div>
              </div>
            </div>
            <div class="text-3xl sm:text-5xl text-orange-500 font-satoshi font-[900]">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeMetric = ref(0);
const activeSession = ref(0);

const performanceMetrics = ref([
  {
    title: "Lap Time",
    value: "1:42.3",
    description: "Analyzing your current lap performance",
    avg: "1:44.2",
    best: "1:41.8",
    improvement: "+0.5s",
  },
  {
    title: "Top Speed",
    value: "124 mph",
    description: "Tracking maximum velocity achieved",
    avg: "118 mph",
    best: "127 mph",
    improvement: "+3 mph",
  },
  {
    title: "Lean Angle",
    value: "48°",
    description: "Maximum lean angle recorded",
    avg: "43°",
    best: "52°",
    improvement: "+2°",
  },
  {
    title: "G-Force",
    value: "1.8g",
    description: "Peak acceleration forces",
    avg: "1.5g",
    best: "2.1g",
    improvement: "+0.2g",
  },
]);

const sessionData = ref([
  {
    name: "Track Day - Laguna Seca",
    date: "October 15, 2025",
    bestLap: "1:41.8",
    laps: 23,
    improvement: "+0.3s",
    trendColor: "text-green-400",
  },
  {
    name: "Practice Session",
    date: "October 12, 2025",
    bestLap: "1:42.1",
    laps: 18,
    improvement: "-0.2s",
    trendColor: "text-red-400",
  },
  {
    name: "Morning Ride",
    date: "October 10, 2025",
    bestLap: "1:43.5",
    laps: 12,
    improvement: "+0.8s",
    trendColor: "text-green-400",
  },
]);

const aiInsights = ref([
  {
    title: "Corner Entry Optimization",
    description:
      "Your braking point in Turn 3 can be delayed by 15 meters based on your current entry speed.",
    action: "Try braking 2 car lengths later",
    potentialGain: "0.3 seconds",
    type: "improvement",
  },
  {
    title: "Throttle Control",
    description:
      "Smoother throttle application out of corners will improve your lap times significantly.",
    action: "Focus on progressive throttle opening",
    potentialGain: "0.5 seconds",
    type: "technique",
  },
  {
    title: "Lean Angle Warning",
    description:
      "You're approaching maximum lean angle limits. Consider adjusting your line for safety.",
    action: "Take a wider entry line in Turn 8",
    potentialGain: "Safety improvement",
    type: "safety",
  },
]);

const setActiveMetric = (index) => {
  activeMetric.value = index;
};

const setActiveSession = (index) => {
  activeSession.value = index;
};

const getInsightColor = (type) => {
  switch (type) {
    case "improvement":
      return "bg-green-500";
    case "technique":
      return "bg-blue-500";
    case "safety":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

// SEO Meta
useSeoMeta({
  title: "Performance Analysis | RVN - AI-Powered Motorcycle Data Logger",
  description:
    "Advanced motorcycle performance analytics with AI-powered insights. Track lap times, lean angles, speed, and get personalized coaching to improve your riding.",
  keywords:
    "motorcycle performance analysis, lap time analysis, lean angle tracking, motorcycle telemetry, AI riding coach, track day analytics",
});
</script>
