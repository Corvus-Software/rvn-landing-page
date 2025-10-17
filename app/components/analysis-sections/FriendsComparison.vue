<template>
  <div class="w-full py-24 bg-black">
    <div
      ref="friendsComparisonSection"
      class="container mx-auto px-4 md:px-20 lg:px-32"
      :class="{ 'animate-fade-in-up': friendsComparisonVisible }"
    >
      <div class="text-center mb-16">
        <h2
          class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-4"
        >
          Ride with Friends
        </h2>
        <p class="text-xl text-white/90 font-general-sans max-w-2xl mx-auto">
          Compare your performance with your riding buddies and discover who's
          setting the pace
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-satoshi font-bold text-white mb-6">
            Your Riding Crew
          </h3>
          <div class="space-y-4">
            <div
              v-for="(friend, index) in friendsData"
              :key="index"
              class="bg-zinc-900 rounded-xl p-6 relative overflow-hidden cursor-pointer transition-all duration-300 hover:bg-zinc-800"
              @click="selectFriend(friend)"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-satoshi font-bold"
                >
                  {{ friend.initial }}
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-satoshi font-bold text-white">
                    {{ friend.name }}
                  </h4>
                  <p class="text-sm text-white/60">
                    {{ friend.location }} • {{ friend.bike }}
                  </p>
                </div>
                <div class="text-right">
                  <div class="text-lg font-satoshi font-bold text-white">
                    {{ friend.bestTime }}
                  </div>
                  <div class="text-xs text-white/60">Laguna Seca</div>
                </div>
              </div>

              <div class="mt-4 flex items-center space-x-2">
                <div class="text-sm text-white/70">vs You:</div>
                <div
                  class="text-sm font-medium"
                  :class="
                    friend.comparison.startsWith('+')
                      ? 'text-red-400'
                      : 'text-green-400'
                  "
                >
                  {{ friend.comparison }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <button
              @click="challengeFriends"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-general-sans font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Challenge Friends</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="bg-zinc-900 rounded-3xl h-[500px] p-8 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
          ></div>
          <div class="relative z-10 h-full">
            <h3 class="text-2xl font-satoshi font-bold text-white mb-6">
              Performance Comparison
            </h3>

            <div class="space-y-6">
              <div
                v-for="(metric, index) in comparisonMetrics"
                :key="index"
                class="space-y-2"
              >
                <div class="flex justify-between text-sm text-white/80">
                  <span>{{ metric.name }}</span>
                  <span>{{ metric.value }}</span>
                </div>
                <div class="h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                    :style="{ width: metric.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="mt-8 bg-zinc-800 rounded-xl p-4">
              <h4 class="text-lg font-satoshi font-bold text-white mb-2">
                Social Insight
              </h4>
              <p class="text-sm text-white/80 font-general-sans">
                {{ socialInsight }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const selectedFriend = ref(null);

const friendsComparisonSection = ref(null);
const friendsComparisonVisible = ref(false);

const friendsData = ref([
  {
    name: "Marcus Chen",
    initial: "M",
    location: "Bay Area",
    bike: "R1M",
    bestTime: "1:41.2",
    comparison: "-1.6s",
  },
  {
    name: "Sarah Williams",
    initial: "S",
    location: "LA",
    bike: "Panigale V4",
    bestTime: "1:42.1",
    comparison: "-0.7s",
  },
  {
    name: "Jake Morrison",
    initial: "J",
    location: "Sacramento",
    bike: "CBR1000RR",
    bestTime: "1:43.5",
    comparison: "+0.7s",
  },
  {
    name: "Emma Rodriguez",
    initial: "E",
    location: "San Diego",
    bike: "ZX-10R",
    bestTime: "1:44.2",
    comparison: "+1.4s",
  },
]);

const comparisonMetrics = ref([
  { name: "Corner Speed", value: "92%", percentage: 92 },
  { name: "Braking Efficiency", value: "88%", percentage: 88 },
  { name: "Throttle Control", value: "96%", percentage: 96 },
  { name: "Line Consistency", value: "90%", percentage: 90 },
]);

const socialInsight = computed(() => {
  if (selectedFriend.value) {
    return `Compared to ${selectedFriend.value.name}, you excel in technical sections but could improve on straights. Focus on top speed development.`;
  }
  return "You're consistently 0.8s faster than your crew on technical sections, but they edge you out on the straights. Time to work on that top speed!";
});

const selectFriend = (friend) => {
  selectedFriend.value = friend;
  emit("friend-selected", friend);
};

const challengeFriends = () => {
  emit("challenge-initiated", friendsData.value);
};

const emit = defineEmits(["friend-selected", "challenge-initiated"]);

let observer = null;

const createObserver = () => {
  const options = { root: null, rootMargin: "0px", threshold: 0.1 };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target === friendsComparisonSection.value
      ) {
        friendsComparisonVisible.value = true;
        if (observer) observer.unobserve(entry.target);
      }
    });
  }, options);
};

onMounted(() => {
  createObserver();
  if (friendsComparisonSection.value)
    observer.observe(friendsComparisonSection.value);
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
</style>
