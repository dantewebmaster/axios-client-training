import axios from 'axios'
import authInterceptor from './auth.interceptor'

const http = axios.create({
  baseURL: 'http://0.0.0.0:3333/api'
});

http.interceptors.response.use(undefined, authInterceptor(http))

export default http;
