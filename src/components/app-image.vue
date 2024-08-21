<script setup lang="ts">
  import { ref, watch } from 'vue'

  const props = withDefaults(
    defineProps<{
      src?: string | null
      alt?: string
      imgclass?: string
      type?: 'person' | 'default'
    }>(),
    {
      src: undefined,
      alt: undefined,
      imgclass: undefined,
      type: 'default',
    },
  )

  const error = ref(false)

  watch(
    () => props.src,
    () => {
      error.value = false
    },
  )
</script>
<template>
  <div class="overflow-hidden">
    <div
      v-if="!src || error"
      class="flex size-full items-center justify-center bg-gray-100 text-gray-400"
    >
      <span class="icon-[bi--image]"></span>
    </div>
    <img
      v-else
      class="size-full object-cover"
      :class="imgclass"
      :src="src"
      :alt="alt"
      @error="error = true"
    />
  </div>
</template>
