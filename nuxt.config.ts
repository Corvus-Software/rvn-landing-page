export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss'],
    pages: true,

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'RVN - AI-Powered Motorcycle & Performance Analytics',
            titleTemplate: 'RVN - AI-Powered Motorcycle & Performance Analytics',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'RVN is a professional-grade AI-powered motorcycle telemetry unit with 100Hz precision, GPS tracking, and advanced performance analytics. Transform your riding with military-grade insights used by racing teams.' },
                { name: 'keywords', content: 'motorcycle telemetry unit, motorcycle GPS tracker, motorcycle performance analytics, AI motorcycle insights, motorcycle telemetry, riding data analysis, motorcycle lap timer, lean angle sensor, motorcycle IMU, bike telemetry unit, motorcycle tech, riding improvement, track day data, motorcycle safety, crash detection' },
                { name: 'author', content: 'RVN Technologies Inc.' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'googlebot', content: 'index, follow' },

                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'RVN' },
                { property: 'og:title', content: 'RVN - AI-Powered Motorcycle & Performance Analytics' },
                { property: 'og:description', content: 'Professional-grade motorcycle telemetry unit with 100Hz precision, GPS tracking, and AI-powered insights. Used by riders and racing teams worldwide.' },
                { property: 'og:image', content: '/og-image.jpg' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:locale', content: 'en_US' },

                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'RVN - AI-Powered Motorcycle & Performance Analytics' },
                { name: 'twitter:description', content: 'Professional-grade motorcycle telemetry unit with 100Hz precision, GPS tracking, and AI-powered insights.' },
                { name: 'twitter:image', content: '/twitter-image.jpg' },
                { name: 'twitter:creator', content: '@RVN' },

                // Additional SEO tags
                { name: 'theme-color', content: '#DC2626' },
                { name: 'mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
                { name: 'apple-mobile-web-app-title', content: 'RVN' },
                { name: 'application-name', content: 'RVN' },
                { name: 'msapplication-TileColor', content: '#DC2626' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/gilroy-bold' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'canonical', href: 'https://www.getrvn.co' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            ]
        }
    },

    // SEO-friendly route generation
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', '/features', '/analysis', '/about-us', '/waitlist']
        }
    },

    // Performance optimizations
    experimental: {
        payloadExtraction: true,
    },

    // Runtime configuration
    runtimeConfig: {
        public: {
            siteUrl: 'https://www.getrvn.co'
        }
    }
})

