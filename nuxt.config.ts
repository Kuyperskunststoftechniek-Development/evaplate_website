export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  srcDir: '.',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: '.',
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
