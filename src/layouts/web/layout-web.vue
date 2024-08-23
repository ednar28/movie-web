<script setup lang="ts">
  import FooterWeb from './footer-web.vue'
  import NavbarWeb from './navbar-web.vue'
</script>

<template>
  <div class="min-h-screen bg-black">
    <navbar-web />

    <div class="content">
      <router-view />
    </div>

    <footer-web />
  </div>
</template>

<style lang="postcss" scoped>
  .content {
    @apply pb-20;
  }
</style>
