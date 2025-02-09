import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
  ],

  ssr: true,

  routeRules: {
    "/": { prerender: true },
  },

  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "doodles",
        dir: "./assets/icons/doodles",
      },
    ],
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: "dark-plus",
    },
  },

  app: {
    head: {
      bodyAttrs: {
        class: "dark:bg-neutral-900 dark:text-white bg-white",
      },
    },
  },

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: "ru",
  },

  compatibilityDate: "2024-12-28",
});
