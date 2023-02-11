// https://nuxt.com/docs/api/configuration/nuxt-config
import Component from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
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
        dts: true,
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
  }
})

