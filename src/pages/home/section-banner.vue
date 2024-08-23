<script setup lang="ts">
  import AppImage from '@/components/app-image.vue'
</script>

<template>
  <section id="banner">
    <div class="relative">
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <app-image class="aspect-banner w-full" src="assets/banner.jpeg" />
      <div class="absolute inset-0 z-10">
        <div class="container flex h-full flex-col justify-end space-y-3 pb-20">
          <div class="text-3xl font-bold">STAR WARS: The Force Awaken</div>
          <div class="text-slate-500">2h40m 2023 Fantasy Actions</div>
          <div class="max-w-lg text-slate-300">
            "Star Wars" is an epic space opera franchise created by George
            Lucas, beginning with the release of the original film in 1977. Set
            in a distant galaxy, the story explores the struggle between the
            forces of good, represented by the Rebel Alliance and the Jedi, and
            the forces of evil, embodied by the Galactic Empire and the Sith.
          </div>

          <div class="grid max-w-lg grid-cols-3 gap-4 pt-6">
            <button class="block rounded-lg bg-green-500 py-2">Play Now</button>
            <button class="block rounded-lg bg-gray-500 bg-opacity-60 py-2">
              Watch Trailer
            </button>
            <button class="block rounded-lg border border-white py-2">
              Add Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
