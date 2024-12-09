// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxtjs-naive-ui', '@pinia/nuxt', '@nuxt/test-utils/module'],
  css: ['~/assets/base.css', '~/assets/main.css'],
  app: {
    head: {
      title: 'Harry Nguyen',
      meta: [{ name: 'description', content: "Harry Nguyen's portfolio site." }],
      htmlAttrs: {
        lang: 'en-US',
      },
    },
  },
  build: {
    transpile: ['vueuc'],
  },
  $test: {
    build: {
      transpile: ['vueuc', 'naive-ui'],
    },
  },
});
