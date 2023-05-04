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
import router from "../../router";
import {Notify} from "quasar";
import useLogin from '../../composables/loginApi';

const {registerApi} = useLogin();

const registerForm = reactive({
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: ''
  },
  address: {
    city: '',
    street: '',
    number: '',
    zipcode: '',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496'
    }
  },
  phone: ''
})

const register = async () => {
  await registerApi(registerForm);
  await notification()
};

const back = () => {
  router.back();
}
const notification = () => {
  Notify.create({
    type: 'positive',
    message: 'Successfully register',
    position: 'top',
  })
}

</script>
<template>
 <div class="h-auto">
   <div class="container mx-auto opacity-50 p-5 flex items-center justify-center bg-accent text-white">
     <h1 class="text-xl md:text-3xl font-bold text-center uppercase ">Sign Up</h1>
   </div>
<!--   <div class="container mx-auto grid h-screen place-items-center ">-->
   <div class="container mx-auto mt-24">
     <form class=" bg-white drop-shadow-2xl rounded px-8 pt-6 pb-8" @submit.prevent="register">
       <div class="row gap-4 ">
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input
               ref="inputRef"
               outlined
               v-model="registerForm.name.firstname"
               label="First Name"
               :rules="[val => !!val || 'Field is required']"
               required
           />
         </div>
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input
               ref="inputRef"
               outlined
               v-model="registerForm.name.lastname"
               label="Last Name"
               :rules="[val => !!val || 'Field is required']"
               required
           />
         </div>
       </div>
       <div class="row gap-4 ">
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input outlined v-model.trim="registerForm.email" label="Enter Email" type="email"
                    :rules="[
          val => !!val || 'Field is required',
          val => val.length > 1 || 'Please fill this field'
        ]" required/>
         </div>
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input
               ref="inputRef"
               outlined
               v-model="registerForm.username"
               label="username"
               :rules="[val => !!val || 'Field is required']"
               required
           />
         </div>
       </div>
       <div class="">
         <q-input outlined v-model="registerForm.password" type="password" label="Password"
                  :rules="[val => !!val || 'Field is required']"
                  required/>
       </div>
       <div class="">
         <q-input
             outlined
             label="Description"
             v-model="registerForm.address.city"
             type="Address"
             :rules="[val => !!val || 'Field is required']"
             required
         />

       </div>
       <div class="row gap-4 ">
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input outlined v-model="registerForm.address.street" type="text" label="Address"
                    :rules="[val => !!val || 'Field is required']"
                    required/>
         </div>
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input outlined v-model="registerForm.address.zipcode" type="number" label="Zip code"
                    :rules="[val => !!val || 'Enter Total Available Product Peaces']"
                    required/>
         </div>
         <div class="col-xs-12 col-sm-12 col-md">
           <q-input outlined v-model="registerForm.phone" type="text" label="Phone Number"
                    :rules="[val => !!val || 'Enter Total Available Product Peaces']"
                    required/>
         </div>
       </div>
       <div class="flex items-center justify-between">
         <button
             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             type="submit">
           Add Product
         </button>
         <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
           <ArrowUturnLeftIcon @click="back()" title="BACK" class="text-blue-600 cursor-pointer text-black w-6 h-6"/>
         </button>
       </div>
     </form>
   </div>
 </div>
</template>