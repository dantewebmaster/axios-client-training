import http from './config'

export default function refresh(refreshToken) {
  return http.post('/refresh', { params: { refreshToken } })
}
