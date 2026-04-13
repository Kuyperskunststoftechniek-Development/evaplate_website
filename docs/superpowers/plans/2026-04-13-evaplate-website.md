# EVAplate Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 5-page corporate website for EVAplate (vacuum evaporator company) with English/Dutch language support.

**Architecture:** Nuxt 3 SSG with Tailwind CSS, file-based routing (5 pages), `@nuxtjs/i18n` for EN/NL toggle, reusable Vue components for shared UI patterns (hero, cards, CTA banners). All content externalized to i18n JSON files.

**Tech Stack:** Nuxt 3, Vue 3 (Composition API), Tailwind CSS 3, @nuxtjs/i18n, lucide-vue-next, @fontsource-variable/inter

**Spec:** `docs/superpowers/specs/2026-04-13-evaplate-website-design.md`

---

## File Structure

```
evaplate_website/
├── nuxt.config.ts              # Nuxt config: modules, i18n, app head
├── tailwind.config.ts          # Tailwind theme: Ocean Teal colors, Inter font
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config (Nuxt default)
├── app.vue                     # Root app shell
├── assets/
│   └── css/
│       └── main.css            # Tailwind directives + Inter font import
├── layouts/
│   └── default.vue             # AppHeader + <slot /> + AppFooter
├── components/
│   ├── AppHeader.vue           # Sticky nav + mobile hamburger + EN/NL toggle
│   ├── AppFooter.vue           # Company info, links, contact, social
│   ├── HeroSection.vue         # Reusable: title, subtitle, CTAs, gradient bg
│   ├── FeatureCard.vue         # Icon + title + description card
│   ├── ProductCard.vue         # Product name, capacity, features, CTA
│   ├── ProductComparison.vue   # Side-by-side specs table
│   ├── ContactForm.vue         # Form with validation + Formspree submit
│   └── CtaBanner.vue           # Full-width CTA section
├── composables/
│   └── useContactForm.ts       # Form state + validation + submit logic
├── i18n/
│   ├── en.json                 # All English translations
│   └── nl.json                 # All Dutch translations
├── pages/
│   ├── index.vue               # Home page
│   ├── technology.vue          # Technology page
│   ├── products.vue            # Products page
│   ├── about.vue               # About page
│   └── contact.vue             # Contact page
└── public/
    └── images/                 # Static images (placeholder)
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `nuxt.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app.vue`, `assets/css/main.css`

- [ ] **Step 1: Initialize Nuxt 3 project**

Run:
```bash
npx nuxi@latest init evaplate_website --template v3 --force --packageManager npm
```

Note: Since we're already in the `evaplate_website` directory, run from the parent:
```bash
cd c:/python_project && npx nuxi@latest init evaplate_website --force --packageManager npm
```

If the directory already has files (like our docs), use `--force`. This creates `package.json`, `nuxt.config.ts`, `tsconfig.json`, `app.vue`, and the basic structure.

- [ ] **Step 2: Install dependencies**

```bash
cd c:/python_project/evaplate_website
npm install
npm install -D @nuxtjs/tailwindcss @nuxtjs/i18n
npm install lucide-vue-next @fontsource-variable/inter
```

- [ ] **Step 3: Configure nuxt.config.ts**

Replace the contents of `nuxt.config.ts` with:

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'i18n/',
  },

  app: {
    head: {
      title: 'EVAplate — Sustainable Vacuum Evaporation',
      meta: [
        { name: 'description', content: 'EVAplate builds vacuum evaporators from engineering plastic. Corrosion-free processing for industrial waste streams.' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
```

- [ ] **Step 4: Create Tailwind config**

Create `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488',
          dark: '#065f46',
          light: '#5eead4',
        },
        surface: '#f0fdf4',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
```

- [ ] **Step 5: Create main CSS file**

Create `assets/css/main.css`:

```css
@import '@fontsource-variable/inter';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 6: Update app.vue**

Replace `app.vue` with:

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

- [ ] **Step 7: Create i18n stub files**

Create `i18n/en.json`:
```json
{
  "nav": {
    "home": "Home",
    "technology": "Technology",
    "products": "Products",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "Sustainable Vacuum Evaporation",
    "subtitle": "Plastic-built evaporators that handle what metal can't",
    "cta_primary": "Request a Quote",
    "cta_secondary": "Learn More"
  }
}
```

Create `i18n/nl.json`:
```json
{
  "nav": {
    "home": "Home",
    "technology": "Technologie",
    "products": "Producten",
    "about": "Over ons",
    "contact": "Contact"
  },
  "hero": {
    "title": "Duurzame Vacuümverdamping",
    "subtitle": "Kunststof verdampers die verwerken wat metaal niet kan",
    "cta_primary": "Offerte Aanvragen",
    "cta_secondary": "Meer Informatie"
  }
}
```

- [ ] **Step 8: Create placeholder page**

Create `pages/index.vue`:
```vue
<template>
  <div class="min-h-screen flex items-center justify-center">
    <h1 class="text-4xl font-bold text-primary">EVAplate</h1>
  </div>
