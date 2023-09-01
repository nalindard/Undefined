import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VWave from 'v-wave'
import VueDragscroll from "vue-dragscroll";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VWave,
    {
        color: 'cyan',
        initialOpacity: 0.5,
        easing: 'ease-in',
    })
app.use(VueDragscroll)

app.mount('#app')
