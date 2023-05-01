<template>
  <form  @submit="Submit" method="post">
    <label for="uname"><b>Email</b></label>
    <input type="email" id="uname" placeholder="Enter Email" v-model="form.email" required>
    <br><br>
    <label for="psw"><b>Password</b></label>
    <input type="password" id="psw" placeholder="Enter Password" v-model="form.password" required>
    <br><br>
    <button type="submit">Login</button>
  </form>
  <br>
  {{$store.state.email}}
</template>
<script>
export default {
  data() {
    return {
      form: {
        email:"",
        password:""
      }
    }
  },
  methods :{
    Submit(event){
      event.preventDefault()
      this.$store.commit('login',this.form.email)
    }
  }

}
</script>