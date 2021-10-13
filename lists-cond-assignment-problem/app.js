const app = Vue.createApp({

  data(){
    return{
      task:[],
      job:'',
      isBoolean: true

    }
  },
  methods:{
    addTask(){
      this.task.push(this.job)
    },
    isShown(){
      this.isBoolean =!this.isBoolean;
    }

  }


});
app.mount('#assignment');
