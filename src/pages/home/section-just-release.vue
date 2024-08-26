<script setup lang="ts">
  import AppLargeMovieCard from '@/components/app-large-movie-card.vue'
  import AppSwiper from '@/components/app-swiper.vue'
  import { fmt } from '@/functions'
  import { useMovieSchedule } from '@/models/movie'
  import { SwiperSlide } from 'swiper/vue'

  const { movies, getData } = useMovieSchedule()
  getData({
    date: fmt.date(new Date(), 'yyyy-MM-dd'),
  })
</script>

<template>
  <section id="just-release" class="container space-y-3">
    <h2>Just Release</h2>
    <div>
      <app-swiper :slidesPerView="5">
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
  </section>
</template>
