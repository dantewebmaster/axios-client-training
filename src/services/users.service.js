import http from './config'

export default function getUsers() {
  return http.get('/users')
}
