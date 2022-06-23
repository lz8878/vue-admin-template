import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { setupIcon } from './icons'

const app = createApp(App)

setupIcon(app)

app.use(router)
app.use(createPinia())

app.mount('#app')
