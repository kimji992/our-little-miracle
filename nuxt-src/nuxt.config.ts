export default defineNuxtConfig({
  app: {
    baseURL: '/our-little-miracle/',
    head: {
      title: '가족 축하 이벤트',
      meta: [
        { name: 'description', content: '소중한 소식을 함께 나누는 가족 축하 이벤트 페이지' },
        { property: 'og:title', content: '가족 축하 이벤트' },
        { property: 'og:description', content: '소중한 소식 함께 나눠요' },
        { property: 'og:image', content: '/our-little-miracle/images/og-event-v2.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '가족 축하 이벤트' },
        { name: 'twitter:description', content: '소중한 소식 함께 나눠요' },
        { name: 'twitter:image', content: '/our-little-miracle/images/og-event-v2.jpg' }
      ]
    }
  },
  css: ['~/assets/main.css'],
  nitro: { prerender: { routes: ['/'] } }
})
