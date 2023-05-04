<script setup>
import router from "../../router";
import {ref} from "vue";

async function logout() {
  localStorage.removeItem('token');
  await router.push('/login')
  window.location.reload()
}

const tab = ref('')

const isLoggedIn = ref(localStorage.getItem('token'))
</script>
<template>
<!--  <div class="bg-purple-400 p-5 flex justify-between container mx-auto" v-if="isLoggedIn">-->
<!--    <h1 class="text-lg md:text-xl font-bold text-center text-white">-->
<!--      <RouterLink to="/">Student Details</RouterLink>-->
<!--    </h1>-->
<!--    <h1 class="text-lg md:text-xl font-bold text-center text-white">-->
<!--      <RouterLink to="/products">Product Details</RouterLink>-->
<!--    </h1>-->
<!--    <h1 class="text-lg md:text-xl font-bold text-center text-white">-->
<!--      <button @click="logout()">LOGOUT</button>-->
<!--    </h1>-->
<!--  </div>-->

  <div class="" v-if="isLoggedIn">
    <q-toolbar class="bg-red-400 p-10 text-white">
      <q-btn flat>
        <RouterLink to="/">ABC COMPANY</RouterLink>
      </q-btn>
      <q-space/>

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1">
          <RouterLink to="/">Home</RouterLink>
        </q-tab>
        <q-tab name="tab2">
          <RouterLink to="/products">Product Details</RouterLink>
        </q-tab>
        <q-tab name="tab3" @click="logout()" label="LOGOUT">
        </q-tab>
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<style scoped>

</style>