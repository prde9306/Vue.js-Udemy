const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
    addCount(){
      //여기서는 return안해줘도 된다.
      this.counter= this.counter + 1;
    },
    minusCount(num){
       this.counter = this.counter - num;
    },
    submitForm(event){
      event.preventDefault();
      alert('Submitted!');
    }
  }
});

app.mount('#events');
