<script setup>
import {
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import {RouterLink} from 'vue-router'

</script>

<template>

  <div class="opacity-50 p-5 flex items-center justify-between">
    <h1 class="text-xl md:text-3xl font-bold text-center uppercase">All Student Details</h1>
    <RouterLink :to="{name : 'list'}">
      <ArrowUturnLeftIcon class="text-black w-6 h-6"/>
    </RouterLink>
  </div>
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
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>
