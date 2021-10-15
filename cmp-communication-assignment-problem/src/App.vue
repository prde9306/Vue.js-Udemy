<template>
<section>
  <active-user :username="user.name" :userage="user.age"> </active-user>
  <user-data @set-data="setUserData"> </user-data>
</section>
</template>

<script>
import ActiveUser from "@/components/ActiveUser";
import UserData from "@/components/UserData";
export default {
  name: "App.vue",
  components: {UserData, ActiveUser},
  data(){
    return{
      user:{
        name:'kimsung',
        age:33
      }
    }
  },
  methods:{
    setUserData(name, age){
      this.user={
        name:name,
        age:age
      }
    }
  }

}
</script>

<style scoped>

</style>
