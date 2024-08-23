<script setup lang="ts">
  import AppImage from './app-image.vue'

  defineProps<{
    title: string
    genres: string[]
    image_url: string | null
    rating: number | null
  }>()
</script>

<template>
  <div class="relative w-full">
    <app-image
      :src="image_url"
      :alt="title"
      class="aspect-ratio-square w-64 rounded-xl"
    />
    <div
      class="absolute inset-x-0 bottom-0 space-y-2 bg-black bg-opacity-60 px-4 py-2"
    >
      <div class="text-lg font-bold">{{ title }}</div>
      <div class="flex flex-wrap items-baseline gap-2 text-xs">
        <div v-if="rating" class="flex items-center space-x-1">
          <span class="icon-[solar--star-line-duotone] block"></span>
          <div>{{ rating }}</div>
        </div>

        <template v-for="(genre, index) in genres" :key="genre">
          <div>{{ genre }}</div>
          <div
            v-if="index + 1 !== genres.length"
            class="size-1 shrink-0 rounded-full bg-white"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>