</template>
```

- [ ] **Step 9: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts at `http://localhost:3000`, shows "EVAplate" in teal color with Inter font. No errors in terminal.

- [ ] **Step 10: Initialize git and commit**

```bash
git init
echo "node_modules\n.nuxt\n.output\ndist\n.superpowers" > .gitignore
git add -A
git commit -m "feat: scaffold Nuxt 3 project with Tailwind, i18n, and base config"
```

---

## Task 2: Default Layout + Header + Footer

**Files:**
- Create: `layouts/default.vue`, `components/AppHeader.vue`, `components/AppFooter.vue`
- Modify: `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add header/footer translations to en.json**

Update `i18n/en.json` — add these keys alongside existing ones:

```json
{
  "nav": {
    "home": "Home",
    "technology": "Technology",
    "products": "Products",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "Sustainable Vacuum Evaporation",
    "subtitle": "Plastic-built evaporators that handle what metal can't",
    "cta_primary": "Request a Quote",
    "cta_secondary": "Learn More"
  },
  "footer": {
    "description": "Sustainable vacuum evaporation technology built from engineering plastic.",
    "quick_links": "Quick Links",
    "contact_info": "Contact Info",
    "email": "info@evaplate.com",
    "phone": "+31 (0) 00 000 0000",
    "address": "The Netherlands",
    "rights": "All rights reserved."
  }
}
```

- [ ] **Step 2: Add header/footer translations to nl.json**

Update `i18n/nl.json`:

```json
{
  "nav": {
    "home": "Home",
    "technology": "Technologie",
    "products": "Producten",
    "about": "Over ons",
    "contact": "Contact"
  },
  "hero": {
    "title": "Duurzame Vacuümverdamping",
    "subtitle": "Kunststof verdampers die verwerken wat metaal niet kan",
    "cta_primary": "Offerte Aanvragen",
    "cta_secondary": "Meer Informatie"
  },
  "footer": {
    "description": "Duurzame vacuümverdampingstechnologie gebouwd uit technisch kunststof.",
    "quick_links": "Snelkoppelingen",
    "contact_info": "Contactgegevens",
    "email": "info@evaplate.com",
    "phone": "+31 (0) 00 000 0000",
    "address": "Nederland",
    "rights": "Alle rechten voorbehouden."
  }
}
```

- [ ] **Step 3: Create AppHeader.vue**

Create `components/AppHeader.vue`:

```vue
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
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
```

- [ ] **Step 4: Create AppFooter.vue**

Create `components/AppFooter.vue`:

```vue
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
```

- [ ] **Step 5: Create default layout**

Create `layouts/default.vue`:

```vue
<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
```

- [ ] **Step 6: Verify layout renders**

Run `npm run dev`, open `http://localhost:3000`. Expected:
- Sticky header with "EVAplate" logo, nav links, and language toggle
- "EVAplate" placeholder content in middle
- Footer with 3 columns
- Click "NL" toggle → nav and footer text switch to Dutch
- Resize to mobile → hamburger menu appears, click to open slide-out nav

- [ ] **Step 7: Commit**

```bash
git add layouts/ components/AppHeader.vue components/AppFooter.vue i18n/
git commit -m "feat: add default layout with responsive header and footer"
```

---

## Task 3: Shared Components (Hero, FeatureCard, ProductCard, CtaBanner)

**Files:**
- Create: `components/HeroSection.vue`, `components/FeatureCard.vue`, `components/ProductCard.vue`, `components/CtaBanner.vue`

- [ ] **Step 1: Create HeroSection.vue**

Create `components/HeroSection.vue`:

```vue
<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  compact?: boolean
}>()

const localePath = useLocalePath()
</script>

<template>
  <section
    :class="[
      'bg-gradient-to-br from-primary to-primary-dark text-white',
      compact ? 'py-16' : 'py-24 lg:py-32',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 :class="[compact ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl', 'font-bold mb-4']">
        {{ title }}
      </h1>
      <p :class="[compact ? 'text-lg' : 'text-lg lg:text-xl', 'text-teal-100 max-w-2xl mx-auto mb-8']">
        {{ subtitle }}
      </p>
      <div v-if="primaryCta || secondaryCta" class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          v-if="primaryCta"
          :to="localePath(primaryCta.to)"
          class="inline-block bg-white text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
        >
          {{ primaryCta.label }}
        </NuxtLink>
        <NuxtLink
          v-if="secondaryCta"
          :to="localePath(secondaryCta.to)"
          class="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          {{ secondaryCta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 2: Create FeatureCard.vue**

Create `components/FeatureCard.vue`:

```vue
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
```

- [ ] **Step 3: Create ProductCard.vue**

Create `components/ProductCard.vue`:

```vue
<script setup lang="ts">
defineProps<{
  name: string
  capacity: string
  features: string[]
  ctaLabel: string
  ctaTo: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- Image placeholder -->
    <div class="h-48 bg-gradient-to-br from-surface to-teal-100 flex items-center justify-center">
      <span class="text-4xl font-bold text-primary/30">{{ name }}</span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-slate-900 mb-1">{{ name }}</h3>
      <p class="text-primary font-semibold mb-4">{{ capacity }}</p>
      <ul class="space-y-2 mb-6">
        <li v-for="feature in features" :key="feature" class="flex items-start gap-2 text-sm text-slate-600">
          <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ feature }}
        </li>
      </ul>
      <NuxtLink
        :to="localePath(ctaTo)"
        class="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </div>
