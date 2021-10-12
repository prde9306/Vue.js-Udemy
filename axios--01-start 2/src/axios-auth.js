import axios from "axios";

const instance = axios.create({
  baseURL: 'https://vueproject-b9d45-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
