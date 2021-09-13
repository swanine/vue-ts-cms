import { AxiosRequestConfig, AxiosResponse } from 'axios'

//定义拦截器方法接口
export interface SWANRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

//拓展AxiosRequestConfig拦截器方法接口
export interface SWANRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: SWANRequestInterceptors<T>
  showLoading?: boolean
}
