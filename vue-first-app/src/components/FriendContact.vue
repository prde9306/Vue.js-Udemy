<template>
  <section>
    <li>
      <h2>{{freind.name}}</h2>
      <button @click="toggleDetails">Show Details</button>
    </li>
    <ul>
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FriendContact",
  data(){
    return{
      detailsAreVisible: false,
      firend:{
        id:
      }
    }
  },
  methods:{
    toggleDetails(){

    }

  }
}
</script>

<style scoped>

</style>
