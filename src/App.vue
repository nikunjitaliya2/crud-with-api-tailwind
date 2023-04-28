<script setup>
import {RouterView} from 'vue-router'
import {RouterLink} from 'vue-router'
</script>

<template>
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

  <!-- <RouterLink to="/" class="m-2">Home</RouterLink>
  <RouterLink to="/edit/1" class="m-2">Edit</RouterLink>
  <RouterLink to="/view/1" class="m-2">View</RouterLink>
  <RouterLink to="/add" class="m-2">Add</RouterLink> -->

  <div class="bg-purple-400 p-5 flex justify-between">
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/">Student Details</RouterLink>
    </h1>
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/products">Product Details</RouterLink>
    </h1>
  </div>

  <RouterView/>

</template>

<style scoped>

</style>
