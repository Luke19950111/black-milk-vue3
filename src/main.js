import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from './components/toast-plugin.js'

const app = createApp(App)
app.use(ToastPlugin)
app.mount('#app')