</template>
```

- [ ] **Step 4: Create CtaBanner.vue**

Create `components/CtaBanner.vue`:

```vue
<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  ctaLabel: string
  ctaTo: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <section class="bg-primary-dark py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">{{ title }}</h2>
      <p v-if="subtitle" class="text-teal-200 mb-8 max-w-xl mx-auto">{{ subtitle }}</p>
      <NuxtLink
        :to="localePath(ctaTo)"
        class="inline-block bg-white text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
      >
        {{ ctaLabel }}
      </NuxtLink>
    </div>
  </section>
</template>
```

- [ ] **Step 5: Commit**

```bash
git add components/HeroSection.vue components/FeatureCard.vue components/ProductCard.vue components/CtaBanner.vue
git commit -m "feat: add shared components (Hero, FeatureCard, ProductCard, CtaBanner)"
```

---

## Task 4: Home Page

**Files:**
- Modify: `pages/index.vue`, `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add home page translations to en.json**

Add these keys to `i18n/en.json`:

```json
{
  "home": {
    "features": {
      "corrosion_title": "Corrosion Resistant",
      "corrosion_desc": "Engineering plastic construction withstands aggressive chemicals that destroy metal evaporators.",
      "scalable_title": "Scalable Capacity",
      "scalable_desc": "From 100 to 1,000 liters per hour — choose the capacity that fits your operation.",
      "versatile_title": "Multi-Industry",
      "versatile_desc": "Process diverse waste streams across chemical, food, municipal, and manufacturing sectors."
    },
    "products_section_title": "Our Products",
    "products_section_subtitle": "Two models designed for different scales of operation",
    "sustainability_title": "Built for a Sustainable Future",
    "sustainability_text": "Our plastic-based vacuum evaporators reduce waste volume by up to 95%, recovering clean water for reuse. Lower energy consumption, zero corrosion, and longer equipment life mean less waste and lower environmental impact.",
    "cta_title": "Ready to Get Started?",
    "cta_subtitle": "Contact us for a custom quote tailored to your waste stream.",
    "cta_button": "Contact Us"
  },
  "products": {
    "evaplate100": {
      "name": "EVAplate 100",
      "capacity": "100 L/h capacity",
      "features": [
        "Compact design for smaller operations",
        "Full plastic construction",
        "Low energy consumption",
        "Minimal maintenance required"
      ]
    },
    "evaplate1000": {
      "name": "EVAplate 1000",
      "capacity": "1,000 L/h capacity",
      "features": [
        "High-volume industrial processing",
        "Full plastic construction",
        "Handles aggressive waste streams",
        "Continuous operation capability"
      ]
    },
    "request_quote": "Request Quote",
    "view_details": "View Details"
  }
}
```

- [ ] **Step 2: Add home page translations to nl.json**

Add matching keys to `i18n/nl.json`:

```json
{
  "home": {
    "features": {
      "corrosion_title": "Corrosiebestendig",
      "corrosion_desc": "Constructie van technisch kunststof weerstaat agressieve chemicaliën die metalen verdampers aantasten.",
      "scalable_title": "Schaalbare Capaciteit",
      "scalable_desc": "Van 100 tot 1.000 liter per uur — kies de capaciteit die past bij uw proces.",
      "versatile_title": "Multi-Industrie",
      "versatile_desc": "Verwerk diverse afvalstromen in de chemische, voedingsmiddelen-, gemeentelijke en productiesector."
    },
    "products_section_title": "Onze Producten",
    "products_section_subtitle": "Twee modellen ontworpen voor verschillende processchalen",
    "sustainability_title": "Gebouwd voor een Duurzame Toekomst",
    "sustainability_text": "Onze kunststof vacuümverdampers reduceren het afvalvolume met tot 95%, en winnen schoon water terug voor hergebruik. Lager energieverbruik, geen corrosie en langere levensduur betekenen minder afval en een lagere milieu-impact.",
    "cta_title": "Klaar om te Beginnen?",
    "cta_subtitle": "Neem contact op voor een offerte op maat voor uw afvalstroom.",
    "cta_button": "Neem Contact Op"
  },
  "products": {
    "evaplate100": {
      "name": "EVAplate 100",
      "capacity": "100 L/u capaciteit",
      "features": [
        "Compact ontwerp voor kleinere operaties",
        "Volledig kunststof constructie",
        "Laag energieverbruik",
        "Minimaal onderhoud vereist"
      ]
    },
    "evaplate1000": {
      "name": "EVAplate 1000",
      "capacity": "1.000 L/u capaciteit",
      "features": [
        "Industriële verwerking op grote schaal",
        "Volledig kunststof constructie",
        "Verwerkt agressieve afvalstromen",
        "Continue bedrijfsvoering mogelijk"
      ]
    },
    "request_quote": "Offerte Aanvragen",
    "view_details": "Meer Details"
  }
}
```

