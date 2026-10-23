<script setup lang="ts">
import { Beaker, UtensilsCrossed, Building2, Settings } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const features100 = computed(() =>
  (tm('products.evaplate100.features') as unknown[]).map((f) => rt(f as Parameters<typeof rt>[0]))
)
const features1000 = computed(() =>
  (tm('products.evaplate1000.features') as unknown[]).map((f) => rt(f as Parameters<typeof rt>[0]))
)

const applications = [
  { icon: Beaker, titleKey: 'products_page.applications.chemical_title', descKey: 'products_page.applications.chemical_desc' },
  { icon: UtensilsCrossed, titleKey: 'products_page.applications.food_title', descKey: 'products_page.applications.food_desc' },
  { icon: Building2, titleKey: 'products_page.applications.municipal_title', descKey: 'products_page.applications.municipal_desc' },
  { icon: Settings, titleKey: 'products_page.applications.manufacturing_title', descKey: 'products_page.applications.manufacturing_desc' },
]

const specKeys = ['capacity', 'design', 'construction', 'applications', 'operation'] as const
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      :title="t('products_page.hero_title')"
      :subtitle="t('products_page.hero_subtitle')"
      compact
    />

    <!-- Product cards -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Add image="/images/products/evaplate100.jpg" when renders are ready -->
          <ProductCard
            :name="t('products.evaplate100.name')"
            :capacity="t('products.evaplate100.capacity')"
            :features="features100"
            :cta-label="t('products.request_quote')"
            cta-to="/contact"
          />
          <!-- Add image="/images/products/evaplate1000.jpg" when renders are ready -->
          <ProductCard
            :name="t('products.evaplate1000.name')"
            :capacity="t('products.evaplate1000.capacity')"
            :features="features1000"
            :cta-label="t('products.request_quote')"
            cta-to="/contact"
          />
        </div>
      </div>
    </section>

    <!-- Comparison table -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">{{ t('products_page.comparison_title') }}</h2>
        <div class="max-w-4xl mx-auto">
          <ProductComparison
            :title="t('products_page.comparison_title')"
            :spec-labels="specKeys.map(k => t(`products_page.specs.${k}`))"
            :product1="{
              name: t('products.evaplate100.name'),
              values: specKeys.map(k => t(`products_page.specs.evaplate100.${k}`)),
            }"
            :product2="{
              name: t('products.evaplate1000.name'),
              values: specKeys.map(k => t(`products_page.specs.evaplate1000.${k}`)),
            }"
          />
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">{{ t('products_page.applications_title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            v-for="app in applications"
            :key="app.titleKey"
            :icon="app.icon"
            :title="t(app.titleKey)"
            :description="t(app.descKey)"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      :title="t('products_page.cta_title')"
      :subtitle="t('products_page.cta_subtitle')"
      :cta-label="t('products_page.cta_button')"
      cta-to="/contact"
    />
  </div>
</template>
