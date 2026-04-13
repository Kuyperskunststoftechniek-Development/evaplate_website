<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  compact?: boolean
  backgroundVideo?: string
  backgroundImage?: string
}>()

const localePath = useLocalePath()
const hasMedia = computed(() => !!props.backgroundVideo || !!props.backgroundImage)
</script>

<template>
  <section
    :class="[
      'relative overflow-hidden text-white',
      compact ? 'py-16' : 'py-24 lg:py-32',
      !hasMedia && 'bg-gradient-to-br from-primary to-primary-dark',
    ]"
  >
    <!-- Background video (hidden on mobile, shows image fallback instead) -->
    <video
      v-if="backgroundVideo"
      autoplay
      muted
      loop
      playsinline
      :poster="backgroundImage"
      class="absolute inset-0 w-full h-full object-cover hidden md:block"
    >
      <source :src="backgroundVideo" type="video/mp4" />
    </video>

    <!-- Background image (shown always when set, or as mobile fallback for video) -->
    <div
      v-if="backgroundImage"
      class="absolute inset-0 bg-cover bg-center"
      :class="backgroundVideo ? 'md:hidden' : ''"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />

    <!-- Dark overlay for text readability -->
    <div
      v-if="hasMedia"
      class="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-dark/80"
    />

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
