<template>
  <el-scrollbar max-height="620px">
    <div class="dashboard">
      <div class="dashboard-list">
        <div class="dashboard-item">
          <sale-number
            :saleData="cardGoodsData"
            v-bind="goodsDataConfig"
          ></sale-number>
        </div>
        <div class="dashboard-item">
          <sale-number
            :saleData="cardSaleData"
            v-bind="saleDataConfig"
          ></sale-number>
        </div>
        <div class="dashboard-item">
          <sale-number
            :saleData="cardFavorData"
            v-bind="favorDataConfig"
          ></sale-number>
        </div>
        <div class="dashboard-item">
          <sale-number
            :saleData="cardClassData"
            v-bind="DataConfig"
          ></sale-number>
        </div>
      </div>
      <div class="dashboard-grid">
        <div class="dashboard-grid-item">
          <h2 class="dashboard-title">分类数据(饼图)</h2>
          <pie-echarts :pieData="categoryGoodsCount"></pie-echarts>
        </div>
        <div class="dashboard-grid-item">
          <h2 class="dashboard-title">全国销量分布数据</h2>
          <map-echarts :mapData="addressGoodsSale"></map-echarts>
        </div>
        <div class="dashboard-grid-item">
          <h2 class="dashboard-title">分类数据(玫瑰图)</h2>
          <rose-echarts :roseData="categoryGoodsCount"></rose-echarts>
        </div>
      </div>
      <div class="dashboard-grid2">
        <div class="dashboard-grid2-item">
          <h2 class="dashboard-title">分类商品销量数据</h2>
          <line-echarts v-bind="categoryGoodsSale"></line-echarts>
        </div>
        <div class="dashboard-grid2-item">
          <h2 class="dashboard-title">分类商品收藏数据</h2>
          <bar-echarts v-bind="categoryGoodsFavor"></bar-echarts>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import {
  pieEcharts,
  roseEcharts,
  lineEcharts,
  barEcharts,
  mapEcharts,
  saleNumber
} from '@/components/page-echarts/index'

// 卡片数据参数配置
import {
  goodsDataConfig,
  saleDataConfig,
  favorDataConfig,
  DataConfig
} from './config/sale.config'

export default defineComponent({
  setup() {
    const divRef = ref()
    // 请求图表数据
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')

    // card 商品总量数据
    const cardGoodsData = computed(() => {
      let saleDataNumber = 0
      store.state.dashboardModule.categoryGoodsCount.forEach((item: any) => {
        saleDataNumber += item.goodsCount
      })
      return saleDataNumber
    })

    // card 销售总量数据
    const cardSaleData = computed(() => {
      let saleDataNumber = 0
      store.state.dashboardModule.categoryGoodsSale.forEach((item: any) => {
        saleDataNumber += item.goodsCount
      })
      return saleDataNumber
    })

    // card 收藏总量数据
    const cardFavorData = computed(() => {
      let saleDataNumber = 0
      store.state.dashboardModule.categoryGoodsFavor.forEach((item: any) => {
        saleDataNumber += item.goodsFavor
      })
      return saleDataNumber
    })

    // card 分类总量数据
    const cardClassData = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.length
    })

    // 饼图 / 玫瑰图 数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // 折线图数据
    const categoryGoodsSale = computed(() => {
      const xLabel: string[] = []
      const yValue: any[] = []

      const goodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of goodsSale) {
        xLabel.push(item.name)
        yValue.push(item.goodsCount)
      }
      return { xLabel, yValue }
    })

    // 柱状图数据
    const categoryGoodsFavor = computed(() => {
      const barAxis: string[] = []
      const barData: any[] = []

      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        barAxis.push(item.name)
        barData.push(item.goodsFavor)
      }
      return { barAxis, barData }
    })

    // 地图数据
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      divRef,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      goodsDataConfig,
      saleDataConfig,
      favorDataConfig,
      DataConfig,
      cardGoodsData,
      cardSaleData,
      cardFavorData,
      cardClassData
    }
  },
  components: {
    pieEcharts,
    roseEcharts,
    lineEcharts,
    barEcharts,
    mapEcharts,
    saleNumber
  }
})
</script>

<style lang="less" scoped>
.dashboard {
  h2 {
    font-size: 20px;
    text-align: left;
    margin-bottom: 14px;
  }
  .dashboard-list {
    display: flex;
    gap: 20px;
    height: 120px;
    .dashboard-item {
      flex: 1;
      height: 100%;
      border-radius: 14px;
      overflow: hidden;
      background-color: #ffffff;
    }
  }
  .dashboard-grid {
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 18px;
    .dashboard-grid-item {
      height: 290px;
      border-radius: 14px;
      background-color: #ffffff;
      overflow: hidden;
      &:nth-child(odd) {
        flex: 1;
      }
      &:nth-child(2) {
        flex: 1.3;
      }
    }
  }
  .dashboard-grid2 {
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 18px;
    .dashboard-grid2-item {
      height: 340px;
      border-radius: 14px;
      background-color: #ffffff;
      &:nth-child(1) {
        flex: 1;
      }
      &:nth-child(2) {
        flex: 1.2;
      }
    }
  }
  .dashboard-title {
    font-size: 18px;
    padding: 9px;
    border-bottom: 1px solid #e0e0e0;
    margin: 0;
  }
}
</style>
