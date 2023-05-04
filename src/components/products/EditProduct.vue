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
  console.log('productData ---> ', productData.value);
  await back();
};
function back() {
  router.back();
}
</script>

<template>

  <div class="opacity-50 p-5 flex items-center justify-between">
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

  <div class="w-[80%] h-[60vh] mx-auto flex  flex-col container " v-else-if="productData">
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="updateProductDetails()">
      <div class="mb-4">

        <q-input outlined v-model.trim="productData.id" label="Product id" type="number" readonly
                 :rules="[
          val => !!val || 'Field is required',
          val => val.length > 1 || 'Please fill this field'
        ]" required/>
      </div>
      <div class="mb-4">


        <q-input
            ref="inputRef"
            outlined
            v-model="productData.title"
            label="Title"
            :rules="[val => !!val || 'Field is required']"
            required
        />
      </div>
      <div class="mb-4">
        <q-input outlined v-model="productData.price" type="number" label="Price"
                 :rules="[val => !!val || 'Field is required']"
                 required/>
      </div>
      <div class="mb-4">

        <q-input
            outlined
            label="Description"
            v-model="productData.description"
            type="textarea"
            :rules="[val => !!val || 'Field is required']"
            required
        />

      </div>
      <div class="mb-6">

        <q-input outlined v-model="productData.category" type="text" label="Category"
                 :rules="[val => !!val || 'Field is required']"
                 required/>

      </div>

      <div class="mb-6">

        <q-input outlined v-model="productData.image" type="text" label="Image url online only"
                 :rules="[val => !!val || 'Paste image url']"
                 required/>
      </div>
      <div class="flex items-center justify-between" >
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                  update
                </button>
        <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button" >
          <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
        </button>
      </div>
    </form>

  </div>
</template>