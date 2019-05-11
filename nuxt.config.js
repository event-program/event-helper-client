const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const NAME = 'Eventually'
const DESCRIPTION = 'Simple and Low Cost Event Operation Helper'
const BASE_URL = 'https://eventually-project.github.io';
const THEME_COLOR = '#ff3f3d';
const BACKGROUND_COLOR = '#fff';

module.exports = {
  css: [
    '~/assets/style/app.styl',
    '~/assets/fonts.css'
  ],

  loading: { color: THEME_COLOR },

  plugins: ['@/plugins/vuetify'],

  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: NAME,
    short_name: NAME,
    description: DESCRIPTION,
    scope: '/',
    display: 'standalone',
    start_url: '/?utm_source=homescreen',
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR
  },

  meta: {
    name: NAME,
    description: DESCRIPTION,
    nativeUI: true,
    appleStatusBarStyle: 'black-translucent',
    ogHost: BASE_URL
  },

  oneSignal: {
    init: {
      appId: '4652ac77-f8b2-4a88-b531-158629b54d35',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  },

  mode: 'universal',

  build: {
    extractCSS: true,
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    plugins: [new VuetifyLoaderPlugin()],
    transpile: ['vuetify/lib']
  }
}
