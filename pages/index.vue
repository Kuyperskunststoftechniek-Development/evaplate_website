<script setup lang="ts">
import { ShieldCheck, Scaling, Factory } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const features100 = computed(() =>
  (tm('products.evaplate100.features') as unknown[]).map((f) => rt(f as Parameters<typeof rt>[0]))
)
const features1000 = computed(() =>
  (tm('products.evaplate1000.features') as unknown[]).map((f) => rt(f as Parameters<typeof rt>[0]))
)
</script>

<template>
  <div>
    <!-- Hero — add background-video="/images/hero/hero-bg.mp4" when ready -->
    <HeroSection
      :title="t('hero.title')"
      :subtitle="t('hero.subtitle')"
      :primary-cta="{ label: t('hero.cta_primary'), to: '/contact' }"
      :secondary-cta="{ label: t('hero.cta_secondary'), to: '/technology' }"
    />

    <!-- Feature highlights -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            :icon="ShieldCheck"
            :title="t('home.features.corrosion_title')"
            :description="t('home.features.corrosion_desc')"
          />
          <FeatureCard
            :icon="Scaling"
            :title="t('home.features.scalable_title')"
            :description="t('home.features.scalable_desc')"
          />
          <FeatureCard
            :icon="Factory"
            :title="t('home.features.versatile_title')"
            :description="t('home.features.versatile_desc')"
          />
        </div>
      </div>
    </section>

    <!-- Products preview -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900">{{ t('home.products_section_title') }}</h2>
          <p class="text-slate-600 mt-2">{{ t('home.products_section_subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Add image="/images/products/evaplate100.jpg" when renders are ready -->
          <ProductCard
            :name="t('products.evaplate100.name')"
            :capacity="t('products.evaplate100.capacity')"
            :features="features100"
            :cta-label="t('products.view_details')"
            cta-to="/products"
          />
          <!-- Add image="/images/products/evaplate1000.jpg" when renders are ready -->
          <ProductCard
            :name="t('products.evaplate1000.name')"
            :capacity="t('products.evaplate1000.capacity')"
            :features="features1000"
            :cta-label="t('products.view_details')"
            cta-to="/products"
          />
        </div>
      </div>
    </section>

    <!-- Sustainability -->
    <section class="py-16 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('home.sustainability_title') }}</h2>
          <p class="text-slate-600 text-lg leading-relaxed">{{ t('home.sustainability_text') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      :title="t('home.cta_title')"
      :subtitle="t('home.cta_subtitle')"
      :cta-label="t('home.cta_button')"
      cta-to="/contact"
    />
  </div>
</template>
