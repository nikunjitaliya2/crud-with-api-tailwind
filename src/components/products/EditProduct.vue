<script setup>
import {
  InformationCircleIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/vue/24/solid'
import {RouterLink, useRoute} from 'vue-router'
import router from "../../router";
import useProduct from "../../composables/productApi";
import {onMounted} from "vue";
const {params} = useRoute();

const {productData,productError,singleProduct,updateProduct} =useProduct();

onMounted(async () => {
   await singleProduct(params.id);
})
const updateProductDetails = async () => {
  await updateProduct(params.id, productData.value);
  // console.log('productData ---> ',productData)
  await back();
};
function back() {
  router.back();
}
</script>

<template>

  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Update Product</h1>
    <RouterLink to="/products">
      <ArrowUturnLeftIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>
  <div v-if="productError" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
    <p>
      {{ productError.message }}
    </p>
  </div>

  <div class="w-[80%] h-[60vh] justify-center mx-auto flex  flex-col" v-else-if="productData">
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="updateProductDetails()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Product id
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productId" type="number" placeholder="Enter Name" v-model.trim="productData.id">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Title
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Enter Name" v-model.trim="productData.title">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Price
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price" type="text" placeholder="Enter Name" v-model.trim="productData.price">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Change Description
        </label>
        <textarea
            class="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description" type="text" placeholder="Enter Name" v-model.trim="productData.description"></textarea>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Category
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="text" placeholder="Enter Email" v-model.trim="productData.category">
      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
          update
        </button>
        <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
          <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
        </button>
      </div>
    </form>

<!--    <div v-if="statesCode === 200">-->
<!--      <div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:text-green-400 dark:border-green-800" role="alert">-->
<!--        <InformationCircleIcon class=" h-6 w-6 mx-4 text-green-600"/>-->
<!--        <div>-->
<!--          <p class="font-bold">successfully Added User Details</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-else-if="updateError">-->
<!--      <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">-->
<!--        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>-->
<!--        <span class="sr-only">Info</span>-->
<!--        <div>-->
<!--          <p>Unable to Update Student: {{updateError.message}}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>