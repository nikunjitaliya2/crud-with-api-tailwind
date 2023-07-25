import {APP_CONFIG} from "../enviroments/BaseUrl";
import {ref} from "vue";
import axios from "axios";

const loginApi = APP_CONFIG.LOGIN_AUTH;

export default function useLogin() {
    const isLoggedIn = ref('')
    const login = async (data) => {
        try {
            const config = {
                method:'POST',
                url: `${loginApi}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(data)
            }
            const res = await axios(config);

            console.log('api login called response--->', res)
        }catch (err) {
            console.error('error found in login api --->', err);
        }
    }

    const registerApi = async (data) => {
       try {
            const config = {
                method:'POST',
                url: `${loginApi}/users`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(data)
            }
           const res = await axios(config);
           console.log('response ---->',res)
       }
       catch (err) {
           console.log('error found while register ---->', err);
       }
    }
    return {
        login,
        isLoggedIn,
        registerApi
    }
}

