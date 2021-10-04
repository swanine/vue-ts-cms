<template>
  <base-echart :options="options" height="250px"></base-echart>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/base-echart/index'
import { IDataType } from '../types/type'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    // toolbox: {
    //   show: true,
    //   feature: {
    //     mark: { show: true },
    //     dataView: { show: true, readOnly: false },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    tooltip: {
      tirgger: 'item'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: [10, 90],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>
