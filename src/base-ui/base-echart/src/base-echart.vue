<template>
  <div
    ref="echartDivRef"
    class="base-echart"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, withDefaults, defineProps, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '@/hooks/use-echarts'

const echartDivRef = ref()
// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '290px'
  }
)

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { setOptions } = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
