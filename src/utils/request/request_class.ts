/**
 * axios 封装request class
 * @swanine 2021-09
 */

import axios from 'axios'
import { AxiosInstance } from 'axios'
import { SWANRequestInterceptors, SWANRequestConfig } from './types'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const DEAFULT_LOADING = true

class SWANRequest {
  instance: AxiosInstance
  interceptors?: SWANRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: SWANRequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    //实例请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    //实例响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.3)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    //全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data?.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // 将loading移除
        this.loading?.close()

        // if (err.response.status === 404) {
        //   console.log('404的错误~')
        // } else if (err.response.status === 400) {
        //   console.log('账号密码有误~')
        // }
        return err
      }
    )
  }

  request<T = any>(config: SWANRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: SWANRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: SWANRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: SWANRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: SWANRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default SWANRequest
