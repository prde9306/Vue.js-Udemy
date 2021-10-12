const app = Vue.createApp({
  data() {
    return {
      output: '',
      userInput: '',
      confirmedInput:''
    };
  },
  methods: {
    showAlert() {
      alert("버튼이 클릭되었습니다.");
    },

    saveInput(event) {
      this.userInput = event.target.value;
    },

    enterOutput(){
      this.confirmedInput = this.userInput
    }

  }

});

app.mount('#assignment');
