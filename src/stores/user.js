import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  let user = reactive({
    firstName: null,
    lastName: null,
    middleName: null
  })

  function addUserData({ field, value }) {
    user.value[field] = value
  }

  return { user, addUserData }
})
