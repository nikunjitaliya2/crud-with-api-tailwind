<script setup>
import {reactive} from 'vue'
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import router from "../../router";

const formData = reactive({
  studentName: '',
  Email: ''
})
const handleStudentForm = async () => {
  console.log("form details -->", formData);
}

function back() {
  router.back()
}

</script>

<template>
  <div class="opacity-50 p-5 flex items-center justify-center ">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Add Student Detail</h1>
  </div>


  <div class="w-[80%] h-[60vh] justify-center mx-auto flex  flex-col">
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleStudentForm()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Student Name
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Enter Name" v-model.trim="formData.studentName">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Email
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="email" placeholder="Enter Email" v-model.trim="formData.Email">
      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
          ADD
        </button>
        <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
          <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
  </div>

</template>

<style scoped>

</style>
