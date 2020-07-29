import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#26c6da',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  lang: {
    locales: {
      es
    },
    current: 'es'
  }
})
