//request 唯一出口
import SWANRequest from './request/request_class'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '../utils/cache'
import { ElMessage } from 'element-plus'

const swanRequest = new SWANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      if (err.response.status === 404) {
        console.log('404的错误~')
      } else if (err.response.status === 400) {
        ElMessage({
          showClose: true,
          message: '用户名不存在哦~',
          type: 'error'
        })
      }
      return err
    }
  }
})
export default swanRequest
