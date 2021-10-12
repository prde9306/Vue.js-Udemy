const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:''
    };
  },
  methods: {
    //여기 counter를 움직여도 이 함수에서 반응을 한다. vue가 어느 함수를 건드리는지 모르기 때문 - 성능 문제 발생 가능
    // 따라서 무조건 함수로 이렇게 설정하는 게 아니라 대안은 computed를 이용해서 연산 등 작업하기
    // outputFullname(){
    //   if(this.name===''){
    //     return '';
    //   }
    // return this.name + ' '+ 'ASDJFLSD';
    // },
    setName(event) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  },
  computed:{
    fullname(){
      if(this.name===''|| this.lastName ===''){
        return '';
      }
      return this.name + ' '+ this.lastName;
    }
  },
  // watch:{
  //   // data에서 name이 변경될 때 여기서 반응 여기서 value는 name data의미 this.name
  //   name(value){
  //     if(value===''){
  //       this.fullname = '';
  //     }else {
  //       this.fullname = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value){
  //     if(value===''){
  //       this.fullname = '';
  //     }else {
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
  // }
  watch:{
    counter(value){
      if(value>50){
        this.counter = 0;
      }
    }
  }

});

app.mount('#events');
