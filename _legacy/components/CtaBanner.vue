<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  ctaLabel: string
  ctaTo: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <section class="bg-primary-dark py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">{{ title }}</h2>
      <p v-if="subtitle" class="text-teal-200 mb-8 max-w-xl mx-auto">{{ subtitle }}</p>
      <NuxtLink
        :to="localePath(ctaTo)"
        class="inline-block bg-white text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </section>
</template>
