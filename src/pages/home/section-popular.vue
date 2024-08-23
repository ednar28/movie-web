<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
  import { fmt } from '@/functions'
  import { useMovieSchedule } from '@/models/movie'

  const { movies, getData } = useMovieSchedule()
  getData({
    date: fmt.date(new Date(), 'yyyy-MM-dd'),
    country: 'us',
  })
</script>

<template>
  <section id="just-release" class="container space-y-3">
    <h2>Popular of the week</h2>
    <div class="grid grid-cols-3 gap-8">
      <template v-for="(movie, index) in movies" :key="movie.id">
        <div class="flex items-start space-x-4">
          <div class="self-center text-3xl font-bold">
            {{ fmt.number(index + 1) }}
          </div>
          <app-image
            :src="movie._embedded.show.image?.medium"
            :alt="movie._embedded.show.name"
            class="size-32 shrink-0 rounded-lg"
          />
          <div class="flex-1 space-y-2">
            <div
              class="inline-block rounded-lg border border-white p-1 text-xs font-thin"
            >
              PG-13
            </div>
            <div class="line-clamp-2 text-sm font-bold">
              {{ movie._embedded.show.name }}
            </div>

            <div class="flex flex-wrap items-baseline gap-1 text-xs">
              <template
                v-for="(genre, index) in movie._embedded.show.genres.slice(
                  0,
                  2,
                )"
                :key="genre"
              >
                <div>{{ genre }}</div>
                <div
                  v-if="
                    index + 1 !== movie._embedded.show.genres.slice(0, 2).length
                  "
                  class="size-1 shrink-0 rounded-full bg-white"
                ></div>
              </template>
            </div>

            <div
              v-if="movie._embedded.show.rating.average"
              class="flex items-center space-x-1 text-xs"
            >
              <span class="icon-[solar--star-line-duotone] block"></span>
              <div>{{ movie._embedded.show.rating.average }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
