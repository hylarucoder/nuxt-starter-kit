import { defineNuxtConfig } from "nuxt/config"
import svgLoader from "vite-svg-loader"
import { pwa } from "./src/config/pwa"
import { appDescription } from "./src/constants"

export default defineNuxtConfig({
  srcDir: "src/",
  build: {
    transpile: ["trpc-nuxt"],
  },
  css: ["~/assets/scss/index.scss"],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_API_BASE_URL || "/api",
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxt/content",
    "@nuxthq/ui",
    "@nuxtjs/web-vitals",
  ],
  ui: {
    icons: ["mdi", "lucide", "vscode-icons", "fa6-brands"],
  },
  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },
  image: {
    // Options
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  colorMode: {
    classSuffix: "",
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      viewport: "width=device-width,initial-scale=1,user-scalable=no",
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/nuxt.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      ],
      script: [],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: appDescription,
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },
  vite: {
    plugins: [
      svgLoader({
        // Your settings.
      }),
    ],
  },

  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },

  i18n: {
    locales: ["en", "zh_CN"],
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
