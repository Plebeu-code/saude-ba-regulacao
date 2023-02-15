// https://nuxt.com/docs/api/configuration/nuxt-config
import Component from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/image-edge'
  ],
  typescript: {
    shim: false
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    plugins: [
      Component({
        resolvers: [NaiveUiResolver()],
      })
    ],
  },
  imports: {
    presets: [
      {
        from: "naive-ui",
        imports: ["useLoadingBar", "useMessage", "useNotification", "useDialog"]
      }
    ]
  },
  runtimeConfig: {
    public: {
      captchaId: "6LexP3EkAAAAAN0ByhaeFbnDchRJWkhQU5K58PpT",
    }
  }
})

