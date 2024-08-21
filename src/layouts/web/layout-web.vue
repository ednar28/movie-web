<script setup lang="ts">
  import NavbarWeb from './navbar-web.vue'
</script>

<template>
  <div class="min-h-screen bg-black">
    <navbar-web />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .content {
    @apply pb-20;
  }
</style>