- [ ] **Step 3: Build index.vue**

Replace `pages/index.vue` with:

```vue
<script setup lang="ts">
import { ShieldCheck, Scaling, Factory } from 'lucide-vue-next'

const { t, tm } = useI18n()
</script>

<template>
  <div>
    <!-- Hero -->
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
          <ProductCard
            :name="t('products.evaplate100.name')"
            :capacity="t('products.evaplate100.capacity')"
            :features="tm('products.evaplate100.features') as string[]"
            :cta-label="t('products.view_details')"
            cta-to="/products"
          />
          <ProductCard
            :name="t('products.evaplate1000.name')"
            :capacity="t('products.evaplate1000.capacity')"
            :features="tm('products.evaplate1000.features') as string[]"
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
```

- [ ] **Step 4: Verify home page**

Run `npm run dev`, open `http://localhost:3000`. Expected:
- Teal gradient hero with headline, subtitle, two CTA buttons
- 3 feature cards (Corrosion Resistant, Scalable, Multi-Industry) with Lucide icons
- 2 product cards (EVAplate 100 and 1000) with feature lists
- Sustainability section
- Dark teal CTA banner at bottom
- Toggle to NL → all text switches to Dutch

- [ ] **Step 5: Commit**

```bash
git add pages/index.vue i18n/
git commit -m "feat: build home page with hero, features, products, and CTA sections"
```

---

## Task 5: Technology Page

