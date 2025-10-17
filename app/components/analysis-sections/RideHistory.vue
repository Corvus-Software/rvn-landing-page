<template>
  <div class="w-full py-24 bg-gray-900">
    <div
      ref="rideHistorySection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': rideHistoryVisible }"
    >
      <div class="text-center mb-16">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4"
        >
          Ride History
        </h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto">
          Analyze your past rides and track your progress
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto">
          <div
            v-for="(ride, index) in rideHistory"
            :key="index"
            class="bg-zinc-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-zinc-700"
            :class="{
              'bg-zinc-700 ring-2 ring-blue-500': activeRide === index,
            }"
            @click="setActiveRide(index)"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-satoshi font-bold text-white">
                {{ ride.name }}
              </h3>
              <div class="text-sm text-white/60 font-general-sans">
                {{ ride.date }}
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-white/60 font-general-sans">Distance</div>
                <div class="font-satoshi font-bold text-white">
                  {{ ride.distance }}
                </div>
              </div>
              <div>
                <div class="text-white/60 font-general-sans">Duration</div>
                <div class="font-satoshi font-bold text-white">
                  {{ ride.duration }}
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center space-x-2">
              <div
                class="w-2 h-2 rounded-full"
                :class="getPerformanceColor(ride.performance)"
              ></div>
              <span class="text-sm text-white/60 font-general-sans capitalize"
                >{{ ride.performance }} Performance</span
              >
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div
            class="bg-zinc-800 rounded-3xl h-[600px] p-8 relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10"
            ></div>
            <div class="relative z-10 h-full">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-2xl font-satoshi font-bold text-white">
                  {{ currentRide.name }}
                </h3>
                <div class="text-white/60 text-sm font-general-sans">
                  {{ currentRide.date }}
                </div>
              </div>

              <div
                class="bg-zinc-700 rounded-2xl h-64 mb-6 flex items-center justify-center"
              >
                <div class="text-center text-white">
                  <svg
                    class="w-16 h-16 mx-auto mb-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="text-lg font-satoshi font-bold">Route Map</div>
                  <div class="text-sm text-white/70">
                    {{ currentRide.route }}
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="text-2xl font-satoshi font-[900] text-green-400">
                    {{ currentRide.maxSpeed }}
                  </div>
                  <div class="text-sm text-white/60">Max Speed</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-satoshi font-[900] text-blue-400">
                    {{ currentRide.avgLean }}
                  </div>
                  <div class="text-sm text-white/60">Avg Lean</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-satoshi font-[900] text-purple-400">
                    {{ currentRide.score }}
                  </div>
                  <div class="text-sm text-white/60">Overall Score</div>
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
import { ref, computed, onMounted, onUnmounted } from "vue";

const activeRide = ref(0);

const rideHistorySection = ref(null);
const rideHistoryVisible = ref(false);

const rideHistory = ref([
  {
    name: "Morning Canyon Run",
    date: "Oct 15, 2025",
    distance: "45.2 mi",
    duration: "1h 23m",
    performance: "excellent",
    route: "Mulholland Drive to PCH",
    maxSpeed: "78 mph",
    avgLean: "34°",
    score: "9.4",
  },
  {
    name: "Track Day Session",
    date: "Oct 12, 2025",
    distance: "67.8 mi",
    duration: "2h 15m",
    performance: "good",
    route: "Laguna Seca Raceway",
    maxSpeed: "132 mph",
    avgLean: "52°",
    score: "8.9",
  },
  {
    name: "Weekend Touring",
    date: "Oct 10, 2025",
    distance: "234.5 mi",
    duration: "4h 42m",
    performance: "good",
    route: "Highway 1 Coastal Route",
    maxSpeed: "85 mph",
    avgLean: "28°",
    score: "8.6",
  },
  {
    name: "City Commute",
    date: "Oct 9, 2025",
    distance: "12.3 mi",
    duration: "28m",
    performance: "average",
    route: "Downtown to Suburbs",
    maxSpeed: "45 mph",
    avgLean: "18°",
    score: "7.8",
  },
]);

const currentRide = computed(() => rideHistory.value[activeRide.value]);

const setActiveRide = (index) => {
  activeRide.value = index;
  emit("ride-selected", rideHistory.value[index]);
};

const getPerformanceColor = (performance) => {
  switch (performance) {
    case "excellent":
      return "bg-green-500";
    case "good":
      return "bg-blue-500";
    case "average":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const emit = defineEmits(["ride-selected"]);

let observer = null;

const createObserver = () => {
  const options = { root: null, rootMargin: "0px", threshold: 0.1 };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === rideHistorySection.value) {
        rideHistoryVisible.value = true;
        if (observer) observer.unobserve(entry.target);
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (rideHistorySection.value) observer.observe(rideHistorySection.value);
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
