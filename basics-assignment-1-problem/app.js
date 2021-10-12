const app= Vue.createApp({
  data(){
    return{
      name : 'kimsungjun',
      age : 29,
      favoriteNum : 7,
      imagePath:'https://shoppingmall-bucket.s3.ap-northeast-2.amazonaws.com/static/9eb44418-004a-4855-a68e-a66f58918bddONEWAY1.jpeg',
      myName:'kkimsungjun'
    }
  },
  methods:{
    randomNum(){
      const randomNumber = Math.random();
      if(randomNumber<1 && randomNumber>0){
        return this.favoriteNum
      }

    },
    calculateAge(){
      return this.age+5;
    }

  }

});
app.mount('#assignment');