**Files:**
- Create: `pages/technology.vue`
- Modify: `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add technology translations to en.json**

Add to `i18n/en.json`:

```json
{
  "technology": {
    "hero_title": "Our Technology",
    "hero_subtitle": "Vacuum evaporation reimagined with engineering plastic",
    "how_it_works_title": "How Vacuum Evaporation Works",
    "how_it_works_text": "Vacuum evaporation reduces the boiling point of liquids by lowering the pressure. This allows waste water to be evaporated at low temperatures, concentrating pollutants while recovering clean distillate. The result: up to 95% volume reduction of your waste stream.",
    "how_it_works_steps": {
      "step1_title": "Feed",
      "step1_desc": "Waste water enters the evaporator",
      "step2_title": "Evaporate",
      "step2_desc": "Under vacuum, water evaporates at low temperature",
      "step3_title": "Condense",
      "step3_desc": "Clean water vapor is condensed and collected",
      "step4_title": "Concentrate",
      "step4_desc": "Concentrated residue is removed for disposal"
    },
    "why_plastic_title": "Why Plastic?",
    "why_plastic_text": "Traditional vacuum evaporators are built from stainless steel or exotic alloys. While these work for mild waste streams, they corrode and fail when processing aggressive chemicals. EVAplate solves this by building the entire evaporator from engineering plastic.",
    "comparison": {
      "feature": "Feature",
      "metal": "Metal Evaporators",
      "evaplate": "EVAplate (Plastic)",
      "corrosion": "Corrosion Resistance",
      "metal_corrosion": "Limited — corrodes with acids, alkalis",
      "evaplate_corrosion": "Excellent — resists virtually all chemicals",
      "maintenance": "Maintenance",
      "metal_maintenance": "Frequent repairs and part replacement",
      "evaplate_maintenance": "Minimal — no corrosion means less wear",
      "lifespan": "Lifespan",
      "metal_lifespan": "5–10 years with aggressive streams",
      "evaplate_lifespan": "15+ years even with aggressive streams",
      "cost": "Total Cost of Ownership",
      "metal_cost": "High — purchase + ongoing repairs",
      "evaplate_cost": "Lower — less maintenance, longer life"
    },
    "benefits_title": "Key Benefits",
    "benefits": {
      "chemical_title": "Chemical Resistance",
      "chemical_desc": "Processes acids, alkalis, solvents, and mixed waste that would destroy metal systems.",
      "maintenance_title": "Lower Maintenance",
      "maintenance_desc": "No corrosion means fewer breakdowns, less downtime, and lower operational costs.",
      "lifespan_title": "Longer Lifespan",
      "lifespan_desc": "Engineering plastic maintains structural integrity far longer than metal in harsh environments.",
      "application_title": "Wider Application Range",
      "application_desc": "Handle waste streams that were previously impossible or uneconomical to process."
    },
    "cta_title": "See Our Products",
    "cta_subtitle": "Explore the EVAplate 100 and EVAplate 1000",
    "cta_button": "View Products"
  }
}
```

- [ ] **Step 2: Add technology translations to nl.json**

Add matching keys to `i18n/nl.json`:

```json
{
  "technology": {
    "hero_title": "Onze Technologie",
    "hero_subtitle": "Vacuümverdamping opnieuw uitgevonden met technisch kunststof",
    "how_it_works_title": "Hoe Vacuümverdamping Werkt",
    "how_it_works_text": "Vacuümverdamping verlaagt het kookpunt van vloeistoffen door de druk te verlagen. Hierdoor kan afvalwater bij lage temperaturen verdampt worden, waarbij verontreinigingen geconcentreerd worden en schoon destillaat teruggewonnen wordt. Het resultaat: tot 95% volumereductie van uw afvalstroom.",
    "how_it_works_steps": {
      "step1_title": "Invoer",
      "step1_desc": "Afvalwater komt de verdamper binnen",
      "step2_title": "Verdampen",
      "step2_desc": "Onder vacuüm verdampt water bij lage temperatuur",
      "step3_title": "Condenseren",
      "step3_desc": "Schone waterdamp wordt gecondenseerd en opgevangen",
      "step4_title": "Concentreren",
      "step4_desc": "Geconcentreerd residu wordt afgevoerd"
    },
    "why_plastic_title": "Waarom Kunststof?",
    "why_plastic_text": "Traditionele vacuümverdampers zijn gebouwd van roestvast staal of exotische legeringen. Hoewel deze werken voor milde afvalstromen, corroderen en falen ze bij het verwerken van agressieve chemicaliën. EVAplate lost dit op door de gehele verdamper te bouwen uit technisch kunststof.",
    "comparison": {
      "feature": "Eigenschap",
      "metal": "Metalen Verdampers",
      "evaplate": "EVAplate (Kunststof)",
      "corrosion": "Corrosiebestendigheid",
      "metal_corrosion": "Beperkt — corrodeert met zuren, logen",
      "evaplate_corrosion": "Uitstekend — bestand tegen vrijwel alle chemicaliën",
      "maintenance": "Onderhoud",
      "metal_maintenance": "Frequente reparaties en onderdelenvervanging",
      "evaplate_maintenance": "Minimaal — geen corrosie betekent minder slijtage",
      "lifespan": "Levensduur",
      "metal_lifespan": "5–10 jaar met agressieve stromen",
      "evaplate_lifespan": "15+ jaar zelfs met agressieve stromen",
      "cost": "Totale Kosten van Eigendom",
      "metal_cost": "Hoog — aanschaf + doorlopende reparaties",
      "evaplate_cost": "Lager — minder onderhoud, langere levensduur"
    },
    "benefits_title": "Belangrijkste Voordelen",
    "benefits": {
      "chemical_title": "Chemische Bestendigheid",
      "chemical_desc": "Verwerkt zuren, logen, oplosmiddelen en gemengd afval dat metalen systemen zou vernietigen.",
      "maintenance_title": "Lager Onderhoud",
      "maintenance_desc": "Geen corrosie betekent minder storingen, minder stilstand en lagere operationele kosten.",
      "lifespan_title": "Langere Levensduur",
      "lifespan_desc": "Technisch kunststof behoudt zijn structurele integriteit veel langer dan metaal in zware omgevingen.",
      "application_title": "Breder Toepassingsgebied",
      "application_desc": "Verwerk afvalstromen die voorheen onmogelijk of oneconomisch waren."
    },
    "cta_title": "Bekijk Onze Producten",
    "cta_subtitle": "Ontdek de EVAplate 100 en EVAplate 1000",
    "cta_button": "Producten Bekijken"
  }
}
```

- [ ] **Step 3: Build technology.vue**

Create `pages/technology.vue`:

```vue
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
```

- [ ] **Step 4: Verify technology page**

Run `npm run dev`, navigate to `http://localhost:3000/technology`. Expected:
- Compact teal hero with "Our Technology" title
- 4-step process diagram
- "Why Plastic?" section with comparison table (metal vs EVAplate)
- 4 benefit cards in 2x2 grid
- CTA banner linking to products
- NL toggle switches all content

- [ ] **Step 5: Commit**

```bash
git add pages/technology.vue i18n/
git commit -m "feat: build technology page with process steps, comparison table, and benefits"
```

---

## Task 6: Products Page

