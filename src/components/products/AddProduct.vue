<script setup>
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import {reactive} from "vue";
import router from "../../router";
import useProduct from '../../composables/productApi';
import {Notify} from "quasar";

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
  await notification();
};

const back = () => {
  router.back();
}
const notification = (id) => {
  Notify.create({
    type: 'positive',
    message: 'Product Will Successfully Added',
    position: 'top',
    actions: [
      {
        label: 'View', color: 'yellow', handler: () => {
          router.push('/products')
        }
      },
      {
        label: 'Dismiss', color: 'white', handler: () => { /* ... */
        }
      }
    ]
  })
}

</script>
<template>
  <div class="opacity-50 p-5 flex items-center justify-center ">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Add Product Details</h1>
  </div>
  <div class="w-[80%] h-[60vh] mx-auto flex  flex-col container">
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="addNewProduct()">
<!--      <div class="mb-1">-->

<!--        <q-input outlined v-model.trim="addProduct.id" label="Product id" type="number" readonly-->
<!--                 :rules="[-->
<!--          val => !!val || 'Field is required',-->
<!--          val => val.length > 1 || 'Please fill this field'-->
<!--        ]" required/>-->
<!--      </div>-->
      <div class="mb-1">
        <q-input
            ref="inputRef"
            outlined
            v-model="addProduct.title"
            label="Title"
            :rules="[val => !!val || 'Field is required']"
            required
        />
      </div>
      <div class="mb-1">
        <q-input outlined v-model="addProduct.price" type="number" label="Price"
                 :rules="[val => !!val || 'Field is required']"
                 required/>
      </div>
      <div class="mb-1">

        <q-input
            outlined
            label="Description"
            v-model="addProduct.description"
            type="textarea"
            :rules="[val => !!val || 'Field is required']"
            required
        />

      </div>
      <div class="mb-1">
        <q-input
            outlined
            label="Image"
            v-model="addProduct.image"
            readonly
            :rules="[val => !!val || 'Field is required']"
            required/>
      </div>
      <div class="mb-1">
        <q-input
            outlined
            label="Rate"
            type="text"
            v-model="addProduct.rating.rate"
            :rules="[val => !!val || 'Field is required']"
            required/>
      </div>
      <div class="mb-1">
        <q-input outlined v-model="addProduct.category" type="text" label="Category"
                 :rules="[val => !!val || 'Field is required']"
                 required/>
      </div>
      <div class="mb-1">
        <q-input outlined v-model="addProduct.rating.count" type="number" label="Enter Product Counts"
                 :rules="[val => !!val || 'Enter Total Available Product Peaces']"
                 required/>

      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="!(addProduct.id && addProduct.description && addProduct.rating.count && addProduct.price && addProduct.category)">
          Add Product
        </button>
        <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
          <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
        </button>
      </div>
    </form>
  </div>
</template>