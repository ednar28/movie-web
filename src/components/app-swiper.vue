<script setup lang="ts">
  import 'swiper/css'
  import 'swiper/css/free-mode'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import { FreeMode, Pagination, Navigation } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'

  const modules = [FreeMode, Pagination, Navigation]
</script>

<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
  >
    <slot></slot>
  </swiper>
</template>
