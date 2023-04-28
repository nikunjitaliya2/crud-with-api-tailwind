<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/solid'
import {RouterLink} from 'vue-router'
import useStudent from '../../composables/studentApi'
import {onMounted} from "vue";

const {AllStudentList, studentData, error, DeleteStudentDetails, statesCode,deleteError} = useStudent();
onMounted(AllStudentList)
const deleteStudent = async (id) => {
  if (!window.confirm('Are you sure!!')) {
    return;
  }
  await DeleteStudentDetails(id)
  await AllStudentList()
}
</script>

<template>
  <div class="opacity-50 p-5 flex items-center justify-between container mx-auto">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Student List</h1>
    <RouterLink :to="{name : 'add'}">
      <UserPlusIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>


  <div class="relative overflow-x-auto">
    <div v-if="error" class="flex justify-center items-center bg-red-100 text-5xl h-[83vh] text-red-600">
      <p>
        {{ error.message }}
      </p>
    </div>
    <table v-else-if="studentData"
           class="w-full text-sm text-left text-center border-collapse border border-slate-500">
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
        <th scope="col" class="px-6 py-3">
          ACTION
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-collapse border border-slate-500" v-for="({studentName,email,id},i) in studentData"
          :key="id">
        <th scope="row" class="px-6 py-4 font-medium">
          {{ i + 1 }}
        </th>
        <td class="px-6 py-4">
          {{ studentName }}
        </td>
        <td class="px-6 py-4">
          {{ email }}
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-center">
            <RouterLink :to="{name : 'view', params : {id : id}}">
              <EyeIcon class="text-yellow-600 h-6 w-6"/>
            </RouterLink>
            <RouterLink :to="{name : 'edit', params : {id : id}}">
              <PencilIcon class="text-blue-600 h-6 w-6 mx-4"/>
            </RouterLink>
            <TrashIcon @click="deleteStudent(id)" class="text-red-600 h-6 w-6 cursor-pointer"/>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-if="statesCode === 200">
      <div class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:text-green-400 dark:border-green-800" role="alert">
        <InformationCircleIcon class=" h-6 w-6 mx-4 text-green-600"/>
        <div>
          <p class="font-bold">successfully removed</p>
        </div>
      </div>
    </div>

    <div v-else-if="deleteError">
      <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Info</span>
        <div>
          <p>Unable to Delete Student: {{deleteError}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
