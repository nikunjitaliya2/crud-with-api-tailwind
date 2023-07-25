<script setup>
import {reactive} from 'vue'
import {
  ArrowUturnLeftIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/solid'
import router from "../../router";
import useStudent from "../../composables/studentApi";
const {studentData, createStudent, error,statesCode} = useStudent()

const formData = reactive({
  studentName: '',
  email: ''
})


const handleStudentForm = async () => {
  await createStudent(formData);
  // await back();
  if(statesCode.value === 201) {
    document.getElementById('handlerForm').reset()
  }
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
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="handlerForm" @submit.prevent="handleStudentForm()">
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
            id="password" type="email" placeholder="Enter Email" v-model.trim="formData.email">
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

    <div v-if="statesCode === 201">
      <div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:text-green-400 dark:border-green-800" role="alert">
        <InformationCircleIcon class=" h-6 w-6 mx-4 text-green-600"/>
        <div>
          <p class="font-bold">successfully Added User Details</p>
        </div>
      </div>
    </div>
    <div v-else-if="error">
      <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <div>
          <p>Unable to Add Student: {{error.message}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
