<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/vue/24/solid'

import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="opacity-50 p-5 flex items-center justify-between">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Student List</h1>
    <RouterLink :to="{name : 'add'}">
      <UserPlusIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>


  <div class="relative overflow-x-auto">
    <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center border-collapse border border-slate-500">
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
      <tr class="bg-white border-collapse border border-slate-500">
        <th scope="row" class="px-6 py-4 font-medium">
          1
        </th>
        <td class="px-6 py-4">
          Nikunj
        </td>
        <td class="px-6 py-4">
          Accessories
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-center">
            <RouterLink :to="{name : 'view', params : {id : 1}}">
              <EyeIcon class="text-red-600 h-6 w-6"/>
            </RouterLink>
            <PencilIcon class="text-blue-600 h-6 w-6 mx-4"/>
            <TrashIcon class="text-orange-600 h-6 w-6"/>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>
