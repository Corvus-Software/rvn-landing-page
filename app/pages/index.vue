<template>
  <div>
    <HeroBanner />
    <MeetRvn />
    <ConfidenceBanner />
    <RideToLearn />
    <TinyPowerful />
    <RidingYourOwnWay />
  </div>
</template>

<script setup lang="ts">
import HeroBanner from "~/components/index-sections/HeroBanner.vue";
import MeetRvn from "~/components/index-sections/MeetRvn.vue";
import ConfidenceBanner from "~/components/index-sections/ConfidenceBanner.vue";
import RideToLearn from "~/components/index-sections/RideToLearn.vue";
import TinyPowerful from "~/components/index-sections/TinyPowerful.vue";
import RidingYourOwnWay from "~/components/index-sections/RidingYourOwnWay.vue";

// SEO metadata for home page
useSeoMeta({
  title: "AI-Powered Motorcycle Data Logger & Analytics",
  description:
    "Transform your riding with RVN - the world's most advanced AI-powered motorcycle data logger. Professional-grade analytics, 100Hz precision tracking, GPS, and crash detection. Join thousands of riders improving their skills.",
  ogTitle: "RVN - The World Is Your Track | AI-Powered Motorcycle Data Logger",
  ogDescription:
    "Professional-grade motorcycle data logger with AI-powered insights. 100Hz precision, GPS tracking, and performance analytics used by riders worldwide.",
  ogUrl: "https://www.getrvn.co",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle:
    "RVN - The World Is Your Track | AI-Powered Motorcycle Data Logger",
  twitterDescription:
    "Professional-grade motorcycle data logger with AI-powered insights.",
  twitterImage: "/twitter-image.jpg",
});

// Structured data for SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "RVN Motorcycle Data Logger",
        description:
          "Professional-grade AI-powered motorcycle data logger with 100Hz precision, GPS tracking, and advanced performance analytics",
        brand: { "@type": "Brand", name: "RVN" },
        offers: {
          "@type": "AggregateOffer",
          availability: "https://schema.org/PreOrder",
          priceCurrency: "USD",
          url: "https://www.getrvn.co/waitlist",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        },
      }),
    },
  ],
});
</script>
