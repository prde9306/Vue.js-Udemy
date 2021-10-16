<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
  <button @click="increment1({value:10})"> Add10 </button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>

</template>

<script>
import {mapActions} from 'vuex';


import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter";
import FavoriteValue from "@/components/FavoriteValue";
import UserAuth from "@/components/UserAuth";


export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    // addOne() {
    // //   //this.$store.commit('increment1', {value: 10});
    // //   //밑에처럼 해도 된다.
    // //   this.$store.dispatch({
    // //     type: 'increment',
    // //     value: 10
    // //   });
    // // },
    ...mapActions(['increment1'])
    // ...mapActions({
    //   inc: "increment1",
    //   increase:'increment'
    // })
  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuthenticated
    }
  }

};

</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
