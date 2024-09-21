import { defineStore } from 'pinia'
import { loginRequest } from '@/service/modules/user'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export const useUserStore = defineStore('User', () => {
  const axiosLogin = async (data) => {
    try {
      const res = await loginRequest(data)
      console.log('res: ', res)
    } catch (error) {
      console.log(error)

      ElMessage({
        type: 'error',
        message: error.message,
        plain: true
      })
    }
  }

  return { axiosLogin }
})
