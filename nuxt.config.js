import { Navigation } from "swiper";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode : 'spa',

  head: {
    title: 'تاج اسپرت',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { src: '~/assets/scss/app.scss', lang: 'scss' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/Vazir.css',
    '~/assets/fonts/dastnevis.css',
    '~/assets/css/style.css',
    '@/assets/scss/custom.scss',
    '@/assets/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/vee-validate.js' ,ssr : true},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   transpile: ['vee-validate']
  // }
}
