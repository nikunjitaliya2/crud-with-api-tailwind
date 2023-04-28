import {ref} from 'vue';
import axios from 'axios';
import {APP_CONFIG} from "../enviroments/BaseUrl";

const url = APP_CONFIG.BASE_URL


export default function useProduct() {
    const productData = ref([]);
    const productError = ref('');
    const AllProductList = async () => {
        productData.value = [];
        productError.value = null;
        try {
            const res = await axios(`${url}/products`);
            productData.value = res.data
        } catch (err) {
            productError.value = err;
        }
    };

    const singleProduct = async (id) => {
        productData.value = [];
        productError.value = null
        try {
             const res = await axios(`${url}/products/${id}`)
            productData.value = res.data
        }
        catch (err){
            productError.value = err;
        }
    }

    const updateProduct = async (id, data) => {
        productData.value = [];
        productError.value = null;
        try {
            const config = {
                method: 'PUT',
                url: `${url}/products/${id}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(data)
            }
            const res = await axios(config);
        }
        catch (err){
            productError.value = err;
        }
    }

    const deleteProduct = async (id) => {
        productData.value = [];
        productError.value = null;
        try{
            const config = {
                method: 'DELETE',
                url: `${url}/products/${id}`,
                headers : {
                    'Content-Type': 'Application/json'
                },
            }
            const res = await axios(config)
            productData.value = res.data
        }
        catch (err) {
            productError.value = err;
        }
    }
    const AddProduct = async (formData) => {
        productData.value = [];
        productError.value = null;

        try{
            const config = {
                method: 'POST',
                url: `${url}/products`,
                headers : {
                    'Content-Type': 'Application/json'
                },
                data : JSON.stringify(formData)
            }
            const res = await axios(config)
            productData.value = res.data
        }
        catch (err) {
            productError.value = err;
        }
    }

    return {
        productError,
        productData,
        AllProductList,
        singleProduct,
        updateProduct,
        deleteProduct,
        AddProduct
    }
}