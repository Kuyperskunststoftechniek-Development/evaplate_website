<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const mobileMenuOpen = ref(false)

const navLinks = [
  { key: 'home', to: '/' },
  { key: 'technology', to: '/technology' },
  { key: 'products', to: '/products' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
]

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'nl' : 'en')
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="text-xl font-bold text-primary">
          EVAplate
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="localePath(link.to)"
            class="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            {{ $t(`nav.${link.key}`) }}
          </NuxtLink>
        </nav>

        <!-- Language toggle + mobile menu button -->
        <div class="flex items-center gap-4">
          <button
            @click="toggleLocale"
            class="text-sm font-medium text-slate-600 hover:text-primary transition-colors px-2 py-1 rounded border border-gray-200"
          >
            {{ locale === 'en' ? 'NL' : 'EN' }}
          </button>

          <!-- Mobile hamburger -->
          <button
            class="md:hidden p-2 text-slate-700"
            @click="mobileMenuOpen = !mobileMenuOpen"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white">
      <nav class="px-4 py-4 space-y-3">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.key"
          :to="localePath(link.to)"
          class="block text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          @click="mobileMenuOpen = false"
        >
          {{ $t(`nav.${link.key}`) }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
