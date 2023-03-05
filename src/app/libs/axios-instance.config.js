import axios from 'axios'

export const instance = axios.create({
  baseURL: '',
  headers: {
    Authorization: localStorage.appToken
  }
})

// перехват работы запросов
instance.interceptors.request.use(
  (config) => {
    // здесь можно сделать что-то перед отправкой запроса
    return config
  },
  (error) => {
    // здесь можно перехватить ошибку запроса
    return Promise.reject(error)
  }
)

// перехват ответов от сервера
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
