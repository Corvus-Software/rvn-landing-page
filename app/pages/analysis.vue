<template>
  <div class="min-h-screen bg-black">
    <!-- Hero Section -->
    <div class="w-full h-screen relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-black">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>

      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 md:px-20 lg:px-32">
          <div class="max-w-4xl">
            <h1 class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-8 leading-tight">
              DATA
              <br />
              DRIVES
              <br />
              PERFORMANCE
            </h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-general-sans">
              Deep dive into your riding analytics with AI-powered insights that help you become a better, safer rider.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="font-sans px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-lg font-bold">
                <span class="tracking-[1px] uppercase">View Analytics</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-time Dashboard Strip - BLACK -->
    <div class="w-full py-16 bg-black border-b border-zinc-800">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <div>
            <h2 class="text-3xl font-satoshi font-[900] text-white mb-2">Live Session Data</h2>
            <p class="text-white/70 font-general-sans">Currently tracking your ride in real-time</p>
          </div>

          <div class="flex space-x-8">
            <div class="text-center">
              <div class="text-3xl font-satoshi font-[900] text-blue-400">87</div>
              <div class="text-sm text-white/60">MPH</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-satoshi font-[900] text-green-400">34°</div>
              <div class="text-sm text-white/60">Lean</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-satoshi font-[900] text-purple-400">9.2</div>
              <div class="text-sm text-white/60">Score</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-satoshi font-[900] text-red-400">00:23:45</div>
              <div class="text-sm text-white/60">Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Overview - Vertical Split Layout - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 h-[600px]">
          <!-- Narrow Left Column - Metrics List -->
          <div class="lg:col-span-1 space-y-4">
            <h3 class="text-xl font-satoshi font-bold text-white mb-6">Performance Metrics</h3>
            <div
                v-for="(metric, index) in performanceMetrics"
                :key="index"
                class="p-4 rounded-xl cursor-pointer transition-all duration-300"
                :class="activeMetric === index ? 'bg-blue-600' : 'bg-zinc-900 hover:bg-zinc-800'"
                @click="setActiveMetric(index)"
            >
              <div class="text-lg font-satoshi font-bold text-white">{{ metric.value }}</div>
              <div class="text-sm text-white/70">{{ metric.title }}</div>
            </div>
          </div>

          <!-- Wide Right Column - Large Visualization -->
          <div class="lg:col-span-4 bg-zinc-900 rounded-3xl p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            <div class="relative z-10 h-full flex flex-col">
              <div class="flex justify-between items-center mb-8">
                <h3 class="text-3xl font-satoshi font-bold text-white">{{ performanceMetrics[activeMetric].title }} Analysis</h3>
                <div class="text-5xl font-satoshi font-[900] text-blue-400">{{ performanceMetrics[activeMetric].value }}</div>
              </div>

              <!-- Large Chart Area -->
              <div class="flex-1 bg-zinc-800 rounded-2xl p-6 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-32 h-32 border-8 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-8"></div>
                  <div class="text-xl font-satoshi font-bold mb-4">{{ performanceMetrics[activeMetric].description }}</div>
                  <div class="grid grid-cols-3 gap-8 mt-8">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-green-400">{{ performanceMetrics[activeMetric].avg }}</div>
                      <div class="text-sm text-white/60">Average</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-blue-400">{{ performanceMetrics[activeMetric].best }}</div>
                      <div class="text-sm text-white/60">Best</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-purple-400">{{ performanceMetrics[activeMetric].improvement }}</div>
                      <div class="text-sm text-white/60">Trend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Session Analysis - Horizontal Timeline Layout - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4">Session Timeline</h2>
          <p class="text-xl text-white/90 font-general-sans max-w-2xl">Track your progression across multiple sessions and discover what makes you faster</p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-700"></div>

          <!-- Session Cards -->
          <div class="space-y-8">
            <div
                v-for="(session, index) in sessionData"
                :key="index"
                class="relative flex items-center"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-black z-10"></div>

              <!-- Session Card -->
              <div class="ml-20 bg-zinc-900 rounded-2xl p-6 w-full hover:bg-zinc-800 transition-colors duration-300 cursor-pointer" @click="setActiveSession(index)">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h4 class="text-xl font-satoshi font-bold text-white">{{ session.name }}</h4>
                    <p class="text-white/60">{{ session.date }}</p>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-satoshi font-bold text-green-400">{{ session.bestLap }}</div>
                    <div class="text-sm text-white/60">Best Lap</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-satoshi font-bold text-blue-400">{{ session.laps }}</div>
                    <div class="text-sm text-white/60">Total Laps</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-satoshi font-bold" :class="session.trendColor">{{ session.improvement }}</div>
                    <div class="text-sm text-white/60">vs Previous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Coach - Chat Interface Style - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- AI Insights Feed -->
          <div class="lg:col-span-2">
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8">AI Performance Coach</h2>

            <!-- Chat-style messages -->
            <div class="space-y-6 max-h-[500px] overflow-y-auto">
              <div
                  v-for="(insight, index) in aiInsights"
                  :key="index"
                  class="flex space-x-4"
              >
                <!-- AI Avatar -->
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <!-- Message Bubble -->
                <div class="bg-zinc-900 rounded-2xl rounded-tl-sm p-6 flex-1">
                  <div class="flex items-center space-x-2 mb-2">
                    <h4 class="font-satoshi font-bold text-white">{{ insight.title }}</h4>
                    <div class="w-2 h-2 rounded-full" :class="getInsightColor(insight.type)"></div>
                  </div>
                  <p class="text-white/80 font-general-sans mb-4">{{ insight.description }}</p>
                  <div class="text-sm text-blue-400 font-general-sans mb-3">{{ insight.action }}</div>
                  <div class="text-xs text-white/50">Potential gain: {{ insight.potentialGain }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Panel -->
          <div class="bg-zinc-900 rounded-3xl p-8 h-fit">
            <h3 class="text-2xl font-satoshi font-bold text-white mb-6">Quick Actions</h3>

            <div class="space-y-4">
              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-general-sans font-medium transition-colors duration-200">
                Start New Session
              </button>
              <button class="w-full bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-xl font-general-sans font-medium transition-colors duration-200">
                Compare with Friends
              </button>
              <button class="w-full bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-xl font-general-sans font-medium transition-colors duration-200">
                Export Data
              </button>
            </div>

            <div class="mt-8 p-4 bg-zinc-800 rounded-xl">
              <h4 class="font-satoshi font-bold text-white mb-2">Today's Goal</h4>
              <p class="text-sm text-white/70 font-general-sans">Improve corner exit speed by 3mph in Turn 8</p>
              <div class="w-full bg-zinc-700 rounded-full h-2 mt-3">
                <div class="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div class="text-xs text-white/50 mt-1">75% complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Friends Leaderboard - Podium Style - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-4">Riding Crew Leaderboard</h2>
          <p class="text-xl text-gray-700 font-general-sans max-w-2xl mx-auto">See how you stack up against your friends</p>
        </div>

        <!-- Podium Style Layout -->
        <div class="flex items-end justify-center space-x-8 mb-12">
          <!-- 2nd Place -->
          <div class="text-center">
            <div class="bg-zinc-900 rounded-3xl p-8 mb-4 h-32 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl font-bold">S</div>
                <div class="text-lg font-satoshi font-bold">Sarah</div>
                <div class="text-sm">1:42.1</div>
              </div>
            </div>
            <div class="text-6xl text-gray-400 font-satoshi font-[900]">2</div>
          </div>

          <!-- 1st Place -->
          <div class="text-center">
            <div class="bg-zinc-900 rounded-3xl p-8 mb-4 h-40 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl font-bold">M</div>
                <div class="text-xl font-satoshi font-bold">Marcus</div>
                <div class="text-sm">1:41.2</div>
              </div>
            </div>
            <div class="text-8xl text-yellow-500 font-satoshi font-[900]">1</div>
          </div>

          <!-- 3rd Place -->
          <div class="text-center">
            <div class="bg-zinc-900 rounded-3xl p-8 mb-4 h-24 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">J</div>
                <div class="text-base font-satoshi font-bold">Jake</div>
                <div class="text-xs">1:43.5</div>
              </div>
            </div>
            <div class="text-5xl text-orange-500 font-satoshi font-[900]">3</div>
          </div>
        </div>

        <!-- Challenge Section -->
        <div class="text-center">
          <p class="text-gray-600 font-general-sans mb-6">You're 0.7s behind Sarah - time to step up your game!</p>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-general-sans font-medium transition-colors duration-200">
            Challenge Friends
          </button>
        </div>
      </div>
    </div>

    <!-- Ride Gallery - Masonry Style - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16 text-center">Recent Rides</h2>

        <!-- Masonry Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Large Featured Ride -->
          <div class="md:col-span-2 bg-zinc-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div class="relative z-10">
              <h3 class="text-2xl font-satoshi font-bold mb-2">Canyon Carving Session</h3>
              <p class="text-white/70 mb-4">Mulholland Drive • Oct 15, 2025</p>
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div class="text-2xl font-satoshi font-bold text-blue-400">78mph</div>
                  <div class="text-sm text-white/60">Max Speed</div>
                </div>
                <div>
                  <div class="text-2xl font-satoshi font-bold text-green-400">42°</div>
                  <div class="text-sm text-white/60">Max Lean</div>
                </div>
                <div>
                  <div class="text-2xl font-satoshi font-bold text-purple-400">9.4</div>
                  <div class="text-sm text-white/60">Score</div>
                </div>
              </div>
              <button class="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-general-sans font-medium transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>

          <!-- Smaller Ride Cards -->
          <div
              v-for="(ride, index) in recentRides"
              :key="index"
              class="bg-gray-100 rounded-2xl p-6 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
          >
            <h4 class="text-lg font-satoshi font-bold text-gray-900 mb-2">{{ ride.name }}</h4>
            <p class="text-gray-600 text-sm mb-4">{{ ride.date }}</p>
            <div class="flex justify-between items-center">
              <div>
                <div class="text-xl font-satoshi font-bold text-gray-900">{{ ride.distance }}</div>
                <div class="text-xs text-gray-500">Distance</div>
              </div>
              <div class="w-3 h-3 rounded-full" :class="getPerformanceColor(ride.performance)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Export/Share - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left - Text Content -->
          <div>
            <div class="text-blue-600 font-general-sans text-sm uppercase tracking-wide mb-4">Data Ownership</div>
            <h3 class="text-4xl md:text-5xl font-satoshi font-[900] text-gray-900 mb-6">Your Data, Your Way</h3>
            <p class="text-xl text-gray-700 font-general-sans mb-8">
              Export your riding data in multiple formats. Share with coaches, analyze in your favorite tools, or keep private archives. Your riding data belongs to you.
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-general-sans font-medium transition-colors duration-200">
                Export CSV
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-full font-general-sans font-medium transition-colors duration-200">
                Download GPX
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-full font-general-sans font-medium transition-colors duration-200">
                Share Session
              </button>
            </div>
          </div>

          <!-- Right - Data Visualization Mockup -->
          <div class="bg-zinc-900 rounded-3xl h-[400px] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
            <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
              <div class="text-center">
                <div class="w-24 h-24 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-xl font-satoshi font-bold mb-4">Export Options</h4>
                <p class="text-white/60 font-general-sans text-sm">CSV, GPX, JSON formats available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Analytics - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left - Analytics Visualization -->
          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
            <div class="relative z-10 h-full p-8">
              <h4 class="text-xl font-satoshi font-bold text-white mb-6">Heat Map Analysis</h4>

              <!-- Track Layout Mockup -->
              <div class="bg-zinc-800 rounded-2xl h-64 mb-6 p-4 relative">
                <svg class="w-full h-full" viewBox="0 0 300 200" fill="none">
                  <!-- Track outline -->
                  <path d="M50 100 Q100 50 150 100 Q200 150 250 100" stroke="#4b5563" stroke-width="20" fill="none" opacity="0.5"/>
                  <!-- Heat map sections -->
                  <path d="M50 100 Q75 75 100 100" stroke="#ef4444" stroke-width="8" fill="none"/>
                  <path d="M100 100 Q125 75 150 100" stroke="#f97316" stroke-width="8" fill="none"/>
                  <path d="M150 100 Q175 125 200 100" stroke="#eab308" stroke-width="8" fill="none"/>
                  <path d="M200 100 Q225 75 250 100" stroke="#22c55e" stroke-width="8" fill="none"/>
                </svg>
                <div class="absolute bottom-4 left-4 text-white text-xs">
                  <div class="flex space-x-4">
                    <div class="flex items-center space-x-1">
                      <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>High Risk</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Optimal</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Stats -->
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="text-xl font-satoshi font-bold text-red-400">Turn 3</div>
                  <div class="text-xs text-white/60">Risk Zone</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-satoshi font-bold text-green-400">Turn 7</div>
                  <div class="text-xs text-white/60">Best Performance</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-satoshi font-bold text-blue-400">12mph</div>
                  <div class="text-xs text-white/60">Improvement Potential</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right - Text Content -->
          <div>
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight">Track Heat Maps</h2>
            <p class="text-xl text-white/90 font-general-sans mb-8">
              Visualize your performance across every section of the track. Our heat map analysis identifies where you're losing time and where you're excelling, giving you clear targets for improvement.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans">High-risk zones requiring attention</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans">Moderate improvement opportunities</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans">Optimal performance zones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparative Analysis - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-16">Sector-by-Sector Breakdown</h2>

        <!-- Sector Comparison Table -->
        <div class="bg-zinc-900 rounded-3xl p-8">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div class="font-satoshi font-bold text-white">Sector</div>
            <div class="font-satoshi font-bold text-white text-center">Your Time</div>
            <div class="font-satoshi font-bold text-white text-center">Track Record</div>
            <div class="font-satoshi font-bold text-white text-center">Difference</div>
            <div class="font-satoshi font-bold text-white text-center">Potential</div>
          </div>

          <div
              v-for="(sector, index) in sectorData"
              :key="index"
              class="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 border-b border-zinc-800 last:border-b-0"
          >
            <div class="text-white font-general-sans">{{ sector.name }}</div>
            <div class="text-center text-white font-general-sans">{{ sector.yourTime }}</div>
            <div class="text-center text-white/70 font-general-sans">{{ sector.recordTime }}</div>
            <div class="text-center font-general-sans" :class="sector.diffColor">{{ sector.difference }}</div>
            <div class="text-center text-green-400 font-general-sans">{{ sector.potential }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Weather & Conditions Impact - BLACK -->
    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Weather Impact Chart -->
          <div class="lg:col-span-2">
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8">Weather Impact Analysis</h2>

            <div class="bg-zinc-900 rounded-3xl p-8 h-[400px] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
              <div class="relative z-10 h-full">
                <h4 class="text-xl font-satoshi font-bold text-white mb-6">Performance vs Conditions</h4>

                <!-- Chart Mockup -->
                <div class="bg-zinc-800 rounded-2xl h-64 p-4 flex items-end justify-center space-x-4">
                  <div
                      v-for="(condition, index) in weatherConditions"
                      :key="index"
                      class="flex flex-col items-center space-y-2"
                  >
                    <div
                        class="rounded-t-sm transition-all duration-500"
                        :style="{ height: condition.performance + 'px', width: '40px' }"
                        :class="condition.color"
                    ></div>
                    <div class="text-xs text-white/60 font-general-sans">{{ condition.name }}</div>
                  </div>
                </div>

                <p class="text-white/70 font-general-sans text-sm mt-4">
                  Your best performance occurs in partly cloudy conditions with temperatures between 65-75°F
                </p>
              </div>
            </div>
          </div>

          <!-- Conditions Summary -->
          <div class="space-y-6">
            <h3 class="text-2xl font-satoshi font-bold text-white">Optimal Conditions</h3>

            <div
                v-for="(optimal, index) in optimalConditions"
                :key="index"
                class="bg-zinc-900 rounded-2xl p-6"
            >
              <div class="flex items-center space-x-4 mb-3">
                <div class="w-3 h-3 rounded-full" :class="optimal.color"></div>
                <h4 class="font-satoshi font-bold text-white">{{ optimal.condition }}</h4>
              </div>
              <p class="text-white/70 font-general-sans text-sm mb-2">{{ optimal.description }}</p>
              <div class="text-xs text-blue-400 font-general-sans">{{ optimal.impact }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bike Setup Analysis - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left - Text Content -->
          <div>
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-8 leading-tight">Setup Optimization</h2>
            <p class="text-xl text-gray-700 font-general-sans mb-8">
              Track how different bike setups affect your performance. From suspension settings to tire pressure, see what configurations work best for your riding style and track conditions.
            </p>

            <!-- Setup Categories -->
            <div class="space-y-6">
              <div
                  v-for="(setup, index) in bikeSetups"
                  :key="index"
                  class="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="font-satoshi font-bold text-gray-900">{{ setup.category }}</h4>
                    <p class="text-gray-600 text-sm">{{ setup.current }}</p>
                  </div>
                  <div class="text-right">
                    <div class="font-satoshi font-bold" :class="setup.impactColor">{{ setup.impact }}</div>
                    <div class="text-xs text-gray-500">vs baseline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right - Setup Visualization -->
          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
            <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
              <div class="text-center">
                <div class="w-32 h-32 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg class="w-16 h-16 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <h4 class="text-2xl font-satoshi font-bold mb-4">Bike Configuration</h4>
                <p class="text-white/70 font-general-sans text-sm">Track setup changes and their impact on performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Riding Goals & Progress - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16">Current Goals</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              v-for="(goal, index) in ridingGoals"
              :key="index"
              class="bg-gray-100 rounded-3xl p-8 relative overflow-hidden"
          >
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-satoshi font-bold text-gray-900">{{ goal.title }}</h3>
                <div class="text-2xl font-satoshi font-[900]" :class="goal.progressColor">{{ goal.progress }}%</div>
              </div>

              <p class="text-gray-600 font-general-sans mb-6">{{ goal.description }}</p>

              <!-- Progress Bar -->
              <div class="w-full bg-gray-300 rounded-full h-3 mb-4">
                <div
                    class="h-3 rounded-full transition-all duration-1000"
                    :class="goal.barColor"
                    :style="{ width: goal.progress + '%' }"
                ></div>
              </div>

              <div class="text-sm text-gray-500 font-general-sans">{{ goal.timeframe }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Safety Analytics - WHITE -->
    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left - Safety Metrics -->
          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
            <div class="relative z-10 h-full p-8">
              <h4 class="text-xl font-satoshi font-bold text-white mb-6">Safety Score Breakdown</h4>

              <!-- Safety Metrics -->
              <div class="space-y-6">
                <div
                    v-for="(safety, index) in safetyMetrics"
                    :key="index"
                    class="flex justify-between items-center"
                >
                  <div>
                    <div class="font-satoshi font-bold text-white">{{ safety.metric }}</div>
                    <div class="text-sm text-white/60">{{ safety.description }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-xl font-satoshi font-bold" :class="safety.scoreColor">{{ safety.score }}</div>
                    <div class="w-20 h-2 bg-zinc-800 rounded-full">
                      <div
                          class="h-2 rounded-full"
                          :class="safety.barColor"
                          :style="{ width: (safety.score / 10 * 100) + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-4 bg-zinc-800 rounded-xl">
                <div class="text-sm text-white/80 font-general-sans">
                  <strong>Safety Tip:</strong> Your braking distances are 15% longer than optimal. Practice threshold braking to improve stopping power.
                </div>
              </div>
            </div>
          </div>

          <!-- Right - Text Content -->
          <div>
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-8 leading-tight">Safety Analytics</h2>
            <p class="text-xl text-gray-700 font-general-sans mb-8">
              Comprehensive safety analysis helps you ride faster while staying safe. Track your risk levels, reaction times, and safety margins across different riding scenarios.
            </p>

            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-gray-700 font-general-sans">Collision avoidance systems active</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span class="text-gray-700 font-general-sans">Real-time risk assessment</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700 font-general-sans">Emergency response integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA - Gradient Background -->
    <div class="w-full py-24 bg-gradient-to-br from-blue-600 to-purple-700">
      <div class="container mx-auto px-4 md:px-20 lg:px-32 text-center">
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8">Transform Your Riding</h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto mb-12">
          Join thousands of riders using data to improve their performance, safety, and enjoyment on every ride.
        </p>
        <button class="font-sans px-12 py-6 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-lg font-bold">
          <span class="tracking-[1px] uppercase">Get Started</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const activeMetric = ref(0)
const activeSession = ref(0)

// Data
const performanceMetrics = ref([
  {
    title: 'Average Speed',
    value: '67 mph',
    description: 'Speed analysis across all recent rides',
    avg: '67',
    best: '89',
    improvement: '+12%'
  },
  {
    title: 'Lean Angle',
    value: '42°',
    description: 'Maximum lean angles and cornering performance',
    avg: '38°',
    best: '47°',
    improvement: '+8°'
  },
  {
    title: 'Safety Score',
    value: '9.2/10',
    description: 'AI-calculated safety rating and risk assessment',
    avg: '8.7',
    best: '9.6',
    improvement: '+0.8'
  },
  {
    title: 'Efficiency',
    value: '94%',
    description: 'Route optimization and riding efficiency',
    avg: '89%',
    best: '97%',
    improvement: '+11%'
  }
])

const sessionData = ref([
  {
    name: 'Morning Track Session',
    date: 'Oct 15, 2025',
    laps: 12,
    bestLap: '1:42.8',
    improvement: '-0.8s',
    trendColor: 'text-green-400'
  },
  {
    name: 'Evening Practice',
    date: 'Oct 12, 2025',
    laps: 15,
    bestLap: '1:43.6',
    improvement: '-0.3s',
    trendColor: 'text-green-400'
  },
  {
    name: 'Weekend Track Day',
    date: 'Oct 8, 2025',
    laps: 18,
    bestLap: '1:43.9',
    improvement: '+0.2s',
    trendColor: 'text-red-400'
  }
])

const aiInsights = ref([
  {
    type: 'improvement',
    title: 'Corner Entry Optimization',
    description: 'Your corner entry speeds are 8% below optimal. Practice trail braking in Turn 2 for better lap times.',
    action: 'Practice trail braking techniques',
    potentialGain: '0.8s per lap'
  },
  {
    type: 'achievement',
    title: 'Consistency Milestone',
    description: 'You\'ve achieved 95% lap time consistency - placing you in the top 5% of riders.',
    action: 'Time to focus on raw speed',
    potentialGain: 'Top 1% ranking'
  },
  {
    type: 'warning',
    title: 'Tire Temperature Alert',
    description: 'Front tire temperatures exceeding optimal range in sessions longer than 20 minutes.',
    action: 'Adjust tire pressure and riding style',
    potentialGain: 'Improved safety & performance'
  }
])

const recentRides = ref([
  { name: 'Track Day Practice', date: 'Oct 12', distance: '67.8 mi', performance: 'excellent' },
  { name: 'Weekend Touring', date: 'Oct 10', distance: '234 mi', performance: 'good' },
  { name: 'City Commute', date: 'Oct 9', distance: '12.3 mi', performance: 'average' }
])

const sectorData = ref([
  { name: 'Sector 1', yourTime: '24.2s', recordTime: '23.1s', difference: '+1.1s', diffColor: 'text-red-400', potential: '-0.4s' },
  { name: 'Sector 2', yourTime: '31.8s', recordTime: '30.9s', difference: '+0.9s', diffColor: 'text-red-400', potential: '-0.3s' },
  { name: 'Sector 3', yourTime: '28.1s', recordTime: '28.3s', difference: '-0.2s', diffColor: 'text-green-400', potential: '+0.1s' },
  { name: 'Sector 4', yourTime: '26.7s', recordTime: '25.8s', difference: '+0.9s', diffColor: 'text-red-400', potential: '-0.5s' }
])

const weatherConditions = ref([
  { name: 'Sunny', performance: 85, color: 'bg-yellow-500' },
  { name: 'Cloudy', performance: 95, color: 'bg-blue-500' },
  { name: 'Rainy', performance: 60, color: 'bg-gray-500' },
  { name: 'Windy', performance: 75, color: 'bg-green-500' }
])

const optimalConditions = ref([
  { condition: 'Temperature', description: '65-75°F provides best tire grip', impact: '+2.3% performance boost', color: 'bg-blue-500' },
  { condition: 'Track Surface', description: 'Dry asphalt with minimal wind', impact: '+1.8% lap time improvement', color: 'bg-green-500' },
  { condition: 'Humidity', description: '40-60% humidity range optimal', impact: '+0.9% consistency boost', color: 'bg-purple-500' }
])

const bikeSetups = ref([
  { category: 'Suspension', current: 'Sport+ (Firm)', impact: '-0.3s', impactColor: 'text-green-600' },
  { category: 'Tire Pressure', current: 'F: 32psi, R: 28psi', impact: '+0.1s', impactColor: 'text-red-600' },
  { category: 'Gearing', current: 'Stock ratios', impact: '0.0s', impactColor: 'text-gray-600' },
  { category: 'Brake Pads', current: 'Racing compound', impact: '-0.2s', impactColor: 'text-green-600' }
])

const ridingGoals = ref([
  { title: 'Sub 1:42 Lap Time', description: 'Break into the 1:41s at Laguna Seca', progress: 75, progressColor: 'text-blue-600', barColor: 'bg-blue-500', timeframe: '2 weeks remaining' },
  { title: 'Consistency Target', description: 'Achieve 98% lap time consistency', progress: 92, progressColor: 'text-green-600', barColor: 'bg-green-500', timeframe: '1 month remaining' },
  { title: 'Safety Score', description: 'Maintain 9.5+ safety rating', progress: 88, progressColor: 'text-purple-600', barColor: 'bg-purple-500', timeframe: 'Ongoing' }
])

const safetyMetrics = ref([
  { metric: 'Reaction Time', description: 'Average brake response', score: 8.7, scoreColor: 'text-green-400', barColor: 'bg-green-500' },
  { metric: 'Following Distance', description: 'Safe spacing maintained', score: 9.2, scoreColor: 'text-green-400', barColor: 'bg-green-500' },
  { metric: 'Speed Management', description: 'Appropriate for conditions', score: 8.9, scoreColor: 'text-green-400', barColor: 'bg-green-500' },
  { metric: 'Risk Assessment', description: 'Hazard awareness score', score: 9.4, scoreColor: 'text-green-400', barColor: 'bg-green-500' }
])

// Methods
const setActiveMetric = (index) => {
  activeMetric.value = index
}

const setActiveSession = (index) => {
  activeSession.value = index
}

const getInsightColor = (type) => {
  switch (type) {
    case 'improvement': return 'bg-yellow-500'
    case 'achievement': return 'bg-green-500'
    case 'warning': return 'bg-red-500'
    default: return 'bg-blue-500'
  }
}

const getPerformanceColor = (performance) => {
  switch (performance) {
    case 'excellent': return 'bg-green-500'
    case 'good': return 'bg-blue-500'
    case 'average': return 'bg-yellow-500'
    default: return 'bg-gray-500'
  }
}

// Intersection Observer for animations
let observer = null

const createObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  // Observe sections for animations
  const sections = document.querySelectorAll('[data-animate]')
  sections.forEach(section => {
    if (observer) observer.observe(section)
  })
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

/* Custom scrollbar for chat feed */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
