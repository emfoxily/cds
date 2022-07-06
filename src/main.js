import { createApp } from 'vue'
import App from './App.vue'
import { Vue3Mq } from 'vue3-mq'


const app = createApp(App)

app.config.globalProperties.$scrolled = false;

app.use(Vue3Mq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity
    }
})

app.mount('#app')
