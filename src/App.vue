<script>
import {RouterView} from 'vue-router'
import {RouterLink} from 'vue-router'
import {onMounted, ref} from "vue";

export default {
  setup() {
    return {
      tab: ref('')
    }
  },
  mounted() {
    this.$store.commit('initialiseStore')
  },
  methods: {
    logout() {
      this.$store.commit('logout')
    }
  },
}
// onMounted(this.mounted())
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link v-if="!$store.state.email" to="/login">Login</router-link>
    <a v-if="$store.state.email" @click="logout">Logout</a>
  </nav>

  <div class="bg-purple-400 p-5 flex justify-between">
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/">Student Details</RouterLink>
    </h1>
    <h1 class="text-lg md:text-xl font-bold text-center text-white">
      <RouterLink to="/products">Product Details</RouterLink>
    </h1>
  </div>

  <RouterView/>

</template>

<style scoped>

</style>
