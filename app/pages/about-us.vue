<template>
    <div class="min-h-screen bg-black">
        <div class="w-full h-screen relative overflow-hidden">
            <div
                class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style="background-image: url('/images/image5.jpg')"
                >
                </div>
            <div class="relative z-10 h-full flex items-center">
                <div class="container mx-auto px-4 md:px-20 lg:px-32">
                    <div class="max-w-4xl">
                        <h1 class="text-7xl md:text-8xl lg:text-9xl font-satoshi font-[900] text-white mb-8 leading-tight">
                            BUILT BY
                            <br />
                            RIDERS FOR
                            <br />
                            RIDERS
                        </h1>
                        <p class="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-general-sans">
                            From weekend warriors to professional racers, we understand what it takes to push boundaries while staying safe.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-black">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-8 leading-tight">Our Mission</h2>
                        <p class="text-xl text-white/90 font-general-sans mb-8">
                            Every rider deserves access to professional-grade data that was once exclusive to MotoGP teams. We're democratizing motorcycle performance analytics to help every rider improve their skills, enhance their safety, and maximize their enjoyment on two wheels.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span class="text-white/80 font-general-sans">Make advanced analytics accessible to all riders</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span class="text-white/80 font-general-sans">Improve rider safety through data-driven insights</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span class="text-white/80 font-general-sans">Build the largest riding community in the world</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
                        <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
                            <div class="text-center">
                                <div class="w-32 h-32 bg-red-600/30 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg class="w-16 h-16 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <h4 class="text-2xl font-satoshi font-bold mb-4">Rider-First Design</h4>
                                <p class="text-white/70 font-general-sans">Every feature built from real rider feedback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-black">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-white mb-16">How It Started</h2>

                <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-700"></div>

                    <div class="space-y-12">
                        <div
                                v-for="(story, index) in foundingStory"
                                :key="index"
                                class="relative flex items-start"
                        >
                            <div class="absolute left-6 w-4 h-4 bg-red-600 rounded-full border-4 border-black z-10"></div>

                            <div class="ml-20 bg-zinc-900 rounded-2xl p-8 w-full">
                                <div class="flex items-center space-x-4 mb-4">
                                    <h3 class="text-2xl font-satoshi font-bold text-white">{{ story.year }}</h3>
                                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <h4 class="text-xl font-satoshi font-bold text-red-400">{{ story.milestone }}</h4>
                                </div>
                                <p class="text-white/80 font-general-sans">{{ story.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-white">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16">What Drives Us</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 bg-zinc-900 rounded-3xl p-12 text-white relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl font-satoshi font-bold mb-4">Safety First</h3>
                            <p class="text-white/80 font-general-sans text-lg mb-6">
                                Performance means nothing without safety. Every feature we build prioritizes keeping riders safe while helping them improve. Our emergency detection and safety analytics have already helped prevent accidents and save lives.
                            </p>
                            <div class="text-blue-400 font-general-sans text-sm">Lives protected: 23 emergency responses triggered</div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div
                                v-for="(value, index) in coreValues"
                                :key="index"
                                class="bg-gray-100 rounded-2xl p-6"
                        >
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" :class="value.bgColor">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h4 class="text-xl font-satoshi font-bold text-gray-900 mb-3">{{ value.title }}</h4>
                            <p class="text-gray-700 font-general-sans text-sm">{{ value.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-white">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="bg-zinc-900 rounded-3xl h-[500px] relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
                        <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
                            <div class="text-center">
                                <h4 class="text-2xl font-satoshi font-bold mb-8">Global Impact</h4>
                                <div class="grid grid-cols-2 gap-8">
                                    <div>
                                        <div class="text-4xl font-satoshi font-[900] text-green-400 mb-2">50K+</div>
                                        <div class="text-sm text-white/60">Active Riders</div>
                                    </div>
                                    <div>
                                        <div class="text-4xl font-satoshi font-[900] text-green-400 mb-2">2M+</div>
                                        <div class="text-sm text-white/60">Miles Logged</div>
                                    </div>
                                    <div>
                                        <div class="text-4xl font-satoshi font-[900] text-green-400 mb-2">23</div>
                                        <div class="text-sm text-white/60">Lives Saved</div>
                                    </div>
                                    <div>
                                        <div class="text-4xl font-satoshi font-[900] text-green-400 mb-2">127</div>
                                        <div class="text-sm text-white/60">Countries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-8 leading-tight">Riding Together</h2>
                        <p class="text-xl text-gray-700 font-general-sans mb-8">
                            What started as a small team of passionate riders has grown into a global community of motorcycle enthusiasts. From track day warriors to weekend cruisers, RVN brings riders together through shared data and experiences.
                        </p>
                        <div class="space-y-6">
                            <div class="p-4 bg-gray-100 rounded-xl">
                                <h4 class="font-satoshi font-bold text-gray-900 mb-2">Community Driven</h4>
                                <p class="text-gray-600 text-sm">Every feature request comes from real riders solving real problems</p>
                            </div>
                            <div class="p-4 bg-gray-100 rounded-xl">
                                <h4 class="font-satoshi font-bold text-gray-900 mb-2">Open Ecosystem</h4>
                                <p class="text-gray-600 text-sm">Your data belongs to you - export, share, or keep it private</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-white">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-16">Recognition</h2>

                <!-- Awards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                            v-for="(award, index) in awards"
                            :key="index"
                            class="text-center"
                    >
                        <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                        <h4 class="text-lg font-satoshi font-bold text-gray-900 mb-2">{{ award.title }}</h4>
                        <p class="text-gray-600 font-general-sans text-sm mb-1">{{ award.organization }}</p>
                        <p class="text-gray-500 font-general-sans text-xs">{{ award.year }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-24 bg-white">
            <div class="container mx-auto px-4 md:px-20 lg:px-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 class="text-5xl md:text-6xl font-satoshi font-[900] text-gray-900 mb-8 leading-tight">Backed by the Best</h2>
                        <p class="text-xl text-gray-700 font-general-sans mb-8">
                            Our investors and partners share our vision of making motorcycling safer and more enjoyable through technology. From venture capital firms to motorcycle manufacturers, we work with industry leaders who understand the riding community.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700 font-general-sans">Series A funding from top-tier VCs</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700 font-general-sans">Partnerships with major motorcycle brands</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-gray-700 font-general-sans">Advisory board of racing legends</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-zinc-900 rounded-3xl h-[400px] relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div class="relative z-10 h-full flex items-center justify-center text-white p-8">
                            <div class="text-center">
                                <div class="w-24 h-24 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg class="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                                    </svg>
                                </div>
                                <h4 class="text-xl font-satoshi font-bold mb-4">Strategic Partners</h4>
                                <p class="text-white/70 font-general-sans text-sm">Leading VCs, OEMs, and racing teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const foundingStory = ref([
    {
        year: '2019',
        milestone: 'The Idea',
        description: 'After a near-miss at Laguna Seca, founder Alex Rodriguez realized recreational riders needed the same data insights that professional teams use. The idea for RVN was born in a hospital waiting room.'
    },
    {
        year: '2020',
        milestone: 'First Prototype',
        description: 'Working nights and weekends, the team built the first RVN device in a garage. Initial testing with local track day groups showed immediate promise and demand.'
    },
    {
        year: '2021',
        milestone: 'Beta Launch',
        description: 'Released to 100 beta testers across 12 race tracks. The feedback was overwhelming - riders were setting personal bests and riding safer within weeks.'
    },
    {
        year: '2022',
        milestone: 'Series A Funding',
        description: 'Raised $15M in Series A funding to scale production and expand the team. First 1,000 units shipped to customers worldwide.'
    },
    {
        year: '2024',
        milestone: 'Global Expansion',
        description: 'Now serving 50,000+ riders across 127 countries. Emergency detection feature has triggered 23 life-saving responses.'
    }
])

const teamMembers = ref([
    {
        name: 'Sarah Chen',
        initial: 'S',
        role: 'CTO',
        description: 'Former Tesla Autopilot engineer with expertise in sensor fusion and real-time data processing.',
        bike: 'BMW S1000RR'
    },
    {
        name: 'Marcus Johnson',
        initial: 'M',
        role: 'Head of Design',
        description: 'Ex-Apple designer focused on creating intuitive interfaces for complex data.',
        bike: 'Ducati Monster'
    },
    {
        name: 'Elena Volkov',
        initial: 'E',
        role: 'VP Engineering',
        description: 'Aerospace engineer bringing military-grade reliability to consumer devices.',
        bike: 'KTM 1290 Super Duke'
    },
    {
        name: 'David Park',
        initial: 'D',
        role: 'Head of AI',
        description: 'PhD in Machine Learning, building intelligent coaching systems for riders.',
        bike: 'Yamaha R6'
    },
    {
        name: 'Lisa Thompson',
        initial: 'L',
        role: 'VP Operations',
        description: 'Supply chain expert ensuring quality and reliability at scale.',
        bike: 'Honda CBR1000RR'
    }
])

const coreValues = ref([
    {
        title: 'Innovation',
        description: 'Pushing the boundaries of what\'s possible with motorcycle technology.',
        bgColor: 'bg-purple-600'
    },
    {
        title: 'Community',
        description: 'Building products with and for the global riding community.',
        bgColor: 'bg-green-600'
    },
    {
        title: 'Transparency',
        description: 'Open about our methods, honest about our limitations.',
        bgColor: 'bg-blue-600'
    }
])

const awards = ref([
    { title: 'Best Motorcycle Tech', organization: 'CES Innovation Awards', year: '2024' },
    { title: 'Startup of the Year', organization: 'Motorcycle Industry Awards', year: '2023' },
    { title: 'Safety Innovation', organization: 'FIM Technology Awards', year: '2023' },
    { title: 'Best Mobile App', organization: 'Webby Awards', year: '2022' }
])

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
</style>
