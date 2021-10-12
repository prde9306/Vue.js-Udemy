const app = Vue.createApp({
  data(){
    return{
      number:0,
    }
  },
  methods:{
    add(value){
      return this.number+=value;
    }
  },
  computed:{
    result(){
      if(this.number<37){
        return'Not';
      }else if(this.number===37){
        return this.number;
      }else{
        return 'Too much';
      }
    }
  },
  watch:{
    result(){
      const that =this;
      setTimeout(function (){
        that.number =0;
      }, 5000)
    }
  }

});

app.mount('#assignment');
