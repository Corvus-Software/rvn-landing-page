<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-6">
              <h3 class="text-xl font-semibold text-gray-900">Connected Ecosystem</h3>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="text-center p-3 bg-blue-50 rounded-lg">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="text-blue-600">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="text-xs font-medium text-gray-700">Strava</div>
              </div>

              <div class="text-center p-3 bg-green-50 rounded-lg">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="text-green-600">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="text-xs font-medium text-gray-700">Garmin</div>
              </div>

              <div class="text-center p-3 bg-purple-50 rounded-lg">
                <div class="w-8 h-8 mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="text-purple-600">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div class="text-xs font-medium text-gray-700">Zwift</div>
              </div>
            </div>

            <div class="text-center">
              <div class="text-sm text-gray-600 mb-4">Sync your data across all platforms</div>
              <div class="flex justify-center space-x-2">
                <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Seamless Connectivity
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Connect with your favorite apps and devices for a unified cycling experience across all platforms.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Multi-Protocol Support</h3>
                <p class="text-gray-600">Compatible with ANT+, Bluetooth LE, and Wi-Fi for maximum device compatibility</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">App Integration</h3>
                <p class="text-gray-600">Automatically sync with Strava, TrainingPeaks, Garmin Connect, and more</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Cloud Backup</h3>
                <p class="text-gray-600">Your ride data is automatically backed up and accessible from anywhere</p>
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
