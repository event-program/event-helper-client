const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const NAME = 'Magpy'
const DESCRIPTION = 'Magpy: An Event Manager Software'
const HOST_URL = 'https://magpy-project.github.io';
const BASE_URL = '/client/';
const THEME_COLOR = '';
const BACKGROUND_COLOR = '';

module.exports = {
  css: [
    '~/assets/style/app.styl',
    '~/assets/fonts.css'
  ],

  loading: { color: THEME_COLOR },

  plugins: ['@/plugins/vuetify'],

  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: NAME,
    short_name: NAME,
    description: DESCRIPTION,
    scope: BASE_URL,
    display: 'standalone',
    start_url: `${BASE_URL}?utm_source=homescreen`,
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR
  },

  meta: {
    name: NAME,
    description: DESCRIPTION,
    nativeUI: true,
    appleStatusBarStyle: 'black-translucent',
    ogHost: `${HOST_URL}${BASE_URL}`
  },

  mode: 'universal',

  router: { base: BASE_URL },

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