**Files:**
- Create: `pages/products.vue`, `components/ProductComparison.vue`
- Modify: `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add products page translations to en.json**

Add to `i18n/en.json`:

```json
{
  "products_page": {
    "hero_title": "Our Products",
    "hero_subtitle": "Vacuum evaporators built for performance and durability",
    "comparison_title": "Compare Models",
    "specs": {
      "capacity": "Capacity",
      "design": "Design",
      "construction": "Construction",
      "applications": "Applications",
      "operation": "Operation",
      "evaplate100": {
        "capacity": "100 L/h",
        "design": "Compact",
        "construction": "Full engineering plastic",
        "applications": "Small to medium operations",
        "operation": "Batch or continuous"
      },
      "evaplate1000": {
        "capacity": "1,000 L/h",
        "design": "Industrial scale",
        "construction": "Full engineering plastic",
        "applications": "Large industrial operations",
        "operation": "Continuous"
      }
    },
    "applications_title": "Industries We Serve",
    "applications": {
      "chemical_title": "Chemical Industry",
      "chemical_desc": "Process acid and alkali waste streams safely",
      "food_title": "Food & Beverage",
      "food_desc": "Recover process water and reduce waste volume",
      "municipal_title": "Municipal",
      "municipal_desc": "Treat wastewater and leachate efficiently",
      "manufacturing_title": "Manufacturing",
      "manufacturing_desc": "Recycle cooling water and process fluids"
    },
    "cta_title": "Need a Custom Solution?",
    "cta_subtitle": "Contact us to discuss your specific waste stream requirements.",
    "cta_button": "Get in Touch"
  }
}
```

- [ ] **Step 2: Add products page translations to nl.json**

Add matching keys to `i18n/nl.json`:

```json
{
  "products_page": {
    "hero_title": "Onze Producten",
    "hero_subtitle": "Vacuümverdampers gebouwd voor prestatie en duurzaamheid",
    "comparison_title": "Modellen Vergelijken",
    "specs": {
      "capacity": "Capaciteit",
      "design": "Ontwerp",
      "construction": "Constructie",
      "applications": "Toepassingen",
      "operation": "Bedrijfsvoering",
      "evaplate100": {
        "capacity": "100 L/u",
        "design": "Compact",
        "construction": "Volledig technisch kunststof",
        "applications": "Kleine tot middelgrote operaties",
        "operation": "Batch of continu"
      },
      "evaplate1000": {
        "capacity": "1.000 L/u",
        "design": "Industriële schaal",
        "construction": "Volledig technisch kunststof",
        "applications": "Grote industriële operaties",
        "operation": "Continu"
      }
    },
    "applications_title": "Industrieën die Wij Bedienen",
    "applications": {
      "chemical_title": "Chemische Industrie",
      "chemical_desc": "Verwerk zuur- en loogafvalstromen veilig",
      "food_title": "Voedingsmiddelen & Dranken",
      "food_desc": "Win proceswater terug en reduceer afvalvolume",
      "municipal_title": "Gemeentelijk",
      "municipal_desc": "Behandel afvalwater en percolaat efficiënt",
      "manufacturing_title": "Productie",
      "manufacturing_desc": "Recycel koelwater en procesvloeistoffen"
    },
    "cta_title": "Een Oplossing op Maat Nodig?",
    "cta_subtitle": "Neem contact op om uw specifieke afvalstroomvereisten te bespreken.",
    "cta_button": "Neem Contact Op"
  }
}
```

- [ ] **Step 3: Create ProductComparison.vue**

Create `components/ProductComparison.vue`:

```vue
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
```

- [ ] **Step 4: Build products.vue**

Create `pages/products.vue`:

```vue
<script setup lang="ts">
import { Beaker, UtensilsCrossed, Building2, Settings } from 'lucide-vue-next'

const { t, tm } = useI18n()

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
          <ProductCard
            :name="t('products.evaplate100.name')"
            :capacity="t('products.evaplate100.capacity')"
            :features="tm('products.evaplate100.features') as string[]"
            :cta-label="t('products.request_quote')"
            cta-to="/contact"
          />
          <ProductCard
            :name="t('products.evaplate1000.name')"
            :capacity="t('products.evaplate1000.capacity')"
            :features="tm('products.evaplate1000.features') as string[]"
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
```

- [ ] **Step 5: Verify products page**

Run `npm run dev`, navigate to `http://localhost:3000/products`. Expected:
- Compact hero
- 2 product cards with features and "Request Quote" buttons
- Comparison table with 5 spec rows
- 4 industry application cards
- CTA banner

- [ ] **Step 6: Commit**

```bash
git add pages/products.vue components/ProductComparison.vue i18n/
git commit -m "feat: build products page with comparison table and applications grid"
```

---

## Task 7: About Page

