const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'juile',
          name: 'Julie Jones',
          phone: '010-4440-2340',
          email: '444@naver.com'
        },
      ]
    }
  }
});

app.component('friend-contact', {
  template: `
          <li>
          <h2>{{friend.name}}</h2>
          <button @click="showDetail">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '010-1230-2340',
        email: '123@naver.com'
      },
    }
  },
  methods: {
    showDetail() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
});


app.mount('#app');
