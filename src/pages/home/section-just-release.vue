<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
  import { fmt } from '@/functions'
  import { useMovieSchedule } from '@/models/movie'

  const { movies, getData } = useMovieSchedule()
  getData(fmt.date(new Date(), 'yyyy-MM-dd'))
</script>

<template>
  <section id="just-release" class="container space-y-3">
    <div class="text-xl font-bold text-white">Just Release</div>
    <div class="flex flex-wrap items-center justify-between gap-6">
      <template v-for="movie in movies" :key="movie.id">
        <app-image
          :src="movie._embedded.show.image?.medium"
          class="aspect-ratio-square w-64 rounded-xl"
        />
      </template>
    </div>
  </section>
</template>
