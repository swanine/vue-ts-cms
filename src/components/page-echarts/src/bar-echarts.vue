<template>
  <base-echart :options="options" height="300px"></base-echart>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/base-echart/index'
import * as echarts from 'echarts'

const props = defineProps<{
  barAxis: string[]
  barData: any[]
}>()

const options = computed(() => {
  return {
    title: {
      text: '支持滑鼠滚动缩放',
      left: 4,
      textStyle: {
        fontSize: 12
      }
    },
    xAxis: {
      data: props.barAxis,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    grid: {
      right: 20,
      bottom: 20,
      top: 40
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        name: '地区商品销量',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.barData
      }
    ]
  }
})
</script>
