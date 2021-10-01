<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="dashboard-list">
      <div class="dashboard-item"></div>
      <div class="dashboard-item"></div>
      <div class="dashboard-item"></div>
      <div class="dashboard-item"></div>
    </div>
    <div class="dashboard-grid">
      <div class="dashboard-grid-item">
        <pie-echarts :pieData="categoryGoodsCount"></pie-echarts>
      </div>
      <div class="dashboard-grid-item">
        <rose-echarts :roseData="categoryGoodsCount"></rose-echarts>
      </div>
      <div class="dashboard-grid-item"></div>
    </div>
    <div class="dashboard-grid">
      <div class="dashboard-grid-item"></div>
      <div class="dashboard-grid-item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { pieEcharts, roseEcharts } from '@/components/page-echarts/index'

export default defineComponent({
  setup() {
    const divRef = ref()
    // 请求图表数据
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')

    // 饼图数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    return {
      divRef,
      categoryGoodsCount
    }
  },
  components: {
    pieEcharts,
    roseEcharts
  }
})
</script>

<style lang="less" scoped>
.dashboard {
  h2 {
    text-align: left;
    margin-bottom: 18px;
  }
  .dashboard-list {
    display: flex;
    gap: 20px;
    height: 120px;
    .dashboard-item {
      flex: 1;
      height: 100%;
      border-radius: 14px;
      background-color: #ffffff;
    }
  }
  .dashboard-grid {
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 18px;
    .dashboard-grid-item {
      height: 210px;
      flex: 1;
      border-radius: 14px;
      background-color: #ffffff;
    }
  }
}
</style>
