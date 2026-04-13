<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  compact?: boolean
}>()

const localePath = useLocalePath()
</script>

<template>
  <section
    :class="[
      'bg-gradient-to-br from-primary to-primary-dark text-white',
      compact ? 'py-16' : 'py-24 lg:py-32',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 :class="[compact ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl', 'font-bold mb-4']">
        {{ title }}
      </h1>
      <p :class="[compact ? 'text-lg' : 'text-lg lg:text-xl', 'text-teal-100 max-w-2xl mx-auto mb-8']">
        {{ subtitle }}
      </p>
      <div v-if="primaryCta || secondaryCta" class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          v-if="primaryCta"
          :to="localePath(primaryCta.to)"
          class="inline-block bg-white text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
        >
          {{ primaryCta.label }}
        </NuxtLink>
        <NuxtLink
          v-if="secondaryCta"
          :to="localePath(secondaryCta.to)"
          class="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          {{ secondaryCta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
