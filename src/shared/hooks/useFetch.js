import { instance } from '@/app/libs/axios-instance.config'

export const useFetch = async (requestBody) => {
  return await instance.post('', requestBody).then((data) => {
    return data
  })
}
