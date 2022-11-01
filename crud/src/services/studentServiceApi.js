import { api } from "./api"

export const studentServiceApi = {
  list: async () => {
    const response = await api.get('/student')
    return response.data
  },
  create: async (student) => {
    const response = await api.post('/student', student)
    return response.data
  }
}