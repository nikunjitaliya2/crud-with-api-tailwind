import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router";
import './assets/main.css'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(Quasar, {
    plugins: {},
})
    app.use(Router);
app.mount('#app')
