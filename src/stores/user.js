import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  // states
  let user = reactive({
    firstName: null,
    lastName: null,
    middleName: null
  })
  // -------------------------------------------------------------------

  // mutations
  // добавление данных о пользователе в стейт
  let addUserDataField = ({ field, value }) => {
    user.value[field] = value
  }
  // -------------------------------------------------------------------

  // actions

  // -------------------------------------------------------------------
  return { user, addUserDataField }
})
