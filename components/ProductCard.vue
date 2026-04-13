<script setup lang="ts">
defineProps<{
  name: string
  capacity: string
  features: string[]
  ctaLabel: string
  ctaTo: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- Image placeholder -->
    <div class="h-48 bg-gradient-to-br from-surface to-teal-100 flex items-center justify-center">
      <span class="text-4xl font-bold text-primary/30">{{ name }}</span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-slate-900 mb-1">{{ name }}</h3>
      <p class="text-primary font-semibold mb-4">{{ capacity }}</p>
      <ul class="space-y-2 mb-6">
        <li v-for="feature in features" :key="feature" class="flex items-start gap-2 text-sm text-slate-600">
          <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ feature }}
        </li>
      </ul>
      <NuxtLink
        :to="localePath(ctaTo)"
        class="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
