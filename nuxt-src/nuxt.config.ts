export default defineNuxtConfig({
  app: { baseURL: '/our-little-miracle/' },
  css: ['~/assets/main.css'],
  nitro: { prerender: { routes: ['/'] } }
})
