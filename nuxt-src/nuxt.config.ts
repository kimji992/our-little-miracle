export default defineNuxtConfig({
  app: {
    baseURL: '/our-little-miracle/',
    head: {
      title: '우리의 작은 기적',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },
  nitro: { prerender: { routes: ['/'] } },
  ssr: true,
  devtools: { enabled: false }
})
