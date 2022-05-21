import axios from 'axios'

console.log('import.meta.env.API_URL', import.meta.env.VITE_API_URL)

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
