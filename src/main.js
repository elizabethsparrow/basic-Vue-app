import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/router'

import PrimeVue from 'primevue/config'
// FIXME: установи тему, которая больше подходит (https://primevue.org/setup)
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import primevueConfig from './app/libs/primevue.config'

const app = createApp(App)

app.use(createPinia()).use(router).use(PrimeVue)

// импорт компонентов для всего проекта
primevueConfig.forEach((el) => {
  app.use(el.name, el.component)
})

app.mount('#app')
