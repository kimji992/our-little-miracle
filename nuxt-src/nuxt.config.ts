export default defineNuxtConfig({
  app: {
    baseURL: '/our-little-miracle/',
    head: {
      title: '가족 축하 이벤트',
      meta: [
        { name: 'description', content: '저금통 소개하고 저금 받아가세요!' },
        { property: 'og:title', content: '저금통 소개하고 저금 받아가세요!' },
        { property: 'og:description', content: '저금통 소개하고 저금 받아가세요!' },
        { property: 'og:image', content: '/our-little-miracle/images/og-event-v4.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '저금통 소개하고 저금 받아가세요!' },
        { name: 'twitter:description', content: '저금통 소개하고 저금 받아가세요!' },
        { name: 'twitter:image', content: '/our-little-miracle/images/og-event-v4.jpg' }
      ]
    }
  },
  css: ['~/assets/main.css'],
  nitro: { prerender: { routes: ['/'] } }
})
