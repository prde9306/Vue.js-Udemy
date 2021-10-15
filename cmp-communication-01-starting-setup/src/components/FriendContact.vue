<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite"> Toggle Favorite</button>
    <button @click="toggleDetails"> Show Details</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
<!--    emit이렇게 해도 된다. -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props:[ 'name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props:{
    id:{
      type:String,
      required : true
    },
    name:{
      type:String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type:Boolean,
      required:false
      // default: '0',
      // validator: function (value){
      //   return value==='1' ||value==='0';
      // }
      //0과 1만 올 수 있게 하는 것
    }
  },
  emits:['toggle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id);
//      this.friendIsFavorite =!this.friendIsFavorite;
    }
  }
};
</script>
