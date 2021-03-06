import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import {
  VueMaskDirective
} from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
