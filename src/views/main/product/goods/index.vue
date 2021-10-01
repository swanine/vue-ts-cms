<template>
  <el-scrollbar max-height="620px">
    <div class="goods-wrapper">
      <!-- 商品数据表格组件 -->
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="Goods"
      ></page-content>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  setup() {
    return {
      contentTableConfig
    }
  },
  components: {
    pageContent
  }
})
</script>

<style lang="less" scoped>
.goods-wrapper {
  background-color: #ffffff;
}
</style>
