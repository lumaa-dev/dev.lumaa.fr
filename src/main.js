import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import state from './store/index'

createApp(App).use(i18n).use(state).use(router).mount('#app')
