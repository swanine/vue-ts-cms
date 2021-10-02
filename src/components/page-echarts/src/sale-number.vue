<template>
  <div class="sale-card">
    <div class="sale-icon" :style="{ backgroundColor: backgroundColor }">
      <i :class="saleIcon" :style="{ color: color }"></i>
    </div>
    <div class="sale-data">
      <div class="sale-count">
        <!-- count-up组件 -->
        <count-up :number="saleData"></count-up>
      </div>
      <div class="sale-title">{{ saleTitle }}</div>
      <i class="el-icon-top-right">{{ saleCrement }}&emsp;</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import countUp from '@/components/count-up/count-up.vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    saleData: {
      type: Number,
      default: 1580
    },
    saleTitle: {
      type: String
    },
    saleIcon: {
      type: String
    },
    saleCrement: {
      type: String
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  },
  components: {
    countUp
  }
})
</script>

<style scoped lang="less">
.sale-card {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 10px 30px;
  width: 100%;
  height: 100%;
  .sale-icon {
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    i {
      font-size: 1.5rem;
    }
  }
  .sale-data {
    margin-left: 20px;
    position: relative;
    .sale-count {
      font-size: 24px;
      font-weight: 600;
    }
    .sale-title {
      color: #bebebe;
    }
    .el-icon-top-right {
      position: absolute;
      bottom: -24px;
      color: #07da00;
      font-size: 14px;
      width: 200px;
      &::after {
        content: '上月';
        color: #bebebe;
        width: 100px;
      }
    }
  }
}
</style>
