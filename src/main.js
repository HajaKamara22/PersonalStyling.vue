import './assets/main.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from
'vuetify/components'

import * as directives from
'vuetify/directives'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const vuetify = createVuetify({  components,  directives,})
app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
