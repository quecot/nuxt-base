// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/eslint-module'],
  colorMode: { classSuffix: '' },
  eslint: { lintOnStart: false },
  vue: { defineModel: true },
});
