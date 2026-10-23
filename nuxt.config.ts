export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  srcDir: '.',

  css: ['~/assets/css/main.css'],

  // Oude subpagina's bestaan niet meer: stuur ze door naar de juiste sectie op de one-pager.
  routeRules: {
    '/technology': { redirect: '/#technology' },
    '/products': { redirect: '/#applications' },
    '/about': { redirect: '/#roadmap' },
    '/contact': { redirect: '/#contact' },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'EvaPlate',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'EvaPlate is developing a multi-effect vacuum evaporator with the lowest total cost of ownership: polypropylene plates, a water-to-water heat pump and a container format.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/icon-512.png', sizes: '512x512' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,500..800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap' },
      ],
    },
  },
})
