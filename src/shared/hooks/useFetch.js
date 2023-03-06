import { instance } from '@/app/libs/axios-instance.config'

export default async (requestBody) => {
  return await instance.post('', requestBody).then((data) => {
    return data
  })
}
