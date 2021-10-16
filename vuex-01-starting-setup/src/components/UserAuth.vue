<template>
  <button @click="login" v-if="!isAuth">LogIn</button>
  <button @click="logout" v-if="isAuth">LogOut </button>

</template>

<script>
export default {
  name: "UserAuth",
  methods:{
    login(){
      this.$store.dispatch('login');
    },
    logout(){
      this.$store.dispatch('logout');
    }

  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuthenticated
    }
  }
}
</script>

<style scoped>

</style>
