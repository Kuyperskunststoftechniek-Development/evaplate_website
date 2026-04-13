<script setup lang="ts">
const localePath = useLocalePath()

const quickLinks = [
  { key: 'home', to: '/' },
  { key: 'technology', to: '/technology' },
  { key: 'products', to: '/products' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
]
</script>

<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="text-white text-lg font-bold mb-3">EVAplate</h3>
          <p class="text-sm">{{ $t('footer.description') }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            {{ $t('footer.quick_links') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.key">
              <NuxtLink
                :to="localePath(link.to)"
                class="text-sm hover:text-primary-light transition-colors"
              >
                {{ $t(`nav.${link.key}`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white text-sm font-semibold uppercase tracking-wider mb-3">
            {{ $t('footer.contact_info') }}
          </h3>
          <ul class="space-y-2 text-sm">
            <li>{{ $t('footer.email') }}</li>
            <li>{{ $t('footer.phone') }}</li>
            <li>{{ $t('footer.address') }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; {{ new Date().getFullYear() }} EVAplate. {{ $t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>