**Files:**
- Create: `pages/about.vue`
- Modify: `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add about translations to en.json**

Add to `i18n/en.json`:

```json
{
  "about": {
    "hero_title": "About EVAplate",
    "hero_subtitle": "Pioneering sustainable solutions for industrial waste treatment",
    "story_title": "Our Story",
    "story_text": "EVAplate was founded with a simple but powerful idea: what if vacuum evaporators didn't have to corrode? By rethinking the material — replacing metal with engineering plastic — we've created evaporators that last longer, cost less to maintain, and can process waste streams that were previously impossible to handle.",
    "mission_title": "Our Mission",
    "mission_text": "To make industrial waste treatment more sustainable, more reliable, and more accessible through innovative plastic-based vacuum evaporation technology.",
    "values_title": "Our Values",
    "values": {
      "innovation_title": "Innovation",
      "innovation_desc": "We challenge conventional thinking to find better solutions for industrial waste treatment.",
      "sustainability_title": "Sustainability",
      "sustainability_desc": "Every product we build is designed to reduce environmental impact and promote resource recovery.",
      "reliability_title": "Reliability",
      "reliability_desc": "Our customers depend on equipment that works. We build for durability and consistent performance."
    },
    "cta_title": "Want to Learn More?",
    "cta_subtitle": "Get in touch to discuss how EVAplate can help your operation.",
    "cta_button": "Contact Us"
  }
}
```

- [ ] **Step 2: Add about translations to nl.json**

Add matching keys to `i18n/nl.json`:

```json
{
  "about": {
    "hero_title": "Over EVAplate",
    "hero_subtitle": "Pionieren in duurzame oplossingen voor industriële afvalverwerking",
    "story_title": "Ons Verhaal",
    "story_text": "EVAplate is opgericht met een eenvoudig maar krachtig idee: wat als vacuümverdampers niet hoefden te corroderen? Door het materiaal te heroverwegen — metaal te vervangen door technisch kunststof — hebben we verdampers gecreëerd die langer meegaan, minder onderhoud kosten en afvalstromen kunnen verwerken die voorheen onmogelijk waren.",
    "mission_title": "Onze Missie",
    "mission_text": "Industriële afvalverwerking duurzamer, betrouwbaarder en toegankelijker maken door innovatieve vacuümverdampingstechnologie op basis van kunststof.",
    "values_title": "Onze Waarden",
    "values": {
      "innovation_title": "Innovatie",
      "innovation_desc": "We dagen conventioneel denken uit om betere oplossingen te vinden voor industriële afvalverwerking.",
      "sustainability_title": "Duurzaamheid",
      "sustainability_desc": "Elk product dat we bouwen is ontworpen om de milieu-impact te verminderen en grondstofterugwinning te bevorderen.",
      "reliability_title": "Betrouwbaarheid",
      "reliability_desc": "Onze klanten vertrouwen op apparatuur die werkt. Wij bouwen voor duurzaamheid en consistente prestaties."
    },
    "cta_title": "Meer Weten?",
    "cta_subtitle": "Neem contact op om te bespreken hoe EVAplate uw operatie kan helpen.",
    "cta_button": "Neem Contact Op"
  }
}
```

- [ ] **Step 3: Build about.vue**

Create `pages/about.vue`:

```vue
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
```

- [ ] **Step 4: Verify about page**

Run `npm run dev`, navigate to `http://localhost:3000/about`. Expected:
- Compact hero
- Story and mission text sections
- 3 value cards (Innovation, Sustainability, Reliability)
- CTA banner

- [ ] **Step 5: Commit**

```bash
git add pages/about.vue i18n/
git commit -m "feat: build about page with story, mission, and values"
```

---

## Task 8: Contact Page + Form

**Files:**
- Create: `pages/contact.vue`, `components/ContactForm.vue`, `composables/useContactForm.ts`
- Modify: `i18n/en.json`, `i18n/nl.json`

- [ ] **Step 1: Add contact translations to en.json**

Add to `i18n/en.json`:

```json
{
  "contact": {
    "hero_title": "Contact Us",
    "hero_subtitle": "Ready to discuss your waste stream? We'd love to hear from you.",
    "form": {
      "name": "Full Name",
      "name_placeholder": "Your name",
      "email": "Email Address",
      "email_placeholder": "you@company.com",
      "phone": "Phone Number",
      "phone_placeholder": "+31 ...",
      "company": "Company",
      "company_placeholder": "Your company name",
      "interest": "Product Interest",
      "interest_general": "General Inquiry",
      "interest_100": "EVAplate 100",
      "interest_1000": "EVAplate 1000",
      "message": "Message",
      "message_placeholder": "Tell us about your waste stream or requirements...",
      "submit": "Send Message",
      "submitting": "Sending...",
      "success": "Thank you! Your message has been sent. We'll get back to you soon.",
      "error": "Something went wrong. Please try again or email us directly.",
      "required": "This field is required",
      "invalid_email": "Please enter a valid email address"
    },
    "info_title": "Contact Information",
    "info_email": "info@evaplate.com",
    "info_phone": "+31 (0) 00 000 0000",
    "info_address": "The Netherlands"
  }
}
```

- [ ] **Step 2: Add contact translations to nl.json**

Add matching keys to `i18n/nl.json`:

