import {ref} from 'vue';
import axios from 'axios';
import {APP_CONFIG} from "../enviroments/BaseUrl";

const url = APP_CONFIG.BASE_URL

export default function useCart() {
    const cartData = ref([]);
    const cartError = ref('');
    const cartStatus = ref('');
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
            const res = await axios(config)
            cartData.value = res.data;
            cartStatus.value = res.status
        }
        catch (err) {
            cartError.value = err;
        }
    }
    const ViewCartList = async () => {
        cartData.value = [];
        cartError.value = null;
        try {
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
        cartStatus,
        cartData,
        cartError,
        addToCart,
        ViewCartList,
        removeCart
    }
}