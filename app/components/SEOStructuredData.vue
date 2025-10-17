<template>
  <component :is="'script'" type="application/ld+json">
    {{ JSON.stringify(structuredData) }}
  </component>
</template>

<script setup lang="ts">
defineProps<{
  structuredData: object | object[]
}>()
</script>

