<template>
  <base-echart :options="options" height="300px"></base-echart>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/base-echart/index'

const props = defineProps<{
  xLabel: string[]
  yValue: any[]
}>()

const options = computed(() => {
  return {
    legend: {},
    tooltip: {
      tirgger: 'axis',
      axisPointer: {
        type: 'cross',
        snap: true
      }
    },
    grid: {
      right: 20,
      bottom: 30,
      top: 40
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabel
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分别销量',
        stack: '总量',
        data: props.yValue,
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        }
      }
    ]
  }
})
</script>
