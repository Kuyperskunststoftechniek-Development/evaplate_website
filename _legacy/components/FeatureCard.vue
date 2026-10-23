<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  description: string
}>()
</script>

<template>
  <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
    <div class="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mx-auto mb-4">
      <component :is="icon" class="w-6 h-6 text-primary" />
    </div>
    <h3 class="font-semibold text-lg text-slate-900 mb-2">{{ title }}</h3>
    <p class="text-sm text-slate-600">{{ description }}</p>
  </div>
</template>
