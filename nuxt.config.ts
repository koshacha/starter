// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  routeRules: {
    "/": { prerender: true },
  },

  app: {
    head: {
      bodyAttrs: {
        class: "dark:bg-neutral-900 dark:text-white bg-white",
      },
    },
  },
});