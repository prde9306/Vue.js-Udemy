<template>
  <h3>{{finalCounter}}</h3>

</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "TheCounter",
  computed:{
    // counter(){
    //   return this.$store.state.counter;
    // } 이렇게 가져오는 대신에 아래처럼 쓸 수 있다.
    ...mapGetters(['finalCounter'])
  },
}
</script>

<style scoped>

</style>
