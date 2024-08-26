<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
  import { fmt } from '@/functions'
  import { useMovieSchedule } from '@/models/movie'
  import { subWeeks } from 'date-fns'

  const { movies, getData } = useMovieSchedule(20)
  getData({
    date: fmt.date(subWeeks(new Date(), 10), 'yyyy-MM-dd'),
  })
</script>

<template>
  <section id="all-movie" class="container space-y-3">
    <h2>Movies</h2>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="movie in movies" :key="movie.id" class="space-y-2">
        <app-image
          class="aspect-movie-medium rounded-lg"
          :src="movie._embedded.show.image.medium"
        />
        <div class="text-lg font-bold">{{ movie._embedded.show.name }}</div>
        <div class="flex flex-wrap items-baseline gap-2 text-xs">
          <div
            v-if="movie._embedded.show.rating.average"
            class="flex items-center space-x-1"
          >
            <span class="icon-[solar--star-line-duotone] block"></span>
            <div>{{ movie._embedded.show.rating.average }}</div>
          </div>

          <template
            v-for="(genre, index) in movie._embedded.show.genres"
            :key="genre"
          >
            <div>{{ genre }}</div>
            <div
              v-if="index + 1 !== movie._embedded.show.genres.length"
              class="size-1 shrink-0 rounded-full bg-white"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
