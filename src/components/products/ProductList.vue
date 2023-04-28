<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/solid'
import useProduct from '../../composables/productApi';
import {onMounted} from "vue";


const {AllProductList, productError, productData, deleteProduct} = useProduct();
onMounted(AllProductList)

const deleteStudent = async (id) => {
  console.log('this is deleted id ---> ', id);
  await deleteProduct(id);
  await AllProductList()
}

</script>
<template>
  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto border-b-[1px] border-black">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Product List</h1>
    <RouterLink :to="{name : 'addproduct'}">
      <UserPlusIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>
  <div class="container mx-auto">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered  v-for="({title,price,rating,image, id},i) in productData" :key="id">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h6 q-mt-sm q-mb-xs">{{ title }}</div>
            <div class="text-caption text-grey"> Price {{ price }}</div>
            <div class="text-overline">Rate {{ rating.rate }}</div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
                :src="`${image}`" class="col w-6 rounded-borders"
            />
          </q-card-section>
        </q-card-section>

        <q-separator/>

        <q-card-actions>
          <q-btn flat color="primary">

            <RouterLink :to="{name : 'products-edit', params : {id : id}}">EDIT  </RouterLink>
          </q-btn>
          <q-btn flat color="negative" @click="deleteStudent(id)">
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