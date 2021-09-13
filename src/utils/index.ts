//request 唯一出口
import SWANRequest from './request/request_class'
import { BASE_URL, TIME_OUT } from './request/config'

const swanRequest = new SWANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default swanRequest
