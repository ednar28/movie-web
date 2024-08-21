<script setup lang="ts">
  import { useToastStore } from '@/stores/toast'

  const toast = useToastStore()
</script>

<template>
  <div class="toast-wrapper">
    <transition-group name="toast">
      <div v-for="item in toast.items" :key="item.id" class="toast-items">
        {{ item.message }}
      </div>
    </transition-group>
  </div>
</template>

<style lang="postcss" scoped>
  .toast-wrapper {
    @apply pointer-events-none fixed inset-x-0 bottom-12 z-50 flex flex-col;

    .toast-items {
      @apply mx-auto mb-2 max-w-xs rounded-full px-4 py-1 text-xs text-white;
      background: #000000aa;
      transition: all 0.8s ease;
    }

    .toast-enter-from,
    .toast-leave-to {
      opacity: 0;
    }
  }
</style>
