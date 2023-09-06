import { defineNuxtConfig } from "nuxt/config"
import svgLoader from "vite-svg-loader"
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
    "@nuxt/content",
    "@nuxthq/ui",
    "@sidebase/nuxt-auth",
    "@nuxtjs/web-vitals",
    // "@sidebase/nuxt-session",
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: ["en", "zh_CN"],
    defaultLocale: "en",
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },

  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
  },
  // auth: {
  //   // The module is enabled. Change this to disable the module
  //   isEnabled: true,
  //   // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
  //   origin: "http://localhost:3000",
  //   // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
  //   basePath: "/api/auth",
  //   // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
  //   enableSessionRefreshPeriodically: false,
  //   // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
  //   enableSessionRefreshOnWindowFocus: true,
  //   // Whether to add a global authentication middleware that will protect all pages without exclusion
  //   globalAppMiddleware: false,
  //   // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
  //   defaultProvider: undefined,
  //   // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
  //   addDefaultCallbackUrl: true,
  //   // Configuration of the global auth-middleware (only applies if you set `globalAppMiddleware: true` above!)
  //   globalMiddlewareOptions: {
  //     // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
  //     allow404WithoutAuth: true,
  //     // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
  //     addDefaultCallbackUrl: true,
  //   },
  // },

  devtools: {
    enabled: true,
  },
})
