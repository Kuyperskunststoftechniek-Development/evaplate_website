<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      :title="t('contact.hero_title')"
      :subtitle="t('contact.hero_subtitle')"
      compact
    />

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Form (2/3 width) -->
          <div class="lg:col-span-2">
            <ContactForm />
          </div>

          <!-- Contact info sidebar (1/3 width) -->
          <div>
            <h3 class="text-lg font-semibold text-slate-900 mb-6">{{ t('contact.info_title') }}</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Mail class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span class="text-slate-600">{{ t('contact.info_email') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span class="text-slate-600">{{ t('contact.info_phone') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span class="text-slate-600">{{ t('contact.info_address') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
