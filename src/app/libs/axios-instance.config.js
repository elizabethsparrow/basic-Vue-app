import axios from 'axios'

export const instance = axios.create({
  baseURL: '',
  headers: {
    Authorization: localStorage.appToken
  }
})
