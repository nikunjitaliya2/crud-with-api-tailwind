import {ref} from 'vue';
import axios from 'axios';
import {APP_CONFIG} from "../enviroments/BaseUrl";

const url = APP_CONFIG.BASE_URL

export default function useCart() {
    const cartData = ref([]);
    const cartError = ref('');
    const addToCart = async (data) => {
        cartData.value = [];
        cartError.value = null;
        try {
            const config = {
                method: 'POST',
                url: `${url}/cart`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(data)
            }

            console.log('config -->',config)
            const res = await axios(config)
            cartData.value = res.data
        }
        catch (err) {
            cartData.value = err;
        }
    }
    const ViewCartList = async () => {
        cartData.value = [];
        cartError.value = null;
        try {
            // console.log('config -->',config)
            const res = await axios(`${url}/cart`)
            cartData.value = res.data
        }
        catch (err) {
            cartData.value = err;
        }
    }

    const removeCart =  async (id) => {
        cartData.value = [];
        cartError.value = null;
        try{
            const config = {
                method: 'DELETE',
                url: `${url}/cart/${id}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
            }
            const res = await axios(config)
            cartData.value = res.data
        }
        catch (err) {
            cartError.value = err;
        }
    }

    return {
        cartData,
        cartError,
        addToCart,
        ViewCartList,
        removeCart
    }
}