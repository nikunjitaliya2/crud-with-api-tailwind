<script setup>
import router from "../../router";
import {ref} from "vue";

async function logout(){
  localStorage.removeItem('token');
  await router.push('/login')
  window.location.reload()
}

const isLoggedIn = ref(localStorage.getItem('token'))
</script>
<template>
  <div class="bg-purple-400 p-5 flex justify-between"  v-if="isLoggedIn">
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/">Student Details</RouterLink>
    </h1>
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/products">Product Details</RouterLink>
    </h1>
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <button @click="logout()">LOGOUT</button>
    </h1>
  </div>
</template>

<style scoped>

</style>