import {defineStore} from 'pinia';
import {computed, ref} from "vue";

export const useProductStore = defineStore('productData',()=>{
    const products = [];
    let count = ref();
    const doubleCount = computed(() => count.value * 2)
    function increment() {
       return count.value++
    }
    return {products,count,doubleCount,increment}
})