```json
{
  "contact": {
    "hero_title": "Neem Contact Op",
    "hero_subtitle": "Klaar om uw afvalstroom te bespreken? We horen graag van u.",
    "form": {
      "name": "Volledige Naam",
      "name_placeholder": "Uw naam",
      "email": "E-mailadres",
      "email_placeholder": "u@bedrijf.nl",
      "phone": "Telefoonnummer",
      "phone_placeholder": "+31 ...",
      "company": "Bedrijf",
      "company_placeholder": "Uw bedrijfsnaam",
      "interest": "Product Interesse",
      "interest_general": "Algemene Vraag",
      "interest_100": "EVAplate 100",
      "interest_1000": "EVAplate 1000",
      "message": "Bericht",
      "message_placeholder": "Vertel ons over uw afvalstroom of vereisten...",
      "submit": "Verstuur Bericht",
      "submitting": "Verzenden...",
      "success": "Bedankt! Uw bericht is verzonden. We nemen spoedig contact met u op.",
      "error": "Er ging iets mis. Probeer het opnieuw of mail ons direct.",
      "required": "Dit veld is verplicht",
      "invalid_email": "Voer een geldig e-mailadres in"
    },
    "info_title": "Contactgegevens",
    "info_email": "info@evaplate.com",
    "info_phone": "+31 (0) 00 000 0000",
    "info_address": "Nederland"
  }
}
```

- [ ] **Step 3: Create useContactForm composable**

Create `composables/useContactForm.ts`:

```typescript
interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  interest: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'general',
    message: '',
  })

  const errors = reactive<ContactFormErrors>({})
  const submitting = ref(false)
  const submitted = ref(false)
  const submitError = ref(false)

  function validate(): boolean {
    errors.name = form.name.trim() ? undefined : 'required'
    errors.email = form.email.trim()
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'invalid_email'
      : 'required'
    errors.message = form.message.trim() ? undefined : 'required'

    return !errors.name && !errors.email && !errors.message
  }

  async function submit() {
    if (!validate()) return

    submitting.value = true
    submitError.value = false

    try {
      // Formspree endpoint — replace YOUR_FORM_ID with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          interest: form.interest,
          message: form.message,
        }),
      })

      if (response.ok) {
        submitted.value = true
      } else {
        submitError.value = true
      }
    } catch {
      submitError.value = true
    } finally {
      submitting.value = false
    }
  }

  return { form, errors, submitting, submitted, submitError, validate, submit }
}
```

- [ ] **Step 4: Create ContactForm.vue**

Create `components/ContactForm.vue`:

```vue
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
```

- [ ] **Step 5: Build contact.vue**

Create `pages/contact.vue`:

```vue
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
```

- [ ] **Step 6: Verify contact page**

Run `npm run dev`, navigate to `http://localhost:3000/contact`. Expected:
- Compact hero
- Contact form with all fields (name, email, phone, company, interest dropdown, message)
- Click "Send Message" with empty fields → validation errors appear on name, email, message
- Enter invalid email → "Please enter a valid email address" error
- Contact info sidebar with email, phone, address icons
- NL toggle switches all labels and placeholders

- [ ] **Step 7: Commit**

```bash
git add pages/contact.vue components/ContactForm.vue composables/useContactForm.ts i18n/
git commit -m "feat: build contact page with validated form and Formspree integration"
```

---

## Task 9: Final Polish + SSG Build Verification

**Files:**
- Modify: `nuxt.config.ts` (if needed)

- [ ] **Step 1: Test all navigation flows**

Run `npm run dev` and manually test:
- Click every nav link in the header (Home, Technology, Products, About, Contact) → correct page loads
- Click every CTA button on each page → navigates to correct destination
- Click footer quick links → correct pages
- Test mobile: resize browser to <768px → hamburger menu appears, tap to open, all links work, menu closes on navigation

- [ ] **Step 2: Test i18n toggle on every page**

On each of the 5 pages:
- Click NL toggle → all text switches to Dutch (header, page content, footer)
- Click EN toggle → all text switches back to English
- Verify no untranslated text remains on any page in either language

- [ ] **Step 3: Test responsive layouts**

Check each page at 3 breakpoints:
- Mobile (375px): single column, stacked cards, hamburger menu
- Tablet (768px): 2-column grids where applicable
- Desktop (1280px): full layout with 3+ columns where applicable

- [ ] **Step 4: Run SSG build**

```bash
npm run generate
```

Expected: Build completes without errors. Output in `.output/public/`. Check that all 5 page HTML files exist:
```bash
ls .output/public/
ls .output/public/technology/
ls .output/public/products/
ls .output/public/about/
ls .output/public/contact/
```

- [ ] **Step 5: Preview the static build**

```bash
npx serve .output/public
```

Open the served URL and verify all pages work as static files (navigation, content, form renders).

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "feat: final polish and SSG build verification"
```

---

## Verification Checklist

After completing all tasks, verify the following end-to-end:

- [ ] All 5 pages render without errors (Home, Technology, Products, About, Contact)
- [ ] Navigation works between all pages (header links, footer links, CTA buttons)
- [ ] Mobile hamburger menu opens/closes and navigates correctly
- [ ] EN/NL language toggle works on every page, switching all visible text
- [ ] Contact form validates required fields (name, email, message)
- [ ] Contact form shows error for invalid email format
- [ ] `npm run generate` produces static output without errors
- [ ] Ocean Teal color scheme is consistent across all pages
- [ ] Inter font loads correctly
