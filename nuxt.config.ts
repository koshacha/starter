import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/icon"],

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

  content: {
    documentDriven: true,
  },

  app: {
    head: {
      bodyAttrs: {
        class: "dark:bg-neutral-900 dark:text-white bg-white",
      },
    },
  },

  compatibilityDate: "2024-12-28",
});
