<template>
  <div class="min-h-screen bg-black">
    <div class="w-full h-screen relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15),transparent_50%)]"></div>

      <div class="relative z-10 h-full flex items-center">
        <div class="container mx-auto px-4 md:px-20 lg:px-32">
          <div class="max-w-4xl">
            <h1 class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-8 leading-tight">
              FEATURES
              <br/>
              THAT FUEL
              <br/>
              PERFORMANCE
            </h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-general-sans">
              Discover the cutting-edge technology that makes RVN the ultimate riding companion for every motorcycle
              enthusiast.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div
          ref="metricsSection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': metricsVisible }"
      >
        <div class="text-left mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4">Performance Metrics</h2>
          <p class="text-xl text-white/90 font-general-sans max-w-2xl">Track every aspect of your ride with precision
            data collection</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
              v-for="(metric, index) in performanceMetrics"
              :key="index"
              class="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
              @click="setActiveMetric(index)"
              :class="{ 'ring-4 ring-red-500': activeMetric === index }"
          >
            <div class="text-center">
              <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <component :is="getMetricIcon(index)" class="w-8 h-8 text-white"/>
              </div>
              <h3 class="text-2xl font-satoshi font-bold text-white mb-4">{{ metric.title }}</h3>
              <div class="text-4xl font-satoshi font-[900] text-red-400 mb-4">{{ metric.value }}</div>
              <p class="text-white/70 font-general-sans">{{ metric.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div
          ref="dataSection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': dataVisible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8">Data Insights</h2>
            <p class="text-xl text-white/90 font-general-sans mb-12 max-w-xl">
              Powered by our cutting edge Throttle AI, RVN transforms raw ride data into actionable insights. Analyze
              your speed, lean angles, and GPS tracking with unparalleled accuracy to elevate your riding skills.
            </p>

            <div class="bg-zinc-900 rounded-3xl h-[400px] p-8 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-red-600/10"></div>
              <div class="relative z-10 h-full flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-3xl font-satoshi font-bold mb-4">Live Data Visualization</div>
                  <div class="text-white/70 font-general-sans mb-8">Speed, Lean Angle, GPS Tracking</div>
                  <div class="grid grid-cols-3 gap-6">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-green-400">85</div>
                      <div class="text-sm text-white/60">MPH</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-red-400">42°</div>
                      <div class="text-sm text-white/60">Lean</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-purple-400">98%</div>
                      <div class="text-sm text-white/60">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div
                v-for="(dataPoint, index) in dataPoints"
                :key="index"
                class="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div class="flex items-center space-x-4">
                <div class="w-3 h-3 rounded-full" :class="dataPoint.color"></div>
                <div>
                  <h4 class="text-lg font-satoshi font-bold text-white">{{ dataPoint.label }}</h4>
                  <p class="text-white/70 font-general-sans text-sm">{{ dataPoint.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div
          ref="contentBlock1"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': contentBlock1Visible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
            <div class="relative z-10 h-full flex items-center justify-center text-white">
              <div class="text-center">
                <div class="w-24 h-24 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z"/>
                  </svg>
                </div>
                <p class="text-white/60 font-general-sans">Interactive Demo Video</p>
              </div>
            </div>
          </div>

          <div>
            <div class="text-red-400 font-general-sans text-sm uppercase tracking-wide mb-4">Advanced Technology</div>
            <h3 class="text-4xl md:text-5xl font-satoshi font-[900] text-white mb-6">Precision in Every Turn</h3>
            <p class="text-xl text-white/80 font-general-sans mb-8">
              Our state-of-the-art 9 axis IMU sensors capture every nuance of your ride with military-grade precision.
              From the subtlest lean angle adjustments to high-speed cornering dynamics, RVN records it all at 10Hz for
              unparalleled accuracy.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">±0.1°</div>
                <div class="text-sm text-white/60 font-general-sans">Lean Angle Accuracy</div>
              </div>
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">9-Axis</div>
                <div class="text-sm text-white/60 font-general-sans">Sensor Fusion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <svg width="1400" height="800" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="h-full w-full absolute z-0">
          <path d="M200 150 Q400 100 600 150 Q800 200 1000 150 Q1200 100 1400 150" stroke="#dc2626" stroke-opacity="0.3"
                stroke-width="3" fill="none"/>
          <path d="M150 250 Q350 200 550 250 Q750 300 950 250 Q1150 200 1350 250" stroke="#ef4444" stroke-opacity="0.25"
                stroke-width="3" fill="none"/>
          <path d="M100 350 Q300 300 500 350 Q700 400 900 350 Q1100 300 1300 350" stroke="#f87171" stroke-opacity="0.2"
                stroke-width="3" fill="none"/>
        </svg>
      </div>

      <div
          ref="featuresGridSection"
          class="container mx-auto px-4 md:px-20 lg:px-32 relative z-10"
          :class="{ 'animate-fade-in-up': featuresGridVisible }"
      >
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-4">Throttle Ai</h2>
          <p class="text-xl text-gray-700 font-general-sans max-w-2xl mx-auto">Advanced analytic features designed to
            enhance your riding experience</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <div
                v-for="(feature, index) in smartFeatures"
                :key="index"
                class="p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                :class="activeFeature === index ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50 border-2 border-transparent hover:border-red-100'"
                @click="setActiveFeature(index)"
            >
              <div class="flex items-start space-x-4">
                <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="activeFeature === index ? 'bg-red-600' : 'bg-gray-300'"
                >
                  <component :is="getFeatureIcon(index)" class="w-6 h-6 text-white"/>
                </div>
                <div>
                  <h3 class="text-xl font-satoshi font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600 font-general-sans">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-zinc-900 rounded-3xl h-[500px] flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-purple-600/20"></div>
            <div class="relative z-10 text-center text-white p-8">
              <h4 class="text-2xl font-satoshi font-bold mb-4">{{ smartFeatures[activeFeature].title }}</h4>
              <p class="text-white/80 font-general-sans mb-6">{{ smartFeatures[activeFeature].details }}</p>
              <div class="w-20 h-20 bg-red-600/30 rounded-full flex items-center justify-center mx-auto">
                <component :is="getFeatureIcon(activeFeature)" class="w-10 h-10 text-red-400"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white">
      <div
          ref="contentBlock2"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': contentBlock2Visible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="text-red-600 font-general-sans text-sm uppercase tracking-wide mb-4">Cloud Connectivity</div>
            <h3 class="text-4xl md:text-5xl font-satoshi font-[900] text-gray-900 mb-6">Seamless Data Sync</h3>
            <p class="text-xl text-gray-700 font-general-sans mb-8">
              Automatic cloud synchronization ensures your ride data is always backed up and accessible across all your
              devices. Pair your mobile phone once, and never have to worry about backing up your data.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-600 mb-2">256-bit</div>
                <div class="text-sm text-gray-500 font-general-sans">Encryption</div>
              </div>
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-600 mb-2">Real-time</div>
                <div class="text-sm text-gray-500 font-general-sans">Sync</div>
              </div>
            </div>
          </div>

          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div class="relative z-10 h-full flex items-center justify-center text-white">
              <div class="text-center">
                <div class="w-24 h-24 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <p class="text-white/60 font-general-sans">Dashboard Preview</p>
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
              Your personal riding coach powered by advanced AI. RAi analyzes your riding data to provide personalized insights, answer questions about your performance, and help you become a better rider through data-backed recommendations.
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

    <div class="w-full py-24 bg-white">
      <div
          ref="safetySection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': safetyVisible }"
      >
        <div class="text-left mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-4">Safety First</h2>
          <p class="text-xl text-gray-700 font-general-sans max-w-2xl">Advanced safety features that keep you protected
            on every ride</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div class="space-y-8">
            <div
                v-for="(safety, index) in safetyFeatures"
                :key="index"
                class="cursor-pointer transition-all duration-300"
                @click="setActiveSafety(index)"
            >
              <div class="flex items-start space-x-4">
                <div
                    class="w-6 h-6 rounded-full border-4 transition-all duration-500 flex-shrink-0 mt-1"
                    :class="activeSafety === index
                    ? 'bg-red-600 border-red-600'
                    : 'bg-white border-gray-300 hover:border-red-400'"
                >
                  <div
                      v-if="activeSafety === index"
                      class="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"
                  ></div>
                </div>
                <div>
                  <h3
                      class="text-xl font-satoshi font-bold mb-2 transition-colors duration-300"
                      :class="activeSafety === index ? 'text-red-600' : 'text-gray-800'"
                  >
                    {{ safety.title }}
                  </h3>
                  <p
                      class="font-general-sans transition-colors duration-300"
                      :class="activeSafety === index ? 'text-gray-700' : 'text-gray-500'"
                  >
                    {{ safety.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2">
            <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
              <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
                <div class="text-center">
                  <div class="w-24 h-24 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                            clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="text-3xl font-satoshi font-bold mb-4">{{ safetyFeatures[activeSafety].title }}</h4>
                  <p class="text-white/80 font-general-sans text-lg mb-8">{{ safetyFeatures[activeSafety].details }}</p>
                  <div class="text-sm text-white/60 font-general-sans">
                    Safety Feature {{ activeSafety + 1 }} of {{ safetyFeatures.length }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white">
      <div
          ref="contentBlock3"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': contentBlock3Visible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
            <div class="relative z-10 h-full flex items-center justify-center text-white">
              <div class="text-center">
                <div class="w-24 h-24 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
                <p class="text-white/60 font-general-sans">Installation Guide</p>
              </div>
            </div>
          </div>

          <div>
            <div class="text-red-600 font-general-sans text-sm uppercase tracking-wide mb-4">Easy Installation</div>
            <h3 class="text-4xl md:text-5xl font-satoshi font-[900] text-gray-900 mb-6">Ready in Minutes</h3>
            <p class="text-xl text-gray-700 font-general-sans mb-8">
              Simple mounting system works with any motorcycle. No complex wiring or permanent modifications needed.
              Just mount, pair with your phone, expose the antenna on your bike and ride.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-600 mb-2">< 5min</div>
                <div class="text-sm text-gray-500 font-general-sans">Setup Time</div>
              </div>
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-600 mb-2">Universal</div>
                <div class="text-sm text-gray-500 font-general-sans">Compatibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-32 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10"></div>
      </div>

      <div class="container mx-auto px-4 md:px-20 lg:px-32 text-center relative z-10">
        <h2 class="text-6xl md:text-7xl font-satoshi font-[900] text-white mb-8">JOIN THE COMMUNITY</h2>
        <p class="text-2xl text-white/80 font-general-sans max-w-3xl mx-auto mb-12">
          Connect with riders worldwide, share your best lines, and discover new routes
        </p>
        <div class="flex justify-center space-x-8">
          <div class="text-center">
            <div class="text-3xl font-satoshi font-bold text-red-400">50K+</div>
            <div class="text-white/60">Active Riders</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-satoshi font-bold text-red-400">2M+</div>
            <div class="text-white/60">Miles Logged</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-satoshi font-bold text-red-400">100K+</div>
            <div class="text-white/60">Apexes hit</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div
          ref="hardwareSection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': hardwareVisible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white">Built to Last</h2>
            <p class="text-xl text-white/90 font-general-sans">
              Military-grade hardware designed to withstand the toughest riding conditions while delivering precise data
              collection.
            </p>

            <div class="grid grid-cols-2 gap-6">
              <div
                  v-for="(spec, index) in hardwareSpecs"
                  :key="index"
                  class="bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div class="text-3xl font-satoshi font-[900] text-red-400 mb-2">{{ spec.value }}</div>
                <div class="text-sm font-general-sans text-white/70 uppercase tracking-wide">{{ spec.label }}</div>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
                class="bg-zinc-900 rounded-3xl h-[600px] shadow-2xl relative overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10"></div>
              <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
                <div class="text-center">
                  <div
                      class="w-32 h-32 bg-gradient-to-br from-red-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-satoshi font-bold mb-4">RVN Device</h4>
                  <p class="text-white/70 font-general-sans">Compact. Powerful. Reliable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div
          ref="techSpecsSection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': techSpecsVisible }"
      >
        <div class="text-left mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4">Technical Specifications</h2>
          <p class="text-xl text-white/90 font-general-sans max-w-2xl">Engineered by riders for riders who demand the
            best</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="(tech, index) in technicalSpecs"
              :key="index"
              class="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-colors duration-300"
          >
            <div class="text-center">
              <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 class="text-lg font-satoshi font-bold text-white mb-2">{{ tech.category }}</h4>
              <div class="text-2xl font-satoshi font-[900] text-red-400 mb-2">{{ tech.value }}</div>
              <p class="text-white/60 font-general-sans text-sm">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white">
      <div
          ref="faqSection"
          class="container mx-auto px-4 md:px-20 lg:px-32"
          :class="{ 'animate-fade-in-up': faqVisible }"
      >
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-700 font-general-sans max-w-2xl mx-auto">Everything you need to know about RVN</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="bg-gray-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                @click="toggleFaq(index)"
            >
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-satoshi font-bold text-gray-900 pr-4">{{ faq.question }}</h3>
                <div class="flex-shrink-0">
                  <svg
                      class="w-6 h-6 text-gray-500 transition-transform duration-300"
                      :class="{ 'rotate-180': faq.isOpen }"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div
                  v-if="faq.isOpen"
                  class="mt-4 pt-4 border-t border-gray-200"
              >
                <p class="text-gray-600 font-general-sans">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-gradient-to-br from-red-600 to-purple-700">
      <div
          ref="ctaSection"
          class="container mx-auto px-4 md:px-20 lg:px-32 text-center"
          :class="{ 'animate-fade-in-up': ctaVisible }"
      >
        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8">Ready to Ride Smarter?</h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto mb-12">
          Join thousands of riders who have transformed their experience with RVN's advanced technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
              class="font-sans px-12 py-6 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-lg font-bold">
            <span class="tracking-[1px] uppercase">Get RVN Now</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20"
                 fill="currentColor">
              <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <button
              class="font-sans px-12 py-6 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-lg font-bold">
            <span class="tracking-[1px] uppercase">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const activeMetric = ref(0)
const activeFeature = ref(0)
const activeSafety = ref(0)

const metricsSection = ref(null)
const featuresGridSection = ref(null)
const dataSection = ref(null)
const safetySection = ref(null)
const hardwareSection = ref(null)
const ctaSection = ref(null)
const contentBlock1 = ref(null)
const contentBlock2 = ref(null)
const contentBlock3 = ref(null)
const techSpecsSection = ref(null)
const compatibilitySection = ref(null)
const faqSection = ref(null)
const pricingSection = ref(null)

const metricsVisible = ref(false)
const featuresGridVisible = ref(false)
const dataVisible = ref(false)
const safetyVisible = ref(false)
const hardwareVisible = ref(false)
const ctaVisible = ref(false)
const contentBlock1Visible = ref(false)
const contentBlock2Visible = ref(false)
const contentBlock3Visible = ref(false)
const techSpecsVisible = ref(false)
const compatibilityVisible = ref(false)
const faqVisible = ref(false)
const pricingVisible = ref(false)

const performanceMetrics = ref([
  {
    title: 'GPS Precision',
    value: '±1m',
    description: 'Military-grade GPS accuracy for precise location tracking'
  },
  {
    title: 'Data Rate',
    value: '10Hz',
    description: 'Ultra-high frequency data collection for smooth analytics'
  },
  {
    title: 'Battery Life',
    value: '12 days',
    description: 'Extended battery life for those long sessions '
  }
])

const smartFeatures = ref([
  {
    title: 'AI-Powered Analytics',
    description: 'With our massive suite of Machine Learning models, Throttle Ai provides unparalleled insights into your riding performance.',
    details: 'Our advanced AI engine learns from millions of rides to provide personalized insights and recommendations for improving your technique and safety on the road.'
  },
  {
    title: 'After Action Reports',
    description: 'Instant feedback to improve your riding technique based on current, and past rides',
    details: 'Get immediate audio coaching through your helmet communication system, helping you perfect cornering, braking, and acceleration techniques in real-time.'
  },
  {
    title: 'Automatic Lap Detection',
    description: 'No need to manually set up start or stop points. The world is your track and with the help of Throttle Ai, every lap is recorded automatically.',
    details: 'Get immediate audio coaching through your helmet communication system, helping you perfect cornering, braking, and acceleration techniques in real-time.'
  },
  {
    title: 'Friends and Community',
    description: 'Join Riding Parties with your friends and compare your performance, session over session, lap over lap.',
    details: 'Share your best rides, compare performance with friends, and discover new routes recommended by fellow riders in the global RVN community.'
  }
])

const safetyFeatures = ref([
  {
    title: 'Emergency Detection',
    description: 'Automatic crash detection with emergency response',
    details: 'Advanced sensors detect sudden impacts and automatically alert emergency contacts with your precise location, potentially saving crucial minutes in emergency situations.'
  },
  {
    title: 'Increased Lean Alert',
    description: "Detect if you're leaning too far in corners",
    details: 'Integrated radar sensors monitor your blind spots and provide haptic feedback through your gear when vehicles enter dangerous zones around your motorcycle.'
  }
])

const dataPoints = ref([
  {label: 'Speed Tracking', description: 'Continuous velocity monitoring', color: 'bg-green-500'},
  {label: 'Lean Angle', description: 'Cornering performance metrics', color: 'bg-red-500'},
  {label: 'Acceleration', description: 'G-force and performance data', color: 'bg-purple-500'},
  {label: 'Lap Analysis', description: 'Corner, Segment, and Lap Analysis', color: 'bg-yellow-500'}
])

const hardwareSpecs = ref([
  {value: 'IP68', label: 'Water Resistance'},
  {value: '64GB', label: 'Storage'}
])

const technicalSpecs = ref([
  {category: 'Processor', value: 'ARM Cortex', description: 'Quad-core 1.8GHz'},
  {category: 'Sensors', value: '9-Axis IMU', description: 'Gyro + Accel + Mag'},
  {category: 'GPS', value: 'Multi-GNSS', description: 'GPS + GLONASS + Galileo'},
  {category: 'Memory', value: '2GB RAM', description: '64GB Flash Storage'}
])

const compatibilityTypes = ref([
  {
    type: 'Sport Bikes',
    description: 'Perfect for track days and canyon carving',
    examples: 'R1, CBR1000RR, GSX-R1000'
  },
  {
    type: 'Adventure',
    description: 'Built for long-distance touring and off-road',
    examples: 'GS1250, Africa Twin, KTM Adventure'
  },
  {
    type: 'Cruisers',
    description: 'Ideal for highway cruising and touring',
    examples: 'Harley Davidson, Indian, Honda Rebel'
  }
])

const faqs = ref([
  {
    question: 'How long does the battery last?',
    answer: 'The RVN device has a 12-day battery life under normal usage conditions. This includes continuous data logging, GPS tracking, and wireless connectivity. The device also features intelligent power management to extend battery life during longer rides.',
    isOpen: false
  },
  {
    question: 'Is it waterproof?',
    answer: 'Yes, RVN has an IP68 rating, making it completely waterproof and dustproof. It can withstand heavy rain, washing, and even brief submersion. The device is designed to handle all weather conditions you might encounter while riding.',
    isOpen: false
  },
  {
    question: 'How do I install it on my motorcycle?',
    answer: 'Installation takes less than 5 minutes with our mounting system. Simply attach the base mount to your motorcycle using the included adhesive pad or bolts, then snap the RVN device into place. No wiring or permanent modifications required.',
    isOpen: false
  },
  {
    question: 'What motorcycles is it compatible with?',
    answer: 'RVN is universally compatible with all motorcycle types - sport bikes, cruisers, adventure bikes, touring bikes, and more. The compact design and flexible mounting options work with any motorcycle make and model.',
    isOpen: false
  },
  {
    question: 'Do I need a subscription?',
    answer: 'No subscription required! RVN is a one-time purchase that includes the hardware, mobile apps, cloud storage, and all future software updates. Your data belongs to you, with no ongoing fees.',
    isOpen: false
  },
  {
    question: 'How accurate is the data?',
    answer: 'RVN provides professional-grade accuracy with ±1m GPS precision and sub-degree lean angle measurements. Our 9-axis IMU sensors and 100Hz data collection rate ensure you get the most precise riding data available.',
    isOpen: false
  }
])

const setActiveMetric = (index) => {
  activeMetric.value = index
}

const setActiveFeature = (index) => {
  activeFeature.value = index
}

const setActiveSafety = (index) => {
  activeSafety.value = index
}

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const getMetricIcon = (index) => {
  return 'svg'
}

const getFeatureIcon = (index) => {
  return 'svg'
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
      if (entry.isIntersecting) {
        if (entry.target === metricsSection.value) metricsVisible.value = true
        else if (entry.target === featuresGridSection.value) featuresGridVisible.value = true
        else if (entry.target === dataSection.value) dataVisible.value = true
        else if (entry.target === safetySection.value) safetyVisible.value = true
        else if (entry.target === hardwareSection.value) hardwareVisible.value = true
        else if (entry.target === ctaSection.value) ctaVisible.value = true
        else if (entry.target === contentBlock1.value) contentBlock1Visible.value = true
        else if (entry.target === contentBlock2.value) contentBlock2Visible.value = true
        else if (entry.target === contentBlock3.value) contentBlock3Visible.value = true
        else if (entry.target === techSpecsSection.value) techSpecsVisible.value = true
        else if (entry.target === compatibilitySection.value) compatibilityVisible.value = true
        else if (entry.target === faqSection.value) faqVisible.value = true
        else if (entry.target === pricingSection.value) pricingVisible.value = true
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()

  const sections = [
    metricsSection,
    featuresGridSection,
    dataSection,
    safetySection,
    hardwareSection,
    ctaSection,
    contentBlock1,
    contentBlock2,
    contentBlock3,
    techSpecsSection,
    compatibilitySection,
    faqSection,
    pricingSection
  ]

  sections.forEach(section => {
    if (section.value) observer.observe(section.value)
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

[ref]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
