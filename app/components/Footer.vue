<!-- Features Banner and Footer Section -->
<template>
  <div>
    <!-- Footer Section -->
    <footer class="w-full bg-gray-900 text-white">
      <div
          ref="footerSection"
          class="container mx-auto px-4 md:px-20 lg:px-32 py-16"
          :class="{ 'animate-fade-in-up': footerVisible }"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Social Links -->
          <div class="space-y-6">
            <h3 class="text-xl font-satoshi font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <button class="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
                </svg>
              </button>
              <button class="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </button>
              <button class="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.97-.527-2.297-1.155l-.624 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Back to Top -->
          <div class="space-y-6">
            <h3 class="text-xl font-satoshi font-bold mb-4">Navigation</h3>
            <button
                @click="scrollToTop"
                class="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <svg class="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="font-general-sans">Back to Top</span>
            </button>
          </div>

          <!-- Accepted Payments -->
          <div class="space-y-6">
            <h3 class="text-xl font-satoshi font-bold mb-4">We Accept</h3>
            <div class="flex flex-wrap gap-3">
              <div class="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span class="text-xs font-bold text-blue-600">VISA</span>
              </div>
              <div class="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span class="text-xs font-bold text-red-600">MC</span>
              </div>
              <div class="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span class="text-xs font-bold text-blue-500">AMEX</span>
              </div>
              <div class="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span class="text-xs font-bold text-yellow-500">PP</span>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="space-y-6">
            <h3 class="text-xl font-satoshi font-bold mb-4">Contact</h3>
            <div class="text-gray-300 font-general-sans space-y-2">
              <p>RVN Technologies Inc.</p>
              <p>1234 Innovation Drive</p>
              <p>San Francisco, CA 94102</p>
              <p>United States</p>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <!-- Logo and Copyright -->
          <div class="flex items-center space-x-3">
            <p class="text-gray-400 font-general-sans">
              © 2025 RVN Technologies Inc. All rights reserved.
            </p>
          </div>

          <!-- Additional Links -->
          <div class="flex space-x-6 text-sm text-gray-400 font-general-sans">
            <a href="#" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors duration-200">Support</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const featuresSection = ref(null)
const footerSection = ref(null)
const featuresVisible = ref(false)
const footerVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Intersection Observer for lazy loading
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
        if (entry.target === featuresSection.value) {
          featuresVisible.value = true
        } else if (entry.target === footerSection.value) {
          footerVisible.value = true
        }
      }
    })
  }, options)
}

onMounted(() => {
  createObserver()
  if (featuresSection.value) observer.observe(featuresSection.value)
  if (footerSection.value) observer.observe(footerSection.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
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

[ref="featuresSection"]:not(.animate-fade-in-up),
[ref="footerSection"]:not(.animate-fade-in-up) {
  opacity: 0;
  transform: translateY(30px);
}
</style>
