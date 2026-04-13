<script setup lang="ts">
defineProps<{
  title: string
  specLabels: string[]
  product1: { name: string; values: string[] }
  product2: { name: string; values: string[] }
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <thead>
        <tr class="border-b border-gray-100">
          <th class="text-left p-4 text-sm font-semibold text-slate-900 w-1/3"></th>
          <th class="text-left p-4 text-sm font-semibold text-primary">{{ product1.name }}</th>
          <th class="text-left p-4 text-sm font-semibold text-primary">{{ product2.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(label, i) in specLabels"
          :key="label"
          class="border-b border-gray-50"
        >
          <td class="p-4 text-sm font-medium text-slate-900">{{ label }}</td>
          <td class="p-4 text-sm text-slate-600">{{ product1.values[i] }}</td>
          <td class="p-4 text-sm text-slate-600">{{ product2.values[i] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
