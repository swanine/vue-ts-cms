/**
 * 根据process.env.NODE_ENV区分
 *  开发环境: development
 *  生成环境: production
 *  测试环境: test
 * @swanine 2021-09
 */

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://swanine.xyz/prod'
} else {
  BASE_URL = 'http://swanine.xyz/test'
}

export { BASE_URL, TIME_OUT }
