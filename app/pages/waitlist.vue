<template>
  <div class="min-h-screen bg-black">
    <div class="w-full py-24 bg-black pt-32">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div
              class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"
              ></div>
              <div class="relative z-10 h-full p-8">
                <div class="flex items-center justify-center h-full">
                  <div class="text-center text-white">
                    <div
                      class="w-56 h-56 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    >
                      <div class="text-6xl font-satoshi font-bold">RVN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
                <div
                  v-for="(image, index) in productImages"
                  :key="index"
                  class="flex-shrink-0 w-24 h-24 bg-zinc-900 rounded-xl relative overflow-hidden cursor-pointer"
                  :class="{
                    'ring-2 ring-red-500': activeProductImage === index,
                  }"
                  @click="setActiveProductImage(index)"
                >
                  <div class="absolute inset-0" :class="image.gradient"></div>
                  <div
                    class="relative z-10 h-full flex items-center justify-center text-white"
                  >
                    <div class="text-sm font-satoshi font-bold">
                      {{ image.label }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-2xl">
            <h1
              class="text-7xl md:text-8xl font-satoshi font-[900] text-white mb-6 leading-tight"
            >
              RVN
            </h1>
            <h2
              class="text-3xl md:text-4xl font-satoshi font-bold text-red-400 mb-8"
            >
              Professional Motorcycle Data Logger
            </h2>

            <p class="text-xl text-white/90 mb-8 font-general-sans">
              Transform your riding with military-grade analytics. RVN captures
              every detail of your performance with 100Hz precision, providing
              the same level of data analysis used by professional racing teams.
            </p>

            <div class="space-y-4 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans"
                  >100Hz data collection with 9-axis IMU sensors</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans"
                  >±1m GPS accuracy with emergency crash detection</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans"
                  >48-hour battery life with IP68 waterproof rating</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans"
                  >Universal mounting system for all motorcycles</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-white/80 font-general-sans"
                  >AI-powered insights and global rider community</span
                >
              </div>
            </div>

            <div class="bg-zinc-900 rounded-2xl p-6 mb-8">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-4xl font-satoshi font-[900] text-white">
                    ${{ earlyBirdPrice }}
                  </div>
                  <div
                    class="text-red-400 font-general-sans line-through text-lg"
                  >
                    ${{ regularPrice }}
                  </div>
                  <div class="text-white/60 font-general-sans text-sm">
                    Early bird pricing
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-satoshi font-bold text-red-400">
                    {{ spotsLeft }}
                  </div>
                  <div class="text-white/70 font-general-sans text-sm">
                    spots left
                  </div>
                </div>
              </div>
            </div>

            <button
              @click="openWaitlistModal"
              class="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-xl font-general-sans font-bold text-xl transition-colors duration-200 shadow-lg mb-6"
            >
              Join Waitlist
            </button>

            <p class="text-white/60 text-sm font-general-sans text-center">
              Limited first batch • No payment required • $100 savings
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="border-b border-zinc-700 mb-16">
          <div class="flex space-x-8">
            <button
              v-for="(tab, index) in productTabs"
              :key="index"
              @click="setActiveTab(index)"
              class="pb-4 text-lg font-general-sans font-medium transition-all duration-300 relative"
              :class="
                activeTab === index
                  ? 'text-red-400 border-b-2 border-red-400'
                  : 'text-gray-400 hover:text-white'
              "
            >
              {{ tab.name }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in productTabs[activeTab].items"
            :key="index"
            class="bg-zinc-900 rounded-2xl p-8 text-center"
          >
            <div
              class="bg-zinc-800 rounded-2xl h-48 mb-6 flex items-center justify-center"
            >
              <div
                class="w-16 h-16 rounded-full flex items-center justify-center"
                :class="item.iconBg"
              >
                <svg
                  class="w-8 h-8"
                  :class="item.iconColor"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-satoshi font-bold text-white mb-4">
              {{ item.title }}
            </h3>
            <p class="text-white/70 font-general-sans">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="text-center max-w-4xl mx-auto">
          <h2
            class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight"
          >
            THE FUTURE
            <br />
            OF RIDING
            <br />
            DATA
          </h2>
          <p class="text-xl text-white/90 font-general-sans mb-8">
            Professional-grade motorcycle analytics that help you ride faster,
            safer, and smarter. Military-precision sensors capture every detail
            of your ride with 100Hz frequency.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div class="text-center">
              <div class="text-4xl font-satoshi font-[900] text-red-400 mb-2">
                100Hz
              </div>
              <div class="text-white/60 font-general-sans">
                Data Collection Rate
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-satoshi font-[900] text-red-400 mb-2">
                ±1m
              </div>
              <div class="text-white/60 font-general-sans">GPS Precision</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-satoshi font-[900] text-red-400 mb-2">
                48hrs
              </div>
              <div class="text-white/60 font-general-sans">Battery Life</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black relative overflow-hidden">
      <div
        ref="raiSection"
        class="container mx-auto px-4 md:px-20 lg:px-32 relative z-10"
        :class="{ 'animate-fade-in-up': raiVisible }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div
              class="bg-zinc-900 rounded-3xl h-[600px] p-8 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10"
              ></div>

              <div class="relative z-10 border-b border-zinc-700 pb-4 mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-satoshi font-bold text-white">
                      RAi Assistant
                    </h4>
                    <p class="text-sm text-white/60">
                      Your personal riding coach
                    </p>
                  </div>
                  <div class="ml-auto">
                    <div
                      class="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="relative z-10 space-y-4 h-[400px] overflow-hidden">
                <div class="flex justify-end">
                  <div
                    class="bg-red-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs"
                  >
                    <p class="text-sm font-general-sans">
                      How can I improve my cornering technique on the track?
                    </p>
                  </div>
                </div>

                <div class="flex justify-start">
                  <div
                    class="bg-zinc-800 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md"
                  >
                    <p class="text-sm font-general-sans mb-2">
                      Based on your last 15 track sessions, I've analyzed your
                      data:
                    </p>
                    <div class="text-xs text-white/80 space-y-1">
                      <p>• Average lean angle: 42° (optimal: 45-48°)</p>
                      <p>• Entry speed: 15% below optimal</p>
                      <p>• Apex hitting accuracy: 73%</p>
                    </div>
                    <p class="text-sm font-general-sans mt-2">
                      Try carrying 3-5mph more entry speed and focus on hitting
                      the apex consistently.
                    </p>
                  </div>
                </div>

                <div class="flex justify-end">
                  <div
                    class="bg-red-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs"
                  >
                    <p class="text-sm font-general-sans">
                      Show me my progress over the last month
                    </p>
                  </div>
                </div>

                <div class="flex justify-start">
                  <div
                    class="bg-zinc-800 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md"
                  >
                    <p class="text-sm font-general-sans mb-3">
                      Here's your monthly progress:
                    </p>
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
                    <p class="text-sm text-white/60 font-general-sans">
                      Ask RAi anything about your riding...
                    </p>
                  </div>
                  <div
                    class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="text-red-400 font-general-sans text-sm uppercase tracking-wide mb-4"
            >
              Intelligent Assistant
            </div>
            <h2
              class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-6"
            >
              Integrated with RAi
            </h2>
            <p class="text-xl text-white /90 font-general-sans mb-8">
              Your personal riding coach powered by advanced AI. RAi analyzes
              your riding data to provide personalized insights, answer
              questions about your performance, and help you become a better
              rider through data-backed recommendations.
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
                  :class="
                    activeRaiCapability === index
                      ? 'bg-red-600 border-red-600'
                      : 'bg-transparent border-white/30 group-hover:border-red-400'
                  "
                >
                  <div
                    v-if="activeRaiCapability === index"
                    class="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"
                  ></div>
                </div>
                <div>
                  <h3
                    class="text-lg font-satoshi font-bold mb-1 transition-colors duration-300"
                    :class="
                      activeRaiCapability === index
                        ? 'text-red-400'
                        : 'text-white '
                    "
                  >
                    {{ capability.title }}
                  </h3>
                  <p
                    class="font-general-sans text-sm transition-colors duration-300"
                    :class="
                      activeRaiCapability === index
                        ? 'text-white/90'
                        : 'text-white /60'
                    "
                  >
                    {{ capability.description }}
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">
                  24/7
                </div>
                <div class="text-sm text-white /60 font-general-sans">
                  Available
                </div>
              </div>
              <div>
                <div class="text-2xl font-satoshi font-bold text-red-400 mb-2">
                  100M+
                </div>
                <div class="text-sm text-white /60 font-general-sans">
                  Data Points Analyzed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight"
            >
              Advanced Safety
            </h2>
            <p class="text-xl text-white/90 font-general-sans mb-8">
              AI-powered safety monitoring keeps you protected on every ride.
              Our emergency detection system has already triggered 23
              life-saving responses, automatically notifying emergency contacts
              with your precise GPS location.
            </p>
            <p class="text-lg text-white/80 font-general-sans">
              Beyond emergency response, RVN continuously analyzes your riding
              patterns to identify potential risks and provide personalized
              safety recommendations.
            </p>
          </div>

          <div
            class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"
            ></div>
            <div
              class="relative z-10 h-full flex items-center justify-center text-white p-8"
            >
              <div class="text-center">
                <div
                  class="w-32 h-32 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <svg
                    class="w-16 h-16 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h4 class="text-2xl font-satoshi font-bold mb-4">
                  Emergency Response
                </h4>
                <p class="text-white/70 font-general-sans">
                  Automatic crash detection & alerts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"
            ></div>
            <div
              class="relative z-10 h-full flex items-center justify-center text-white p-8"
            >
              <div class="text-center">
                <div
                  class="w-32 h-32 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <svg
                    class="w-16 h-16 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                    />
                  </svg>
                </div>
                <h4 class="text-2xl font-satoshi font-bold mb-4">
                  Global Network
                </h4>
                <p class="text-white/70 font-general-sans">
                  50,000+ riders worldwide
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2
              class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight"
            >
              Riding Community
            </h2>
            <p class="text-xl text-white/90 font-general-sans mb-8">
              Connect with over 50,000 riders across 127 countries. Share
              routes, compare performance, and learn from the best riders in
              your area. Discover new riding spots and challenge friends to beat
              your times.
            </p>
            <p class="text-lg text-white/80 font-general-sans">
              The RVN community isn't just about data – it's about sharing the
              passion for riding and helping each other become better, safer
              riders.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-black">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-16 text-center"
        >
          See RVN in Action
        </h2>

        <div class="relative">
          <div class="flex justify-center items-center space-x-6 mb-8">
            <div
              v-for="(image, index) in getCarouselLayout()"
              :key="index"
              class="bg-zinc-900 rounded-2xl relative overflow-hidden group cursor-pointer transition-all duration-300"
              :class="[
                image.isActive
                  ? 'h-80 w-80 ring-4 ring-red-500 scale-105'
                  : 'h-64 w-64 opacity-60',
                image.isActive ? 'z-10' : 'z-0',
              ]"
              @click="setActiveCarousel(image.originalIndex)"
            >
              <div class="absolute inset-0" :class="image.gradient"></div>
              <div
                class="relative z-10 h-full flex items-center justify-center text-white p-6"
              >
                <div class="text-center">
                  <div
                    class="rounded-full flex items-center justify-center mx-auto mb-4"
                    :class="[
                      image.isActive ? 'w-20 h-20' : 'w-16 h-16',
                      image.iconBg,
                    ]"
                  >
                    <svg
                      :class="[
                        image.isActive ? 'w-10 h-10' : 'w-8 h-8',
                        image.iconColor,
                      ]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4
                    :class="[
                      image.isActive ? 'text-xl' : 'text-lg',
                      'font-satoshi font-bold mb-2',
                    ]"
                  >
                    {{ image.title }}
                  </h4>
                  <p
                    :class="[
                      image.isActive ? 'text-base' : 'text-sm',
                      'text-white/70 font-general-sans',
                    ]"
                  >
                    {{ image.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center space-x-4">
            <button
              @click="previousCarousel"
              class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              @click="nextCarousel"
              class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors duration-200"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16 text-center"
        >
          What Riders Say
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(review, index) in customerReviews"
            :key="index"
            class="bg-gray-100 rounded-2xl p-8"
          >
            <div class="flex items-center space-x-4 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                {{ review.initial }}
              </div>
              <div>
                <h4 class="font-satoshi font-bold text-gray-900">
                  {{ review.name }}
                </h4>
                <p class="text-gray-600 text-sm">{{ review.location }}</p>
              </div>
            </div>

            <div class="flex space-x-1 mb-4">
              <svg
                v-for="n in 5"
                :key="n"
                class="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p class="text-gray-700 font-general-sans italic mb-4">
              "{{ review.quote }}"
            </p>
            <div class="text-sm text-gray-500 font-general-sans">
              {{ review.bike }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-white">
      <div class="container mx-auto px-4 md:px-20 lg:px-32">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16 text-center"
        >
          Frequently Asked Questions
        </h2>

        <div class="max-w-3xl mx-auto space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-200"
            @click="toggleFaq(index)"
          >
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-satoshi font-bold text-gray-900 pr-4">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-gray-500 transition-transform duration-300"
                  :class="{ 'rotate-180': faq.isOpen }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div v-if="faq.isOpen" class="mt-4 pt-4 border-t border-gray-200">
              <p class="text-gray-600 font-general-sans">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-24 bg-gradient-to-br from-red-600 to-orange-600">
      <div class="container mx-auto px-4 md:px-20 lg:px-32 text-center">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8"
        >
          Ready to Transform Your Rides?
        </h2>
        <p
          class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto mb-12"
        >
          Join {{ totalSpots - spotsLeft }} riders who have already reserved
          their spot. Only {{ spotsLeft }} remaining in our first batch.
        </p>
        <button
          @click="openWaitlistModal"
          class="font-sans px-12 py-6 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-flex items-center justify-center space-x-3 group text-lg font-bold"
        >
          <span class="tracking-[1px] uppercase">Join Waitlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 transition-transform duration-200 group-hover:translate-y-[-2px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="showWaitlistModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div class="bg-zinc-900 rounded-3xl p-8 max-w-md w-full mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-satoshi font-bold text-white">
            Join Waitlist
          </h3>
          <button
            @click="closeWaitlistModal"
            class="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div class="bg-zinc-800 rounded-2xl p-4 mb-6">
          <div class="flex justify-between items-center">
            <div>
              <div class="text-3xl font-satoshi font-[900] text-red-400">
                {{ spotsLeft }}
              </div>
              <div class="text-white/70 font-general-sans text-sm">
                Spots Remaining
              </div>
            </div>
            <div class="text-right">
              <div class="text-xl font-satoshi font-bold text-white">
                ${{ earlyBirdPrice }}
              </div>
              <div class="text-red-400 font-general-sans line-through text-sm">
                ${{ regularPrice }}
              </div>
            </div>
          </div>
        </div>

        <form @submit.prevent="submitWaitlist" class="space-y-4">
          <div>
            <input
              v-model="form.email"
              type="email"
              placeholder="Your email address"
              required
              class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-white/60 font-general-sans focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
              class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-white/60 font-general-sans focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <select
              v-model="form.bikeType"
              required
              class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white font-general-sans focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none cursor-pointer"
            >
              <option value="" disabled class="bg-zinc-800">
                Select your bike type
              </option>
              <option value="sport" class="bg-zinc-800">Sport Bike</option>
              <option value="touring" class="bg-zinc-800">Touring</option>
              <option value="adventure" class="bg-zinc-800">Adventure</option>
              <option value="cruiser" class="bg-zinc-800">Cruiser</option>
              <option value="naked" class="bg-zinc-800">Naked/Standard</option>
              <option value="other" class="bg-zinc-800">Other</option>
            </select>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 px-6 rounded-xl font-general-sans font-bold transition-colors duration-200"
          >
            {{ isSubmitting ? "Reserving..." : "Reserve My Spot" }}
          </button>
        </form>

        <p class="text-white/60 text-sm font-general-sans mt-4 text-center">
          No payment required. Cancel anytime.
        </p>
      </div>
    </div>

    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-3xl p-8 max-w-md w-full mx-auto text-center">
        <div
          class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-satoshi font-bold text-gray-900 mb-4">
          You're In!
        </h3>
        <p class="text-gray-700 font-general-sans mb-6">
          Welcome to the RVN waitlist. You're #{{ userPosition }} in line. We'll
          email you with updates and priority access when we launch.
        </p>
        <button
          @click="closeSuccessModal"
          class="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-general-sans font-medium transition-colors duration-200"
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeTab = ref(0);
const activeCarouselIndex = ref(0);
const totalSpots = ref(1000);
const spotsLeft = ref(247);
const earlyBirdPrice = ref(399);
const regularPrice = ref(499);

const showWaitlistModal = ref(false);
const showSuccessModal = ref(false);
const isSubmitting = ref(false);
const userPosition = ref(0);

const form = ref({
  email: "",
  name: "",
  bikeType: "",
});

const activeProductImage = ref(0);

const productImages = ref([
  {
    label: "Front",
    gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20",
  },
  {
    label: "Side",
    gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
  },
  {
    label: "Back",
    gradient: "bg-gradient-to-br from-green-600/20 to-teal-600/20",
  },
  {
    label: "Mount",
    gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
  },
  {
    label: "Size",
    gradient: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20",
  },
]);

const productTabs = ref([
  {
    name: "How It Works",
    items: [
      {
        title: "Mount & Ride",
        description:
          "Secure RVN to your bike in under 5 minutes with our magnetic mounting system. No tools or modifications required.",
        iconBg: "bg-blue-600/30",
        iconColor: "text-blue-400",
      },
      {
        title: "Automatic Tracking",
        description:
          "RVN automatically detects when you start riding and begins collecting data at 100Hz frequency.",
        iconBg: "bg-green-600/30",
        iconColor: "text-green-400",
      },
      {
        title: "Review & Improve",
        description:
          "Access detailed analytics on your phone or computer. Track progress and get AI-powered insights.",
        iconBg: "bg-purple-600/30",
        iconColor: "text-purple-400",
      },
    ],
  },
  {
    name: "Tech Specs",
    items: [
      {
        title: "Precision Sensors",
        description:
          "9-axis IMU with gyroscope, accelerometer, and magnetometer for accurate motion tracking.",
        iconBg: "bg-red-600/30",
        iconColor: "text-red-400",
      },
      {
        title: "GPS Module",
        description:
          "Multi-constellation GNSS receiver with ±1m accuracy and 10Hz positioning updates.",
        iconBg: "bg-blue-600/30",
        iconColor: "text-blue-400",
      },
      {
        title: "Connectivity",
        description:
          "5G cellular, WiFi, and Bluetooth for seamless data synchronization and real-time features.",
        iconBg: "bg-green-600/30",
        iconColor: "text-green-400",
      },
    ],
  },
  {
    name: "What's in the Box",
    items: [
      {
        title: "RVN Device",
        description:
          "Main data logging unit with all sensors, GPS, and connectivity built-in. IP68 waterproof rating.",
        iconBg: "bg-orange-600/30",
        iconColor: "text-orange-400",
      },
      {
        title: "Mounting Kit",
        description:
          "Magnetic mount, adhesive base, and security tether. Compatible with all motorcycle types.",
        iconBg: "bg-purple-600/30",
        iconColor: "text-purple-400",
      },
      {
        title: "Charging Cable",
        description:
          "USB-C charging cable and wall adapter. Full charge provides 48 hours of continuous operation.",
        iconBg: "bg-teal-600/30",
        iconColor: "text-teal-400",
      },
    ],
  },
]);

const performancePoints = ref([
  "Real-time speed tracking",
  "Lean angle precision (±0.1°)",
  "G-force acceleration data",
  "GPS trajectory analysis",
]);

const carouselImages = ref([
  {
    title: "Track Day Setup",
    description: "Professional data collection for circuit riding",
    gradient: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    iconBg: "bg-blue-600/30",
    iconColor: "text-blue-400",
  },
  {
    title: "Street Riding",
    description: "Safety monitoring for daily commutes",
    gradient: "bg-gradient-to-br from-green-600/20 to-teal-600/20",
    iconBg: "bg-green-600/30",
    iconColor: "text-green-400",
  },
  {
    title: "Canyon Carving",
    description: "Perfect for mountain and canyon roads",
    gradient: "bg-gradient-to-br from-red-600/20 to-orange-600/20",
    iconBg: "bg-red-600/30",
    iconColor: "text-red-400",
  },
  {
    title: "Adventure Touring",
    description: "Long-distance tracking and navigation",
    gradient: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    iconBg: "bg-purple-600/30",
    iconColor: "text-purple-400",
  },
]);

const customerReviews = ref([
  {
    name: "Marcus Chen",
    initial: "M",
    location: "Bay Area, CA",
    quote:
      "Been beta testing for 6 months. RVN has completely changed how I approach track days. The data is incredible.",
    bike: "Yamaha R1M",
  },
  {
    name: "Sarah Williams",
    initial: "S",
    location: "Austin, TX",
    quote:
      "Finally, professional-grade data for regular riders. The safety features alone are worth it.",
    bike: "Ducati Panigale V4",
  },
  {
    name: "Jake Morrison",
    initial: "J",
    location: "Denver, CO",
    quote:
      "Easy installation, amazing insights. Dropped 2 seconds off my lap time in just one session.",
    bike: "Honda CBR1000RR",
  },
]);

const faqs = ref([
  {
    question: "When will RVN ship?",
    answer:
      "First batch production begins in Q2 2025. Waitlist members will receive their devices starting in June 2025, with all first batch orders fulfilled by August 2025.",
    isOpen: false,
  },
  {
    question: "Do I pay anything to join the waitlist?",
    answer:
      "No payment is required to join the waitlist. You'll only pay when you decide to purchase after receiving your exclusive early access invitation.",
    isOpen: false,
  },
  {
    question: "How much will I save as a waitlist member?",
    answer:
      "Waitlist members get $100 off the regular retail price, plus exclusive access to limited edition colors and priority customer support.",
    isOpen: false,
  },
  {
    question: "What motorcycles does RVN work with?",
    answer:
      "RVN is universally compatible with all motorcycles. Our mounting system works with sport bikes, touring bikes, cruisers, adventure bikes, and more.",
    isOpen: false,
  },
  {
    question: "How accurate is the data?",
    answer:
      "RVN provides professional-grade accuracy with ±1m GPS precision and sub-degree lean angle measurements. Our 9-axis IMU sensors ensure you get the most precise riding data available.",
    isOpen: false,
  },
]);

const spotsReserved = computed(() => totalSpots.value - spotsLeft.value);

const setActiveTab = (index) => {
  activeTab.value = index;
};

const setActiveProductImage = (index) => {
  activeProductImage.value = index;
};

const getCarouselLayout = () => {
  const items = [];
  const totalItems = carouselImages.value.length;

  for (let i = -1; i <= 1; i++) {
    let index = (activeCarouselIndex.value + i + totalItems) % totalItems;
    items.push({
      ...carouselImages.value[index],
      originalIndex: index,
      isActive: i === 0,
    });
  }

  return items;
};

const setActiveCarousel = (index) => {
  activeCarouselIndex.value = index;
};

const nextCarousel = () => {
  activeCarouselIndex.value =
    (activeCarouselIndex.value + 1) % carouselImages.value.length;
};

const previousCarousel = () => {
  activeCarouselIndex.value =
    activeCarouselIndex.value === 0
      ? carouselImages.value.length - 1
      : activeCarouselIndex.value - 1;
};

const openWaitlistModal = () => {
  showWaitlistModal.value = true;
};

const closeWaitlistModal = () => {
  showWaitlistModal.value = false;
};

const submitWaitlist = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  await new Promise((resolve) => setTimeout(resolve, 1500));

  spotsLeft.value = Math.max(spotsLeft.value - 1, 0);
  userPosition.value = spotsReserved.value + 1;

  showWaitlistModal.value = false;
  showSuccessModal.value = true;
  isSubmitting.value = false;

  form.value = {
    email: "",
    name: "",
    bikeType: "",
  };
};

const closeSuccessModal = () => {
  showSuccessModal.value = false;
};

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

definePageMeta({
  title: "RVN Motorcycle Data Logger - Join Waitlist",
  description:
    "Professional-grade motorcycle analytics. Join the waitlist for exclusive early access.",
});
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 3rem;
}

select option {
  color: white;
}
</style>
