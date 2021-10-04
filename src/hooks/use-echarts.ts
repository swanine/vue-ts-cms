import * as echarts from 'echarts'
import chinaMap from '@/base-ui/base-echart/data/china.json'

echarts.registerMap('china', chinaMap)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    echartInstance,
    setOptions
  }
}
