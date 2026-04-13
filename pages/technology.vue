<script setup lang="ts">
import { FlaskConical, Wrench, Timer, Sparkles } from 'lucide-vue-next'

const { t } = useI18n()

const processSteps = [
  { num: '1', titleKey: 'technology.how_it_works_steps.step1_title', descKey: 'technology.how_it_works_steps.step1_desc' },
  { num: '2', titleKey: 'technology.how_it_works_steps.step2_title', descKey: 'technology.how_it_works_steps.step2_desc' },
  { num: '3', titleKey: 'technology.how_it_works_steps.step3_title', descKey: 'technology.how_it_works_steps.step3_desc' },
  { num: '4', titleKey: 'technology.how_it_works_steps.step4_title', descKey: 'technology.how_it_works_steps.step4_desc' },
]

const comparisonRows = [
  { labelKey: 'technology.comparison.corrosion', metalKey: 'technology.comparison.metal_corrosion', evaplateKey: 'technology.comparison.evaplate_corrosion' },
  { labelKey: 'technology.comparison.maintenance', metalKey: 'technology.comparison.metal_maintenance', evaplateKey: 'technology.comparison.evaplate_maintenance' },
  { labelKey: 'technology.comparison.lifespan', metalKey: 'technology.comparison.metal_lifespan', evaplateKey: 'technology.comparison.evaplate_lifespan' },
  { labelKey: 'technology.comparison.cost', metalKey: 'technology.comparison.metal_cost', evaplateKey: 'technology.comparison.evaplate_cost' },
]

const benefits = [
  { icon: FlaskConical, titleKey: 'technology.benefits.chemical_title', descKey: 'technology.benefits.chemical_desc' },
  { icon: Wrench, titleKey: 'technology.benefits.maintenance_title', descKey: 'technology.benefits.maintenance_desc' },
  { icon: Timer, titleKey: 'technology.benefits.lifespan_title', descKey: 'technology.benefits.lifespan_desc' },
  { icon: Sparkles, titleKey: 'technology.benefits.application_title', descKey: 'technology.benefits.application_desc' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      :title="t('technology.hero_title')"
      :subtitle="t('technology.hero_subtitle')"
      compact
    />

    <!-- How it works -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-4">{{ t('technology.how_it_works_title') }}</h2>
        <p class="text-slate-600 text-center max-w-3xl mx-auto mb-12">{{ t('technology.how_it_works_text') }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="step in processSteps"
            :key="step.num"
            class="relative bg-surface rounded-xl p-6 text-center"
          >
            <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
              {{ step.num }}
            </div>
            <h3 class="font-semibold text-slate-900 mb-1">{{ t(step.titleKey) }}</h3>
            <p class="text-sm text-slate-600">{{ t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Plastic? -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-4">{{ t('technology.why_plastic_title') }}</h2>
        <p class="text-slate-600 text-center max-w-3xl mx-auto mb-12">{{ t('technology.why_plastic_text') }}</p>

        <!-- Comparison table -->
        <div class="overflow-x-auto">
          <table class="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <thead>
              <tr class="border-b border-gray-100">
                <th class="text-left p-4 text-sm font-semibold text-slate-900">{{ t('technology.comparison.feature') }}</th>
                <th class="text-left p-4 text-sm font-semibold text-slate-500">{{ t('technology.comparison.metal') }}</th>
                <th class="text-left p-4 text-sm font-semibold text-primary">{{ t('technology.comparison.evaplate') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.labelKey"
                class="border-b border-gray-50"
              >
                <td class="p-4 text-sm font-medium text-slate-900">{{ t(row.labelKey) }}</td>
                <td class="p-4 text-sm text-slate-500">{{ t(row.metalKey) }}</td>
                <td class="p-4 text-sm text-primary-dark font-medium">{{ t(row.evaplateKey) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">{{ t('technology.benefits_title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            v-for="benefit in benefits"
            :key="benefit.titleKey"
            :icon="benefit.icon"
            :title="t(benefit.titleKey)"
            :description="t(benefit.descKey)"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      :title="t('technology.cta_title')"
      :subtitle="t('technology.cta_subtitle')"
      :cta-label="t('technology.cta_button')"
      cta-to="/products"
    />
  </div>
</template>
