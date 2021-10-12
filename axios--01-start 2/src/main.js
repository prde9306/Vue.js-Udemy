import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueproject-b9d45-default-rtdb.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'abc'
axios.defaults.headers.get['Accepts'] = 'application/json'


const reqinterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

const resinterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

//이젝 해주면 안보임
//axios.interceptors.request.eject(reqinterceptor)
axios.interceptors.response.eject(resinterceptor)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
