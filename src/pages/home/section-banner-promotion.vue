<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
  import AppLargeMovieCard from '@/components/app-large-movie-card.vue'
  import AppSwiper from '@/components/app-swiper.vue'
  import { fmt } from '@/functions'
  import { useMovieSchedule } from '@/models/movie'
  import { subWeeks } from 'date-fns'
  import { SwiperSlide } from 'swiper/vue'

  const { movies, getData } = useMovieSchedule()
  getData({
    date: fmt.date(subWeeks(new Date(), 4), 'yyyy-MM-dd'),
  })
</script>

<template>
  <section id="promotion">
    <div class="relative">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <app-image class="aspect-promotion w-full" src="assets/promotion.jpg" />
      <div class="container absolute inset-0 z-10">
        <div class="grid h-full grid-cols-2 gap-4">
          <div class="flex h-full flex-col justify-end space-y-3 pb-20">
            <div class="mb-12">
              <div class="text-4xl font-medium">Featured in SaintStream</div>
              <div class="text-lg">Best featured for you today</div>
            </div>

            <div
              class="inline-block w-fit rounded-lg bg-primary-500 bg-opacity-30 px-4 py-2 text-white"
            >
              #1 Australia
            </div>

            <div class="text-5xl font-bold">Air; Courting A Legend</div>
            <div class="text-slate-500">2h40m 2023 Fantasy Actions</div>
            <div class="max-w-lg text-slate-300">
              When international arms dealer and criminal mastermind Elena
              Federova orchestrates seven simultaneous New York City bank
              heists, principled and relentless agent Val Turner vows to take
              her down- An outcast in the bureau. Val soon learns that have to
              use clues from her own complicated past to...
              <button class="text-green-500">Read more</button>
            </div>

            <div class="grid max-w-lg grid-cols-3 gap-4 pt-6">
              <button class="block rounded-lg bg-green-500 py-2">
                Play Now
              </button>
              <button class="block rounded-lg border border-white py-2">
                Add Watchlist
              </button>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <app-swiper :slidesPerView="3" :spaceBetween="10" class="flex-1">
              <template v-for="movie in movies" :key="movie.id">
                <swiper-slide>
                  <app-large-movie-card
                    :title="movie._embedded.show.name"
                    :image_url="movie._embedded.show.image.medium"
                    :genres="movie._embedded.show.genres"
                    :rating="movie._embedded.show.rating.average"
                  />
                </swiper-slide>
              </template>
            </app-swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
