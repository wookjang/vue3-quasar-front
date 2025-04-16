import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/member', // 백엔드 주소
  withCredentials: true,
})

export function registerMember(data) {
  return api.post('/register', data)
}

export function signIn(data) {
  return api.post('/login', data)
}

export function getProfile(data) {
  return api.post('/profile', data)
}

export function updateNickname(data) {
  return api.put('/nickname', data)
}

export function updatePassword(data) {
  return api.put('/password', data)
}
