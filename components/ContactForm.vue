<script setup lang="ts">
const { t } = useI18n()
const { form, errors, submitting, submitted, submitError, submit } = useContactForm()
</script>

<template>
  <!-- Success state -->
  <div v-if="submitted" class="bg-surface rounded-xl p-8 text-center">
    <div class="text-4xl mb-4">✓</div>
    <p class="text-lg text-slate-700">{{ t('contact.form.success') }}</p>
  </div>

  <!-- Form -->
  <form v-else @submit.prevent="submit" class="space-y-6" novalidate>
    <!-- Name -->
    <div>
      <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.name') }} *</label>
      <input
        v-model="form.name"
        type="text"
        :placeholder="t('contact.form.name_placeholder')"
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        :class="{ 'border-red-400': errors.name }"
      />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ t(`contact.form.${errors.name}`) }}</p>
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.email') }} *</label>
      <input
        v-model="form.email"
        type="email"
        :placeholder="t('contact.form.email_placeholder')"
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        :class="{ 'border-red-400': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ t(`contact.form.${errors.email}`) }}</p>
    </div>

    <!-- Phone + Company (side by side) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.phone') }}</label>
        <input
          v-model="form.phone"
          type="tel"
          :placeholder="t('contact.form.phone_placeholder')"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.company') }}</label>
        <input
          v-model="form.company"
          type="text"
          :placeholder="t('contact.form.company_placeholder')"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
      </div>
    </div>

    <!-- Product interest -->
    <div>
      <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.interest') }}</label>
      <select
        v-model="form.interest"
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
      >
        <option value="general">{{ t('contact.form.interest_general') }}</option>
        <option value="evaplate100">{{ t('contact.form.interest_100') }}</option>
        <option value="evaplate1000">{{ t('contact.form.interest_1000') }}</option>
      </select>
    </div>

    <!-- Message -->
    <div>
      <label class="block text-sm font-medium text-slate-700 mb-1">{{ t('contact.form.message') }} *</label>
      <textarea
        v-model="form.message"
        rows="5"
        :placeholder="t('contact.form.message_placeholder')"
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y"
        :class="{ 'border-red-400': errors.message }"
      />
      <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ t(`contact.form.${errors.message}`) }}</p>
    </div>

    <!-- Error message -->
    <p v-if="submitError" class="text-red-500 text-sm">{{ t('contact.form.error') }}</p>

    <!-- Submit -->
    <button
      type="submit"
      :disabled="submitting"
      class="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ submitting ? t('contact.form.submitting') : t('contact.form.submit') }}
    </button>
  </form>
</template>
