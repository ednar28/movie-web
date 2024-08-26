<script setup lang="ts">
  import SectionAllMovie from './section-all-movie.vue'
  import SectionBannerPromotion from './section-banner-promotion.vue'
  import SectionBanner from './section-banner.vue'
  import SectionJustRelease from './section-just-release.vue'
  import SectionPopular from './section-popular.vue'
  import SectionStreamingBrand from './section-streaming-brand.vue'
</script>

<template>
  <div class="space-y-8">
    <section-banner />
    <section-streaming-brand />
    <section-just-release />
    <section-popular />
    <section-banner-promotion />
    <section-all-movie />
  </div>
</template>
