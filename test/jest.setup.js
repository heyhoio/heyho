import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Suppress Vuetify warnings about the `data-app` target.
if (typeof document !== 'undefined') {
  document.body.setAttribute('data-app', true)
}
