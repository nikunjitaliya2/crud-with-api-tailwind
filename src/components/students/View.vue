<script setup>
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import {RouterLink} from 'vue-router'

import useStudent from '../../composables/studentApi'
import {onMounted} from "vue";
import {useRoute} from 'vue-router'
const {singleStudent, studentData, error} = useStudent();
const route = useRoute();
onMounted(async ()=>{
  await singleStudent(route.params.id);
});

</script>

<template>

  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Student Details</h1>
    <RouterLink :to="{name : 'list'}">
      <ArrowUturnLeftIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>

  <div v-if="error" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
    <p>
      {{ error.message }}
    </p>
  </div>
  <table v-else-if="studentData"
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center border-collapse border border-slate-500 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3">
        NO
      </th>
      <th scope="col" class="px-6 py-3">
        NAME
      </th>
      <th scope="col" class="px-6 py-3">
        EMAIL
      </th>
    </tr>
    </thead>
    <tbody>
    <tr class="bg-white border-collapse border border-slate-500" >
      <th scope="row" class="px-6 py-4 font-medium">
        {{ studentData.id }}
      </th>
      <td class="px-6 py-4">
        {{ studentData.studentName }}
      </td>
      <td class="px-6 py-4">
        {{ studentData.email }}
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>
