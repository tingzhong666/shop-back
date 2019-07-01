import axios from 'axios'

const http = axios.create({
  baseURL: '/api'
})

http.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data
  }

  console.log('响应码不正常', res)
  return res
})

export default http
