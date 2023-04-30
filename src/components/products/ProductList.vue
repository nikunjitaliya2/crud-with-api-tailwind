<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
  InformationCircleIcon,
    UserGroupIcon
} from '@heroicons/vue/24/solid'
import useProduct from '../../composables/productApi';
import useCart from '../../composables/cardApi';
import {onMounted} from "vue";

const {AllProductList, productError, productData, deleteProduct} = useProduct();
const {addToCart} = useCart();

onMounted(AllProductList)

const deleteStudent = async (id) => {
  await deleteProduct(id);
  await AllProductList()
}
const cart = async (data) => {
  await addToCart(data)
};



</script>
<template>
  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto border-b-[1px] border-black">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Product List</h1>
   <div class="flex mx-2 gap-4">
     <RouterLink :to="{name : 'cart'}">
       <UserGroupIcon class="text-black w-6 h-6"/>
     </RouterLink>
     <RouterLink :to="{name : 'addproduct'}">
       <UserPlusIcon class="text-black w-6 h-6"/>
     </RouterLink>
   </div>
  </div>
  <div class="container mx-auto">
    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-card class="my-card" flat bordered  v-for="(product ,i) in productData" :key="product.id">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h6 q-mt-sm q-mb-xs">{{ product.title }}</div>
            <div class="text-caption text-grey"> Price {{ product.price }}</div>
            <div class="text-overline">Rate {{ product.rating.rate }}</div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
                :src="`${product.image}`" class="col w-6 rounded-borders"
            />
          </q-card-section>
        </q-card-section>
        <q-separator/>

        <q-card-actions>
          <q-btn flat color="primary">
            <RouterLink :to="{name : 'products-edit', params : {id : product.id}}">EDIT  </RouterLink>
          </q-btn>
          <q-btn flat color="primary" @click="cart( product)">
              Add to Cart
          </q-btn>
          <q-btn flat color="negative" @click="deleteStudent(product.id)">
            DELETE
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<style>
.my-card {
  width: 100%;
  height: 100%;
  max-width: 400px;
}
</style>