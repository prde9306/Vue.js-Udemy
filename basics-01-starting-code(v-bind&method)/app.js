const app = Vue.createApp({
  data() {
    //data안에는 항상 object return
    return {
      //여기있는 데이터가 나가서 html에서 사용될 수 있는 것 html에 {{}}안에 변수 써주면ㄹ된다
      courseGoalA: 'Finish the course and learn',
      courseGoalB:'<h1>Hellon man</h1>',
      vueLink : 'https://naver.com'

    };
  },
  methods:{
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber<0.5) {
        return this.courseGoalA;
      }
      else{
        return this.courseGoalB;
      }

    }

  }

});

app.mount('#user-goal');
