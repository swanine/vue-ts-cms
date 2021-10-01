<template>
  <div class="menu-wrapper">
    <!-- 商品数据表格组件 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Menu"
    ></page-content>
  </div>
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
.menu-wrapper {
  background-color: #ffffff;
}
</style>
