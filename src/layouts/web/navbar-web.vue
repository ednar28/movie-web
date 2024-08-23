<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
</script>

<template>
  <nav class="container fixed inset-x-0 top-0 z-30">
    <div
      class="flex w-full items-center justify-between bg-black bg-opacity-40 py-4"
    >
      <di class="rounded-xl bg-primary-600 p-3 text-sm font-bold">Movie App</di>

      <div class="flex items-center space-x-8">
        <div class="nav-item active">Home</div>
        <div class="nav-item">Discover</div>
        <div class="nav-item">Movie Release</div>
        <div class="nav-item">Forum</div>
        <div class="nav-item">About</div>
      </div>

      <div class="flex space-x-4">
        <button class="flex items-center justify-center">
          <span class="w- icon-[ic--baseline-search] block h-5"></span>
        </button>
        <button class="flex items-center justify-center">
          <span class="icon-[ph--bell] block h-5 w-5"></span>
        </button>

        <div class="flex items-center space-x-1 text-slate-300">
          <app-image class="size-6 overflow-hidden rounded-full" />
          <span class="icon-[mdi--chevron-down] block h-5 w-5"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
  .nav-item {
    @apply text-slate-300;
  }
  .nav-item.active {
    @apply font-bold;
  }
</style>
