// SEO metadata for all pages
export const pageSEO = {
  home: {
    title: 'AI-Powered Motorcycle Data Logger & Analytics',
    description: 'Transform your riding with RVN - the world\'s most advanced AI-powered motorcycle data logger. Professional-grade analytics, 100Hz precision tracking, GPS, and crash detection. Join thousands of riders improving their skills.',
    keywords: 'motorcycle data logger, AI motorcycle analytics, riding performance tracker, motorcycle GPS, lean angle sensor, track day data logger, motorcycle telemetry system, riding improvement tool',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'RVN Motorcycle Data Logger',
        description: 'Professional-grade AI-powered motorcycle data logger with 100Hz precision, GPS tracking, and advanced performance analytics',
        brand: { '@type': 'Brand', name: 'RVN' },
        offers: {
          '@type': 'AggregateOffer',
          availability: 'https://schema.org/PreOrder',
          priceCurrency: 'USD',
          url: 'https://www.getrvn.co/waitlist'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        }
      }
    ]
  },

  features: {
    title: 'Features That Fuel Performance - Motorcycle Data Logger',
    description: 'Discover RVN\'s cutting-edge motorcycle data logger features: 100Hz precision tracking, 9-axis IMU sensors, ±1m GPS accuracy, AI-powered analytics, automatic lap detection, and emergency crash detection. Professional-grade technology for every rider.',
    keywords: 'motorcycle data logger features, 9-axis IMU sensor, GPS motorcycle tracker, automatic lap timer, crash detection motorcycle, lean angle sensor, motorcycle telemetry, AI riding analytics, motorcycle performance tracking',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'RVN Motorcycle Data Logger Features',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'AI-Powered Analytics',
            description: 'Advanced machine learning models provide personalized riding insights'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '100Hz Data Collection',
            description: 'Ultra-high frequency data capture with 9-axis IMU sensors'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'GPS Precision Tracking',
            description: 'Military-grade GPS accuracy within ±1 meter'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Emergency Crash Detection',
            description: 'Automatic impact detection with emergency contact alerts'
          }
        ]
      }
    ]
  },

  analysis: {
    title: 'Data-Driven Performance Analytics - Motorcycle Riding Insights',
    description: 'Deep dive into your motorcycle riding analytics with AI-powered insights. Track speed, lean angles, lap times, and performance trends. Real-time session data and comprehensive ride analysis to make you a better, safer rider.',
    keywords: 'motorcycle analytics dashboard, riding performance analysis, motorcycle data visualization, lap time analysis, riding statistics, motorcycle telemetry dashboard, AI riding insights, track day analytics, riding improvement metrics',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'RVN Analytics Dashboard',
        applicationCategory: 'Sports & Performance',
        description: 'AI-powered motorcycle performance analytics platform',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        operatingSystem: 'iOS, Android, Web'
      }
    ]
  },

  aboutUs: {
    title: 'About Us - Built by Riders for Riders',
    description: 'Meet the team behind RVN. From weekend warriors to professional racers, we\'re democratizing motorcycle performance analytics. Our mission: make advanced data insights accessible to every rider worldwide.',
    keywords: 'RVN company, motorcycle tech startup, rider-focused technology, motorcycle safety innovation, riding analytics company, motorcycle data logger company, riding community platform',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About RVN Technologies',
        description: 'RVN is democratizing motorcycle performance analytics, making professional-grade data insights accessible to all riders',
        mainEntity: {
          '@type': 'Organization',
          name: 'RVN Technologies Inc.',
          foundingDate: '2019',
          founders: [{ '@type': 'Person', name: 'Alex Rodriguez' }],
          description: 'Motorcycle technology company focused on rider safety and performance improvement'
        }
      }
    ]
  },

  waitlist: {
    title: 'Join the Waitlist - Pre-Order RVN Motorcycle Data Logger',
    description: 'Reserve your RVN motorcycle data logger today. Early bird pricing $399 (Save $100). Professional-grade 100Hz tracking, AI analytics, GPS, crash detection. Limited spots available. Ships Q2 2026.',
    keywords: 'RVN waitlist, motorcycle data logger pre-order, buy motorcycle tracker, RVN pricing, motorcycle telemetry device purchase, data logger early bird, motorcycle GPS pre-order',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'RVN Professional Motorcycle Data Logger',
        description: 'Professional-grade motorcycle data logger with 100Hz precision, AI analytics, GPS tracking, and crash detection',
        image: 'https://www.getrvn.co/product-image.jpg',
        brand: { '@type': 'Brand', name: 'RVN' },
        offers: {
          '@type': 'Offer',
          url: 'https://www.getrvn.co/waitlist',
          priceCurrency: 'USD',
          price: '399',
          priceValidUntil: '2026-06-01',
          availability: 'https://schema.org/PreOrder',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@type': 'Organization', name: 'RVN Technologies Inc.' }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        }
      }
    ]
  }
}

