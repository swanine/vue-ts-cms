/**
 * service统一出口
 * @swanine 2021-8-28
 */
import SWANRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const swanRequest = new SWANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default swanRequest
