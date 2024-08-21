<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
  import { ref } from 'vue'

  const imageUrlbrands = ref([
    'assets/logo-streaming-app/netflix.jpg',
    'assets/logo-streaming-app/prime-video.png',
    'assets/logo-streaming-app/disney.png',
    'assets/logo-streaming-app/pixar.png',
    'assets/logo-streaming-app/marvel.png',
    'assets/logo-streaming-app/hbo-max.png',
  ])
</script>

<template>
  <section id="streaming-brand" class="py-4">
    <div class="container flex items-center justify-between">
      <app-image
        v-for="imageUrl in imageUrlbrands"
        :key="imageUrl"
        :src="imageUrl"
        class="w-32 rounded-xl"
      />
    </div>
  </section>
</template>
