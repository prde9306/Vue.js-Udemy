<template>
  <form @submit.prevent="submitData">
    <div>
    <label>Name</label>
    <input type="text" v-model="enteredName">
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  data(){
    return{
    emits:['add-contact'],
      data(){
      return{
        enteredName:'',
        enteredPhone:'',
        enteredEmail:''
      };
      }
    }
  },
  methods:{
    submitData(){
    this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
    )
    }
  }
}
</script>

<style scoped>

</style>
