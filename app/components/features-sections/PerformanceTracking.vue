<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Advanced Performance Tracking
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Get detailed insights into every aspect of your ride with our comprehensive performance monitoring system.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Power Meter Integration</h3>
                <p class="text-gray-600">Connect with ANT+ and Bluetooth power meters for accurate wattage tracking</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Heart Rate Monitoring</h3>
                <p class="text-gray-600">Track your cardiovascular performance with chest strap or wrist-based sensors</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Cadence Analysis</h3>
                <p class="text-gray-600">Optimize your pedaling efficiency with real-time cadence feedback</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 lg:mt-0">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-center mb-6">
              <h3 class="text-xl font-semibold text-gray-900">Live Performance Dashboard</h3>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-indigo-50 rounded-lg">
                <div class="text-2xl font-bold text-indigo-600">285W</div>
                <div class="text-sm text-gray-600">Power</div>
              </div>
              <div class="text-center p-4 bg-green-50 rounded-lg">
                <div class="text-2xl font-bold text-green-600">164 BPM</div>
                <div class="text-sm text-gray-600">Heart Rate</div>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-lg">
                <div class="text-2xl font-bold text-purple-600">92 RPM</div>
                <div class="text-sm text-gray-600">Cadence</div>
              </div>
              <div class="text-center p-4 bg-orange-50 rounded-lg">
                <div class="text-2xl font-bold text-orange-600">32.5 km/h</div>
                <div class="text-sm text-gray-600">Speed</div>
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
