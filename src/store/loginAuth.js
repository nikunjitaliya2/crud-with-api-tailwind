import {defineStore} from 'pinia';
import axios from 'axios';
import {ref} from "vue";
import {APP_CONFIG} from "../enviroments/BaseUrl";
import router from "../router";
const loginApi = APP_CONFIG.LOGIN_AUTH;


export const useAuthStore = defineStore('LOGIN_USER', () => {
    const isLoggedIn = localStorage.getItem('token');
    const loginError = ref();

    async function setToken(token)
    {
        localStorage.setItem('token', token);
    }
    async function loginAuth(data) {
        try {
            const config = {
                method: 'POST',
                url: `${loginApi}/auth/login`,
                headers: {
                    'Content-Type': 'Application/json'
                },
                data: JSON.stringify(data)
            }
            const response = await axios(config);
            console.log('response ----->', response);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            await setToken(response.data.token);
            await router.push('/products')
        } catch (error) {
            this.loginError = error;
            console.log('this.loginError ---->', this.loginError);
        }
    }

    return {isLoggedIn,loginAuth,loginError};
});
