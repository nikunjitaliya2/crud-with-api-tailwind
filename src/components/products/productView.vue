
<template>
  <div class="q-pa-md row items-start q-gutter-md justify-start">
    <q-card class="my-card" flat bordered v-for="(product ,i) in productDetails" :key="product.id">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h6 q-mt-sm q-mb-xs">{{ product.title }}</div>
          <div class="text-caption text-grey"> Price {{ product.price }}</div>
          <div class="text-overline">Rate {{ product.rating?.rate }}</div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <img style="aspect-ratio: 3/3; object-fit: contain"
              :src="`${product.image}`" class="col w-6 rounded-borders"
          />
        </q-card-section>
      </q-card-section>
      <q-separator/>

      <q-card-actions>
        <q-btn flat color="primary">
          <RouterLink :to="{name : 'products-edit', params : {id : product.id}}">EDIT</RouterLink>
        </q-btn>
        <q-btn flat color="primary" @click="$emit('AddToCart',product)">
          Add to Cart
        </q-btn>
        <q-btn flat color="negative" @click="deleteStudent(product.id)">
          DELETE
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>


<script setup>

import {Notify} from "quasar";
import useProduct from "../../composables/productApi";
import useCart from "../../composables/cardApi";
const {deleteProduct} = useProduct();
const {removeCart} = useCart();


const props = defineProps(
    ['productDetails','cartDetails']
);


const deleteStudent = async (id) => {

  await props.cartDetails.map((item, index) => {
    if (item.id === id) {
      removeCart(id);
      props.cartDetails.splice(index, 1);
    }
  })
  await props.productDetails.map(async (item, index) => {
    if (item.id === id) {
      props.productDetails.splice(index, 1)
      await deleteProduct(id);
    }
  })
  Notify.create({
    type: 'negative',
    message: 'Product will removed from every where',
    position: "top",
  })
}
</script>



<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  max-width: 360px;
}
</style>