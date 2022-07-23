import { createApp } from 'vue'
import App from './App.vue'
import { Vue3Mq } from 'vue3-mq'


const app = createApp(App)

app.config.globalProperties.$scrolled = false;

app.use(Vue3Mq, {
    preset: 'bootstrap5'
})

app.mount('#app')
