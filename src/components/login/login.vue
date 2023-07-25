<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
  InformationCircleIcon,
  ArrowUturnLeftIcon
} from '@heroicons/vue/24/solid'
import {reactive} from "vue";
import {useAuthStore} from "../../store/loginAuth.js";
import router from "../../router";

const store = useAuthStore();

const loginValue = reactive({
  username: 'mor_2314',
  password: '83r5^_',
})
const loginForm = async () => {
  await store.loginAuth(loginValue)
  window.location.reload();
}
</script>
<template>
  <div class="container mx-auto h-[80vh] flex justify-center flex-col">
    <div class="opacity-50 p-5 flex items-center justify-center ">
      <h1 class="text-xl md:text-3xl font-bold text-center uppercase">Login</h1>
    </div>
    <form class=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="loginForm()">
      <div class="mb-4">

        <q-input outlined v-model.trim="loginValue.username" label="Email" type="text"
                 :rules="[
          val => !!val || 'Field is required',
          val => val.length > 1 || 'Please fill this field'
        ]" required/>
      </div>
      <div class="mb-4">

        <q-input
            ref="inputRef"
            type="password"
            outlined
            v-model.trim="loginValue.password"
            label="Password"
            :rules="[val => !!val || 'Field is required']"
            required
        />
      </div>
      <div class="flex justify-between">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
          Login
        </button>

        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
          <RouterLink to="/registration">Sign up</RouterLink>
        </button>
      </div>
    </form>
  </div>
</template>

