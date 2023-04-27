<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->

  <!-- <RouterLink to="/" class="m-2">Home</RouterLink>
  <RouterLink to="/edit/1" class="m-2">Edit</RouterLink>
  <RouterLink to="/view/1" class="m-2">View</RouterLink>
  <RouterLink to="/add" class="m-2">Add</RouterLink> -->

  <div class="bg-purple-400 p-5">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-white">Student Details</h1>
  </div>

  <RouterView/>

</template>

<style scoped>

</style>
