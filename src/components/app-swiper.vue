<script setup lang="ts">
  import 'swiper/css'
  import 'swiper/css/free-mode'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import { FreeMode, Pagination, Navigation } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'

  defineProps<{
    slidesPerView?: number
    spaceBetween?: number
  }>()

  const modules = [FreeMode, Pagination, Navigation]
</script>

<template>
  <swiper
    :slidesPerView="slidesPerView ?? 4"
    :spaceBetween="spaceBetween ?? 30"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="w-full"
  >
    <slot></slot>
  </swiper>
</template>

<style lang="postcss">
  .swiper-button-prev,
  .swiper-button-next {
    @apply size-8 rounded-full bg-gray-800;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    @apply text-xs text-white;
  }
</style>
