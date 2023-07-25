<script setup>
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import useCart from '../../composables/cardApi'
import {onMounted, ref} from "vue";

const {cartData, cartError, ViewCartList, removeCart} = useCart();
const cartClonedArrDetails = ref([])
onMounted(async () => {
  await ViewCartList();
  cartClonedArrDetails.value = [...cartData._rawValue];
});

const removeItem = async (id) => {
  await cartClonedArrDetails.value.map((item, index) => {
    if (item.id === id) {
      cartClonedArrDetails._rawValue.splice(index, 1);
      removeCart(id);
    }
  })
};
</script>
<template>

  <div class="opacity-50 p-5 flex items-center justify-between border-b-[1px] border-black">
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
  <div v-if="cartData.value?.length === 0"
       class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
    <p>
      No items Added to the cart
    </p>
  </div>

  <div class="container mx-auto">
    <div class="q-pa-md row items-start q-gutter-md justify-sm-start justify-lg-start justify-xl-start justify-2xl-start">
      <q-card class="my-card" flat bordered v-for="(cart ,i) in cartClonedArrDetails" :key="cart.id">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h6 q-mt-sm q-mb-xs">{{ cart.title }}</div>
            <div class="text-caption text-grey"> Price {{ cart.price }}</div>
            <div class="text-overline">Rate {{ cart.rating.rate }}</div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <img style="aspect-ratio: 3/3; object-fit: contain"
                :src="`${cart.image}`" class="col w-6 rounded-borders"
            />
          </q-card-section>
        </q-card-section>
        <q-separator/>

        <q-card-actions>
          <q-btn flat color="primary" @click="removeItem(cart.id)">
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


<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  max-width: 360px;
}
</style>