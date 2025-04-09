import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/member', // 백엔드 주소
  withCredentials: true,
})

export function registerMember({ nickname, email, password }) {
  return api.post('/register', { nickname, email, password })
}
