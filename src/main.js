import {createApp} from 'vue'
import App from './App.vue'
import Router from "./router";
import './assets/main.css'
import {Notify, Quasar} from 'quasar'
import {createPinia} from 'pinia';
const pinia = createPinia();
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
const app = createApp(App)

app.use(Quasar, {
    plugins: {
        Notify
    },
    config : {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
})
app.use(pinia);
app.use(Router);

app.mount('#app')
