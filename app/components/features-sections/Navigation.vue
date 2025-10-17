<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="bg-gray-900 rounded-lg p-8 text-white">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Navigation Display</h3>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <div class="text-sm text-gray-300">Turn right in</div>
                  <div class="font-semibold">500m</div>
                </div>
              </div>

              <div class="bg-gray-800 rounded p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-400">Distance to destination</span>
                  <span class="text-white font-semibold">12.4 km</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">ETA</span>
                  <span class="text-white font-semibold">25 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 mb-12 lg:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Smart Navigation & Routing
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Never get lost again with our intelligent navigation system that adapts to your riding preferences.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Offline Maps</h3>
                <p class="text-gray-600">Download maps for offline use, perfect for remote cycling adventures</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Route Planning</h3>
                <p class="text-gray-600">Create custom routes or choose from thousands of popular cycling paths</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Turn-by-Turn Directions</h3>
                <p class="text-gray-600">Clear visual and audio cues keep you on track without distractions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
