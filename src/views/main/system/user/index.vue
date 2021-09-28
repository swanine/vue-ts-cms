<template>
  <el-scrollbar max-height="620px">
    <div class="search-info">
      <formInput @handleQueryClick="handleQueryClick" />
      <!-- 用户数据表格组件 -->
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="User"
        ref="refPageContent"
      ></page-content>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import formInput from '@/components/form-input/index.vue'
import pageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  setup() {
    const refPageContent = ref()
    // form组件传递查询方法
    function handleQueryClick(val: any) {
      refPageContent.value.getPageData(val)
    }
    return {
      contentTableConfig,
      handleQueryClick,
      refPageContent
    }
  },
  components: {
    formInput,
    pageContent
  }
})
</script>

<style lang="less" scoped>
.search-info {
  padding-top: 30px;
}
</style>
