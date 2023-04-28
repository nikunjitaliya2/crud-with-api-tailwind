<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
  InformationCircleIcon,
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import {reactive} from "vue";
import router from "../../router";
import useProduct from '../../composables/productApi';
const {AddProduct} = useProduct();


const addProduct = reactive({
  id: '',
  title: '',
  price: '',
  description: '',
  category: '',
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: '',
    count: ''
  },
})
const addNewProduct = async () => {
  // console.log('addProduct --->', addProduct)
  await AddProduct(addProduct);
};

const back = () => {
    router.back();
}

</script>
<template>
  <div class="opacity-50 p-5 flex items-center justify-center ">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Add Product Details</h1>
  </div>
  <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="addNewProduct()">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="productId">
        Product id
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productId" type="number" placeholder="Enter Id" v-model.trim="addProduct.id">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Title
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Enter Title" v-model.trim="addProduct.title">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
        Price
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price" type="text" placeholder="Enter Price" v-model.trim="addProduct.price">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <textarea
          class="shadow appearance-none border rounded w-full py-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description" type="text" placeholder="Enter Description" v-model.trim="addProduct.description"></textarea>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
        Category
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="category" type="text" placeholder="Enter Category" v-model.trim="addProduct.category">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">
        Rating
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="rating" type="number" placeholder="Enter rate between 1 to 5" v-model.trim="addProduct.rating.rate">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">
        Total Available Product Peaces
      </label>
      <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="count" type="number" placeholder="Enter Product Count" v-model.trim="addProduct.rating.count">
    </div>
    <div class="flex items-center justify-between">
      <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
        Add Product
      </button>
      <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
        <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
      </button>
    </div>
  </form>
</template>