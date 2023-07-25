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
import {Notify} from 'quasar'
import {onMounted, ref} from "vue";
import router from "../../router";
import ProductView from './productView.vue'

const {AllProductList, productError, productData, deleteProduct} = useProduct();
const {addToCart, cartError, cartStatus, ViewCartList, cartData, removeCart} = useCart();

const ProductClonedArr = ref([])
const cartClonedArr = ref([])

onMounted(async () => {
  await AllProductList().then(() => {
    ProductClonedArr.value = [...productData._rawValue]
  });
  await ViewCartList().then(() => {
    cartClonedArr.value = [...cartData._rawValue];
  });
});

const cart = async (data) => {
  await addToCart(data);
  await notification(data.id)
};

const notification = (id) => {

  if (cartStatus.value === 201) {
    Notify.create({
      type: 'positive',
      message: 'Product Will Added in Cart',
      position: 'top',
      actions: [
        {
          label: 'View in cart', color: 'yellow', handler: () => {
            router.push('/cart')
          }
        },
        {
          label: 'Dismiss', color: 'white', handler: () => { /* ... */
          }
        }
      ]
    })
    cartStatus.value = ''
  } else {
    Notify.create({
      type: 'negative',
      message: 'Already exited in the cart',
      position: 'top',
      actions: [
        {
          label: 'remove from cart', color: 'yellow', handler: async () => {
            await removeCart(id);
          }
        },
        {
          label: 'Dismiss', color: 'white', handler: () => {
          }
        }
      ]
    })
  }
};

</script>


<template>

  <div>
    <div class="opacity-50 p-5 flex items-center justify-between border-b-[1px] border-black">
      <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Product List</h1>
      <div class="flex mx-2 gap-4">
        <RouterLink :to="{name : 'cart'}">

          <q-btn dense color="black" square icon="list" class="q-ml-md">
            <q-badge color="red" floating>{{ cartData.length }}</q-badge>
          </q-btn>
        </RouterLink>
        <RouterLink :to="{name : 'addproduct'}">
          <q-btn dense color="black" square icon="add" class="q-ml-md">
          </q-btn>
        </RouterLink>
      </div>
    </div>
    <div class="container mx-auto ">
      <ProductView :cartDetails="cartClonedArr" :productDetails="ProductClonedArr" @AddToCart="cart"></ProductView>
    </div>
  </div>
<!--  <div v-else="productError" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">-->
<!--    <p>-->
<!--      {{ productError.message }}-->
<!--    </p>-->
<!--  </div>-->
</template>
