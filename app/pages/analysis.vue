<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section - Mobile Optimized -->
    <div
      class="w-full h-screen relative overflow-hidden"
    >
      <div
                class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style="background-image: url('/images/image0.jpg')"
                >
                </div>

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

    <!-- NEW: Session Over Session Trends -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-zinc-950">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            Session Progression
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            Track your improvement across multiple sessions
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <!-- Lap Time Trend -->
          <div class="bg-zinc-900 rounded-2xl p-6 sm:p-8">
            <h3 class="text-lg sm:text-xl font-satoshi font-bold text-white mb-6">
              Lap Time Progression
            </h3>
            <div class="space-y-4">
              <div
                v-for="(session, index) in sessionTrends"
                :key="index"
                class="flex items-center justify-between"
              >
                <div class="flex items-center space-x-4 flex-1">
                  <div class="text-sm text-white/60 w-20">{{ session.date }}</div>
                  <div class="flex-1 bg-zinc-800 rounded-full h-3 relative overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all duration-500"
                      :class="session.color"
                      :style="{ width: session.percentage + '%' }"
                    ></div>
                  </div>
                  <div class="text-sm font-satoshi font-bold text-white w-24 text-right">
                    {{ session.time }}
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-zinc-800 rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-sm text-white/70">Total Improvement</span>
                <span class="text-lg font-satoshi font-bold text-green-400">-2.4s</span>
              </div>
            </div>
          </div>

          <!-- Consistency Score -->
          <div class="bg-zinc-900 rounded-2xl p-6 sm:p-8">
            <h3 class="text-lg sm:text-xl font-satoshi font-bold text-white mb-6">
              Consistency Analysis
            </h3>
            <div class="flex items-center justify-center mb-6">
              <div class="relative w-48 h-48">
                <svg class="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    class="text-zinc-800"
                    stroke-width="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    class="text-green-500"
                    stroke-width="12"
                    fill="none"
                    stroke-dasharray="552"
                    stroke-dashoffset="138"
                    stroke-linecap="round"
                  />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center flex-col">
                  <span class="text-4xl font-satoshi font-[900] text-white">8.7</span>
                  <span class="text-sm text-white/60">out of 10</span>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm text-white/70">Lap Time Variance</span>
                <span class="text-sm font-satoshi font-bold text-white">±0.4s</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-white/70">Sector Consistency</span>
                <span class="text-sm font-satoshi font-bold text-white">92%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-white/70">Best Lap Frequency</span>
                <span class="text-sm font-satoshi font-bold text-white">1 in 5</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Session Comparison Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div class="bg-zinc-900 rounded-xl p-6 border-l-4 border-blue-500">
            <div class="text-sm text-white/60 mb-1">Average Lap Time</div>
            <div class="text-2xl font-satoshi font-bold text-white mb-2">1:43.8</div>
            <div class="text-xs text-green-400">↓ 0.8s from last session</div>
          </div>
          <div class="bg-zinc-900 rounded-xl p-6 border-l-4 border-purple-500">
            <div class="text-sm text-white/60 mb-1">Peak Performance</div>
            <div class="text-2xl font-satoshi font-bold text-white mb-2">Top 15%</div>
            <div class="text-xs text-green-400">↑ 5% improvement</div>
          </div>
          <div class="bg-zinc-900 rounded-xl p-6 border-l-4 border-green-500">
            <div class="text-sm text-white/60 mb-1">Sessions Completed</div>
            <div class="text-2xl font-satoshi font-bold text-white mb-2">24</div>
            <div class="text-xs text-white/60">This month</div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW: Lap Over Lap Analysis -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-black">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            Lap Comparison
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            Compare your best lap against your current performance
          </p>
        </div>

        <!-- Lap Selector -->
        <div class="flex flex-wrap gap-3 mb-8">
          <button
            v-for="lap in lapComparison"
            :key="lap.id"
            @click="setCompareLap(lap.id)"
            class="px-4 py-2 rounded-lg font-satoshi font-bold text-sm transition-all duration-200"
            :class="
              selectedLap === lap.id
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-900 text-white/70 hover:bg-zinc-800'
            "
          >
            {{ lap.label }} - {{ lap.time }}
          </button>
        </div>

        <!-- Delta Analysis -->
        <div class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-8">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <h3 class="text-xl font-satoshi font-bold text-white">Delta Time Analysis</h3>
            <div class="flex items-center space-x-6">
              <div class="text-center">
                <div class="text-sm text-white/60 mb-1">Current Lap</div>
                <div class="text-2xl font-satoshi font-bold text-blue-400">1:42.8</div>
              </div>
              <div class="text-3xl text-white/40">vs</div>
              <div class="text-center">
                <div class="text-sm text-white/60 mb-1">Best Lap</div>
                <div class="text-2xl font-satoshi font-bold text-green-400">1:41.8</div>
              </div>
            </div>
          </div>

          <!-- Track Sections Delta -->
          <div class="space-y-3">
            <div
              v-for="sector in sectorDeltas"
              :key="sector.name"
              class="bg-zinc-800 rounded-xl p-4"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-satoshi font-bold text-white">{{ sector.name }}</span>
                <span
                  class="text-sm font-satoshi font-bold"
                  :class="sector.delta > 0 ? 'text-red-400' : 'text-green-400'"
                >
                  {{ sector.delta > 0 ? '+' : '' }}{{ sector.delta }}s
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="flex-1 bg-zinc-700 rounded-full h-2 relative">
                  <div
                    class="absolute h-2 rounded-full transition-all duration-500"
                    :class="sector.delta > 0 ? 'bg-red-500' : 'bg-green-500'"
                    :style="{
                      width: Math.abs(sector.delta * 20) + '%',
                      left: sector.delta > 0 ? '50%' : 'auto',
                      right: sector.delta < 0 ? '50%' : 'auto'
                    }"
                  ></div>
                  <div class="absolute left-1/2 top-0 w-0.5 h-2 bg-white/30 transform -translate-x-1/2"></div>
                </div>
                <span class="text-xs text-white/60 w-16">{{ sector.speed }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Speed Trace Comparison -->
        <div class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8">
          <h3 class="text-xl font-satoshi font-bold text-white mb-6">Speed Trace</h3>
          <div class="h-64 bg-zinc-800 rounded-xl flex items-end justify-around p-6 space-x-2">
            <div
              v-for="(point, index) in speedTrace"
              :key="index"
              class="flex-1 flex flex-col items-center space-y-2"
            >
              <div class="relative w-full flex items-end space-x-1 h-48">
                <div
                  class="flex-1 bg-blue-500/50 rounded-t"
                  :style="{ height: point.current + '%' }"
                ></div>
                <div
                  class="flex-1 bg-green-500/50 rounded-t"
                  :style="{ height: point.best + '%' }"
                ></div>
              </div>
              <span class="text-xs text-white/40">T{{ index + 1 }}</span>
            </div>
          </div>
          <div class="flex justify-center space-x-6 mt-6">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-blue-500"></div>
              <span class="text-sm text-white/70">Current Lap</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="text-sm text-white/70">Best Lap</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW: Riding Style Comparison -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-zinc-950">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            Riding Style Analysis
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            See how your riding style compares to professional riders
          </p>
        </div>

        <!-- Pro Rider Selection -->
        <div class="flex flex-wrap gap-3 mb-8">
          <button
            v-for="rider in proRiders"
            :key="rider.id"
            @click="setProRider(rider.id)"
            class="px-6 py-3 rounded-xl font-satoshi font-bold text-sm transition-all duration-200 flex items-center space-x-3"
            :class="
              selectedProRider === rider.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-zinc-900 text-white/70 hover:bg-zinc-800'
            "
          >
            <div
              class="w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-bold"
              :style="{ background: rider.gradient }"
            >
              {{ rider.initials }}
            </div>
            <span>{{ rider.name }}</span>
          </button>
        </div>

        <!-- Style Comparison Chart -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Radar Chart Area -->
          <div class="bg-zinc-900 rounded-2xl p-6 sm:p-8">
            <h3 class="text-xl font-satoshi font-bold text-white mb-6">
              Style Attributes
            </h3>
            <div class="relative aspect-square max-w-md mx-auto">
              <!-- Placeholder for radar chart - in production, use Chart.js or similar -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-64 h-64 relative">
                    <!-- Pentagon shape for radar -->
                    <svg viewBox="0 0 200 200" class="w-full h-full">
                      <!-- Grid lines -->
                      <polygon points="100,20 172,76 145,158 55,158 28,76" fill="none" stroke="currentColor" class="text-zinc-700" stroke-width="1"/>
                      <polygon points="100,40 158,82 138,148 62,148 42,82" fill="none" stroke="currentColor" class="text-zinc-700" stroke-width="1"/>
                      <polygon points="100,60 144,88 131,138 69,138 56,88" fill="none" stroke="currentColor" class="text-zinc-700" stroke-width="1"/>
                      
                      <!-- Your data -->
                      <polygon points="100,35 165,80 140,145 60,145 35,80" fill="currentColor" class="text-blue-500/30" stroke="currentColor" stroke-width="2"/>
                      
                      <!-- Pro rider data -->
                      <polygon points="100,25 170,78 143,155 57,155 30,78" fill="currentColor" class="text-purple-500/20" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5"/>
                      
                      <!-- Axis lines -->
                      <line x1="100" y1="100" x2="100" y2="20" stroke="currentColor" class="text-zinc-800" stroke-width="1"/>
                      <line x1="100" y1="100" x2="172" y2="76" stroke="currentColor" class="text-zinc-800" stroke-width="1"/>
                      <line x1="100" y1="100" x2="145" y2="158" stroke="currentColor" class="text-zinc-800" stroke-width="1"/>
                      <line x1="100" y1="100" x2="55" y2="158" stroke="currentColor" class="text-zinc-800" stroke-width="1"/>
                      <line x1="100" y1="100" x2="28" y2="76" stroke="currentColor" class="text-zinc-800" stroke-width="1"/>
                    </svg>
                    
                    <!-- Labels -->
                    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                      <span class="text-xs text-white font-satoshi font-bold">Braking</span>
                    </div>
                    <div class="absolute top-12 right-0 transform translate-x-12">
                      <span class="text-xs text-white font-satoshi font-bold">Corner Entry</span>
                    </div>
                    <div class="absolute bottom-8 right-4 transform translate-x-16">
                      <span class="text-xs text-white font-satoshi font-bold">Apex Speed</span>
                    </div>
                    <div class="absolute bottom-8 left-4 transform -translate-x-16">
                      <span class="text-xs text-white font-satoshi font-bold">Throttle Control</span>
                    </div>
                    <div class="absolute top-12 left-0 transform -translate-x-16">
                      <span class="text-xs text-white font-satoshi font-bold">Line Choice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center space-x-6 mt-6">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                <span class="text-sm text-white/70">Your Style</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                <span class="text-sm text-white/70">{{ proRiders[selectedProRider].name }}</span>
              </div>
            </div>
          </div>

          <!-- Detailed Comparison -->
          <div class="space-y-4">
            <div
              v-for="attribute in styleAttributes"
              :key="attribute.name"
              class="bg-zinc-900 rounded-xl p-6"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-satoshi font-bold text-white">{{ attribute.name }}</span>
                <div class="flex items-center space-x-4">
                  <span class="text-sm text-blue-400 font-bold">{{ attribute.yourScore }}</span>
                  <span class="text-sm text-white/40">/</span>
                  <span class="text-sm text-purple-400 font-bold">{{ attribute.proScore }}</span>
                </div>
              </div>
              <div class="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  class="absolute h-full bg-blue-500 rounded-full transition-all duration-500"
                  :style="{ width: attribute.yourScore * 10 + '%' }"
                ></div>
                <div
                  class="absolute h-full border-2 border-purple-500 rounded-full transition-all duration-500"
                  :style="{ width: attribute.proScore * 10 + '%' }"
                ></div>
              </div>
              <p class="text-xs text-white/60 mt-2">{{ attribute.insight }}</p>
            </div>
          </div>
        </div>

        <!-- Key Differences -->
        <div class="mt-8 bg-zinc-900 rounded-2xl p-6 sm:p-8">
          <h3 class="text-xl font-satoshi font-bold text-white mb-6">
            Key Differences in Technique
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-satoshi font-bold text-white mb-2">Braking Technique</h4>
              <p class="text-sm text-white/70">Marc Marquez brakes 12m later and releases 8m earlier than you</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-satoshi font-bold text-white mb-2">Throttle Application</h4>
              <p class="text-sm text-white/70">Pro applies throttle 15% smoother through corner exits</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h4 class="text-lg font-satoshi font-bold text-white mb-2">Racing Line</h4>
              <p class="text-sm text-white/70">Different apex points in 6 out of 11 corners</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW: Corner & Segment Analysis -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-black">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            Corner Analysis
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            Detailed breakdown of each corner with improvement opportunities
          </p>
        </div>

        <!-- Track Map with Heat Zones -->
        <div class="bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 mb-8">
          <h3 class="text-xl font-satoshi font-bold text-white mb-6">
            Track Heat Map - Laguna Seca
          </h3>
          <div class="bg-zinc-800 rounded-xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
            <!-- Simplified track layout - replace with actual SVG or canvas -->
            <div class="relative w-full h-full max-w-3xl">
              <svg viewBox="0 0 800 400" class="w-full h-full">
                <!-- Track outline (simplified Laguna Seca) -->
                <path
                  d="M 100 200 L 200 200 L 250 150 L 350 120 L 450 140 L 520 200 L 580 250 L 620 280 L 650 250 L 680 180 L 700 120 L 680 80 L 620 60 L 500 80 L 400 120 L 300 180 L 200 240 L 150 240 L 100 200"
                  fill="none"
                  stroke="currentColor"
                  class="text-zinc-700"
                  stroke-width="40"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                
                <!-- Heat zones overlay -->
                <!-- Green zones (good performance) -->
                <circle cx="200" cy="200" r="25" fill="currentColor" class="text-green-500" opacity="0.6"/>
                <circle cx="450" cy="140" r="25" fill="currentColor" class="text-green-500" opacity="0.6"/>
                
                <!-- Yellow zones (moderate) -->
                <circle cx="350" cy="120" r="25" fill="currentColor" class="text-yellow-500" opacity="0.6"/>
                <circle cx="620" cy="280" r="25" fill="currentColor" class="text-yellow-500" opacity="0.6"/>
                
                <!-- Red zones (needs improvement) -->
                <circle cx="650" cy="250" r="25" fill="currentColor" class="text-red-500" opacity="0.6"/>
                <circle cx="300" cy="180" r="25" fill="currentColor" class="text-red-500" opacity="0.6"/>
                
                <!-- Corner numbers -->
                <text x="200" y="200" fill="white" text-anchor="middle" class="text-sm font-bold">1</text>
                <text x="250" y="150" fill="white" text-anchor="middle" class="text-sm font-bold">2</text>
                <text x="350" y="120" fill="white" text-anchor="middle" class="text-sm font-bold">3</text>
                <text x="450" y="140" fill="white" text-anchor="middle" class="text-sm font-bold">4</text>
                <text x="580" y="250" fill="white" text-anchor="middle" class="text-sm font-bold">5</text>
                <text x="620" y="280" fill="white" text-anchor="middle" class="text-sm font-bold">6</text>
                <text x="650" y="250" fill="white" text-anchor="middle" class="text-sm font-bold">7</text>
                <text x="680" y="180" fill="white" text-anchor="middle" class="text-sm font-bold">8</text>
                <text x="500" y="80" fill="white" text-anchor="middle" class="text-sm font-bold">9</text>
                <text x="300" y="180" fill="white" text-anchor="middle" class="text-sm font-bold">10</text>
                <text x="150" y="240" fill="white" text-anchor="middle" class="text-sm font-bold">11</text>
              </svg>
            </div>
          </div>
          <div class="flex justify-center space-x-6 mt-6">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <span class="text-sm text-white/70">Strong Performance</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span class="text-sm text-white/70">Moderate</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <span class="text-sm text-white/70">Needs Work</span>
            </div>
          </div>
        </div>

        <!-- Corner by Corner Breakdown -->
        <div class="space-y-4">
          <div
            v-for="corner in cornerAnalysis"
            :key="corner.number"
            class="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
            @click="toggleCorner(corner.number)"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center text-xl font-satoshi font-bold"
                  :class="corner.statusBg"
                >
                  {{ corner.number }}
                </div>
                <div>
                  <h4 class="text-lg font-satoshi font-bold text-white">{{ corner.name }}</h4>
                  <p class="text-sm text-white/60">{{ corner.type }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-satoshi font-bold" :class="corner.statusColor">
                  {{ corner.time }}
                </div>
                <div class="text-sm text-white/60">vs optimal: {{ corner.delta }}</div>
              </div>
            </div>

            <!-- Expanded Details -->
            <div v-if="expandedCorner === corner.number" class="mt-6 pt-6 border-t border-zinc-800">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="bg-zinc-800 rounded-lg p-4">
                  <div class="text-sm text-white/60 mb-1">Entry Speed</div>
                  <div class="text-xl font-satoshi font-bold text-white mb-2">{{ corner.entrySpeed }}</div>
                  <div class="text-xs" :class="corner.entrySpeedDelta > 0 ? 'text-red-400' : 'text-green-400'">
                    {{ corner.entrySpeedDelta > 0 ? '+' : '' }}{{ corner.entrySpeedDelta }} mph vs optimal
                  </div>
                </div>
                <div class="bg-zinc-800 rounded-lg p-4">
                  <div class="text-sm text-white/60 mb-1">Apex Speed</div>
                  <div class="text-xl font-satoshi font-bold text-white mb-2">{{ corner.apexSpeed }}</div>
                  <div class="text-xs" :class="corner.apexSpeedDelta > 0 ? 'text-red-400' : 'text-green-400'">
                    {{ corner.apexSpeedDelta > 0 ? '+' : '' }}{{ corner.apexSpeedDelta }} mph vs optimal
                  </div>
                </div>
                <div class="bg-zinc-800 rounded-lg p-4">
                  <div class="text-sm text-white/60 mb-1">Exit Speed</div>
                  <div class="text-xl font-satoshi font-bold text-white mb-2">{{ corner.exitSpeed }}</div>
                  <div class="text-xs" :class="corner.exitSpeedDelta < 0 ? 'text-red-400' : 'text-green-400'">
                    {{ corner.exitSpeedDelta > 0 ? '+' : '' }}{{ corner.exitSpeedDelta }} mph vs optimal
                  </div>
                </div>
              </div>

              <!-- Corner Phases -->
              <div class="space-y-3">
                <h5 class="text-sm font-satoshi font-bold text-white mb-3">Phase Analysis</h5>
                <div class="flex items-center space-x-3">
                  <div class="w-20 text-xs text-white/60">Braking</div>
                  <div class="flex-1 bg-zinc-800 rounded-full h-2">
                    <div class="bg-blue-500 h-2 rounded-full" :style="{ width: corner.braking + '%' }"></div>
                  </div>
                  <div class="w-12 text-xs text-white text-right">{{ corner.braking }}%</div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-20 text-xs text-white/60">Turn-in</div>
                  <div class="flex-1 bg-zinc-800 rounded-full h-2">
                    <div class="bg-purple-500 h-2 rounded-full" :style="{ width: corner.turnin + '%' }"></div>
                  </div>
                  <div class="w-12 text-xs text-white text-right">{{ corner.turnin }}%</div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-20 text-xs text-white/60">Apex</div>
                  <div class="flex-1 bg-zinc-800 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" :style="{ width: corner.apex + '%' }"></div>
                  </div>
                  <div class="w-12 text-xs text-white text-right">{{ corner.apex }}%</div>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-20 text-xs text-white/60">Exit</div>
                  <div class="flex-1 bg-zinc-800 rounded-full h-2">
                    <div class="bg-yellow-500 h-2 rounded-full" :style="{ width: corner.exit + '%' }"></div>
                  </div>
                  <div class="w-12 text-xs text-white text-right">{{ corner.exit }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW: Time Gain/Loss Simulator -->
    <div class="w-full py-16 sm:py-20 lg:py-24 bg-zinc-950">
      <div class="container mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <div class="mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi font-[900] text-white mb-3 sm:mb-4"
          >
            AI Improvement Simulator
          </h2>
          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-general-sans max-w-2xl">
            See potential time gains by implementing our AI-powered suggestions
          </p>
        </div>

        <!-- Current vs Potential -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <div class="bg-zinc-900 rounded-2xl p-8 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div class="relative">
              <div class="text-sm text-white/60 mb-2">Current Best Lap</div>
              <div class="text-6xl font-satoshi font-[900] text-white mb-4">1:42.3</div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <span class="text-sm text-white/70">Your personal best</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-8 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            <div class="relative">
              <div class="text-sm text-green-300 mb-2">Potential Best Lap</div>
              <div class="text-6xl font-satoshi font-[900] text-white mb-4">1:40.1</div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span class="text-sm text-green-300">With AI optimizations</span>
              </div>
              <div class="mt-4 inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <span class="text-sm font-satoshi font-bold text-green-400">-2.2 seconds faster</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Suggestions with Time Gains -->
        <div class="space-y-4">
          <div
            v-for="(suggestion, index) in aiSuggestions"
            :key="index"
            class="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-all duration-200"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start space-x-4 flex-1">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  :class="suggestion.priorityBg"
                >
                  <span class="text-sm font-satoshi font-bold" :class="suggestion.priorityText">
                    {{ suggestion.priority }}
                  </span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-2">
                    <h4 class="text-lg font-satoshi font-bold text-white">{{ suggestion.title }}</h4>
                    <span
                      class="px-3 py-1 rounded-full text-xs font-satoshi font-bold"
                      :class="suggestion.difficultyClass"
                    >
                      {{ suggestion.difficulty }}
                    </span>
                  </div>
                  <p class="text-sm text-white/70 mb-3">{{ suggestion.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <div class="inline-flex items-center space-x-2 bg-zinc-800 px-3 py-1 rounded-lg">
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span class="text-xs text-white/70">{{ suggestion.location }}</span>
                    </div>
                    <div class="inline-flex items-center space-x-2 bg-zinc-800 px-3 py-1 rounded-lg">
                      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      <span class="text-xs text-white/70">{{ suggestion.phase }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-right ml-4">
                <div class="text-3xl font-satoshi font-[900] text-green-400">
                  -{{ suggestion.timeGain }}s
                </div>
                <div class="text-xs text-white/60">potential gain</div>
              </div>
            </div>

            <!-- Implementation Steps -->
            <div class="mt-4 pt-4 border-t border-zinc-800">
              <button
                @click="toggleSuggestion(index)"
                class="flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>{{ expandedSuggestion === index ? 'Hide' : 'Show' }} Implementation Steps</span>
                <svg
                  class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': expandedSuggestion === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div
                v-if="expandedSuggestion === index"
                class="mt-4 space-y-3"
              >
                <div
                  v-for="(step, stepIndex) in suggestion.steps"
                  :key="stepIndex"
                  class="flex items-start space-x-3"
                >
                  <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span class="text-xs font-bold text-white">{{ stepIndex + 1 }}</span>
                  </div>
                  <p class="text-sm text-white/80">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Potential Improvement -->
        <div class="mt-8 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-satoshi font-bold text-white mb-2">
            Total Potential Time Reduction
          </h3>
          <div class="text-6xl font-satoshi font-[900] text-white mb-4">-2.2s</div>
          <p class="text-white/80 max-w-2xl mx-auto">
            By implementing all AI suggestions, you could improve your lap time from 1:42.3 to 1:40.1,
            placing you in the top 10% of riders at this track.
          </p>
          <button class="mt-6 px-8 py-4 bg-white text-gray-900 rounded-full font-satoshi font-bold hover:bg-gray-100 transition-colors duration-200">
            Start Training Program
          </button>
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
const selectedLap = ref(1);
const selectedProRider = ref(0);
const expandedCorner = ref(null);
const expandedSuggestion = ref(null);

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

const sessionTrends = ref([
  { date: "Oct 28", time: "1:41.8", percentage: 95, color: "bg-green-500" },
  { date: "Oct 21", time: "1:42.1", percentage: 92, color: "bg-green-400" },
  { date: "Oct 14", time: "1:43.5", percentage: 85, color: "bg-blue-400" },
  { date: "Oct 7", time: "1:44.2", percentage: 78, color: "bg-yellow-400" },
]);

const lapComparison = ref([
  { id: 1, label: "Current Lap", time: "1:42.8" },
  { id: 2, label: "Best Lap", time: "1:41.8" },
  { id: 3, label: "Avg Lap", time: "1:44.2" },
  { id: 4, label: "Last Session Best", time: "1:42.1" },
]);

const sectorDeltas = ref([
  { name: "Sector 1", delta: -0.1, speed: "118 mph" },
  { name: "Sector 2", delta: +0.3, speed: "87 mph" },
  { name: "Sector 3", delta: +0.2, speed: "124 mph" },
  { name: "Sector 4", delta: -0.2, speed: "96 mph" },
]);

const speedTrace = ref([
  { current: 85, best: 90 },
  { current: 60, best: 65 },
  { current: 95, best: 98 },
  { current: 70, best: 75 },
  { current: 88, best: 92 },
  { current: 55, best: 60 },
  { current: 100, best: 100 },
  { current: 75, best: 80 },
  { current: 90, best: 95 },
  { current: 65, best: 68 },
]);

const proRiders = ref([
  { id: 0, name: "Marc Marquez", initials: "MM", gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)" },
  { id: 1, name: "Valentino Rossi", initials: "VR", gradient: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)" },
  { id: 2, name: "Casey Stoner", initials: "CS", gradient: "linear-gradient(135deg, #6B5B95 0%, #B06AB3 100%)" },
]);

const styleAttributes = ref([
  {
    name: "Braking Point",
    yourScore: 7.2,
    proScore: 9.5,
    insight: "Marc Marquez brakes 15 meters later on average",
  },
  {
    name: "Corner Entry",
    yourScore: 8.5,
    proScore: 9.2,
    insight: "Good entry speed, focus on line consistency",
  },
  {
    name: "Apex Speed",
    yourScore: 7.8,
    proScore: 9.0,
    insight: "Carrying more speed through apex will improve lap times",
  },
  {
    name: "Throttle Application",
    yourScore: 6.9,
    proScore: 9.3,
    insight: "Pro applies throttle 20% smoother on corner exit",
  },
  {
    name: "Line Choice",
    yourScore: 8.2,
    proScore: 8.8,
    insight: "Very good line selection, minor adjustments needed",
  },
]);

const cornerAnalysis = ref([
  {
    number: 1,
    name: "Turn 1 - Andretti Hairpin",
    type: "Slow Hairpin",
    time: "8.2s",
    delta: "+0.3s",
    statusBg: "bg-yellow-500/20",
    statusColor: "text-yellow-400",
    entrySpeed: "82 mph",
    entrySpeedDelta: -3,
    apexSpeed: "38 mph",
    apexSpeedDelta: -2,
    exitSpeed: "65 mph",
    exitSpeedDelta: -5,
    braking: 85,
    turnin: 78,
    apex: 92,
    exit: 72,
  },
  {
    number: 2,
    name: "Turn 2 - Fast Left",
    type: "Medium Speed",
    time: "5.8s",
    delta: "+0.1s",
    statusBg: "bg-green-500/20",
    statusColor: "text-green-400",
    entrySpeed: "95 mph",
    entrySpeedDelta: -1,
    apexSpeed: "78 mph",
    apexSpeedDelta: -1,
    exitSpeed: "92 mph",
    exitSpeedDelta: -2,
    braking: 90,
    turnin: 88,
    apex: 95,
    exit: 87,
  },
  {
    number: 3,
    name: "Turn 3 - Corkscrew",
    type: "Technical Complex",
    time: "9.5s",
    delta: "+0.5s",
    statusBg: "bg-red-500/20",
    statusColor: "text-red-400",
    entrySpeed: "108 mph",
    entrySpeedDelta: -8,
    apexSpeed: "52 mph",
    apexSpeedDelta: -6,
    exitSpeed: "71 mph",
    exitSpeedDelta: -7,
    braking: 68,
    turnin: 72,
    apex: 75,
    exit: 70,
  },
]);

const aiSuggestions = ref([
  {
    priority: "P1",
    priorityBg: "bg-red-500",
    priorityText: "text-white",
    title: "Delay Braking Point - Turn 3",
    description: "Analysis shows you're braking 18 meters too early into the Corkscrew. This conservative approach costs significant time.",
    difficulty: "Medium",
    difficultyClass: "bg-yellow-500/20 text-yellow-400",
    location: "Turn 3 - Corkscrew",
    phase: "Braking",
    timeGain: 0.5,
    steps: [
      "Use the 150m board as your brake marker instead of the 200m board",
      "Focus on progressive brake pressure - initial hard squeeze then gradual release",
      "Trail brake deeper into the corner, releasing fully by the first apex",
      "Practice this in 5 consecutive laps to build confidence",
    ],
  },
  {
    priority: "P2",
    priorityBg: "bg-orange-500",
    priorityText: "text-white",
    title: "Optimize Exit Speed - Turn 8",
    description: "You're losing 7mph of exit speed compared to optimal. Earlier throttle application will help carry more speed down the straight.",
    difficulty: "Easy",
    difficultyClass: "bg-green-500/20 text-green-400",
    location: "Turn 8",
    phase: "Corner Exit",
    timeGain: 0.4,
    steps: [
      "Begin throttle application 2 meters earlier at corner apex",
      "Use a progressive 30-70% throttle roll-on through mid-corner",
      "Commit to full throttle 5 meters earlier than current",
      "This will gain 7mph on the straight, worth 0.4s per lap",
    ],
  },
  {
    priority: "P3",
    priorityBg: "bg-yellow-500",
    priorityText: "text-gray-900",
    title: "Wider Entry Line - Turn 1",
    description: "Your current line is too tight, forcing a compromised exit. A wider entry will allow better drive out.",
    difficulty: "Easy",
    difficultyClass: "bg-green-500/20 text-green-400",
    location: "Turn 1 - Andretti Hairpin",
    phase: "Turn-in",
    timeGain: 0.3,
    steps: [
      "Position bike 2 feet wider at turn-in point",
      "This creates a straighter exit line for better acceleration",
      "Aim for late apex - target the final third of the corner",
      "You'll sacrifice 1mph entry but gain 5mph exit speed",
    ],
  },
  {
    priority: "P4",
    priorityBg: "bg-blue-500",
    priorityText: "text-white",
    title: "Smoother Throttle Control - Turn 6",
    description: "Data shows 23% throttle variation through this corner. Smoother inputs will improve grip and speed.",
    difficulty: "Hard",
    difficultyClass: "bg-red-500/20 text-red-400",
    location: "Turn 6",
    phase: "Apex to Exit",
    timeGain: 0.2,
    steps: [
      "Focus on constant, progressive throttle increase",
      "Avoid the current on-off pattern detected in telemetry",
      "Practice throttle control drills in Turn 6 specifically",
      "Aim for linear 0-100% throttle application over 3 seconds",
    ],
  },
  {
    priority: "P5",
    priorityBg: "bg-purple-500",
    priorityText: "text-white",
    title: "Body Position - Turn 11",
    description: "Vision analysis suggests late body positioning changes. Earlier movement will improve corner stability.",
    difficulty: "Medium",
    difficultyClass: "bg-yellow-500/20 text-yellow-400",
    location: "Turn 11",
    phase: "Corner Entry",
    timeGain: 0.2,
    steps: [
      "Move body position 15 meters before turn-in (currently moving at turn-in)",
      "Lock lower body to tank earlier for better stability",
      "Keep head and eyes up, looking through the corner",
      "This will improve confidence and allow earlier throttle",
    ],
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

const setCompareLap = (id) => {
  selectedLap.value = id;
};

const setProRider = (id) => {
  selectedProRider.value = id;
};

const toggleCorner = (number) => {
  expandedCorner.value = expandedCorner.value === number ? null : number;
};

const toggleSuggestion = (index) => {
  expandedSuggestion.value = expandedSuggestion.value === index ? null : index;
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
  title: "Performance Analysis | RVN - AI-Powered Motorcycle Telemetry Unit",
  description:
    "Advanced motorcycle performance analytics with AI-powered insights. Track lap times, lean angles, speed, and get personalized coaching to improve your riding.",
  keywords:
    "motorcycle performance analysis, lap time analysis, lean angle tracking, motorcycle telemetry, AI riding coach, track day analytics",
});
</script>