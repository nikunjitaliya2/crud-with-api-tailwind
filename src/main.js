import {createApp} from 'vue'
import App from './App.vue'
import Router from "./router";
import './assets/main.css'
import {Notify, Quasar} from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
import {createStore} from "vuex";
import auth from "./store";
const app = createApp(App)

app.use(Quasar, {
    plugins: {
        Notify
    },
    config : {
        notify: { /* look at QuasarConfOptions from the API card */ }
    }
})
app.use(auth)
app.use(Router);
app.mount('#app')
