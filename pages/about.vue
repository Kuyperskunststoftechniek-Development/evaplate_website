<script setup lang="ts">
import { Lightbulb, Leaf, Shield } from 'lucide-vue-next'

const { t } = useI18n()

const values = [
  { icon: Lightbulb, titleKey: 'about.values.innovation_title', descKey: 'about.values.innovation_desc' },
  { icon: Leaf, titleKey: 'about.values.sustainability_title', descKey: 'about.values.sustainability_desc' },
  { icon: Shield, titleKey: 'about.values.reliability_title', descKey: 'about.values.reliability_desc' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      :title="t('about.hero_title')"
      :subtitle="t('about.hero_subtitle')"
      compact
    />

    <!-- Story -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('about.story_title') }}</h2>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">{{ t('about.story_text') }}</p>
          <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('about.mission_title') }}</h2>
          <p class="text-slate-600 text-lg leading-relaxed">{{ t('about.mission_text') }}</p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">{{ t('about.values_title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            v-for="value in values"
            :key="value.titleKey"
            :icon="value.icon"
            :title="t(value.titleKey)"
            :description="t(value.descKey)"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      :title="t('about.cta_title')"
      :subtitle="t('about.cta_subtitle')"
      :cta-label="t('about.cta_button')"
      cta-to="/contact"
    />
  </div>
</template>
