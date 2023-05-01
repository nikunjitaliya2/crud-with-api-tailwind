<script setup>
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import useCart from '../../composables/cardApi'
import {onMounted} from "vue";

const {cartData, cartError, ViewCartList,removeCart} = useCart();
onMounted(ViewCartList);

const removeItem = async (id,cart) => {
  await removeCart(id, cart);
  await ViewCartList();
}


</script>
<template>

  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto border-b-[1px] border-black">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Your Cart</h1>
      <RouterLink :to="{name : 'products'}">
        <ArrowUturnLeftIcon class="text-black w-6 h-6"/>
      </RouterLink>
  </div>

  <div v-if="cartError" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
    <p>
      {{ cartError.message }}
    </p>
  </div>
  <div v-if="cartData.value?.length === 0" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
    <p>
      No items Added to the cart
    </p>
  </div>

  <div class="container mx-auto">
    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-card class="my-card" flat bordered  v-for="(cart ,i) in cartData" :key="cart.id">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h6 q-mt-sm q-mb-xs">{{ cart.title }}</div>
            <div class="text-caption text-grey"> Price {{ cart.price }}</div>
            <div class="text-overline">Rate {{ cart.rating.rate }}</div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
                :src="`${cart.image}`" class="col w-6 rounded-borders"
            />
          </q-card-section>
        </q-card-section>
        <q-separator/>

        <q-card-actions>
          <q-btn flat color="primary" @click="removeItem(cart.id,cart)">
            remove from cart
          </q-btn>
          <q-btn flat color="positive">
            Buy
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>