<template>
  <el-scrollbar max-height="620px">
    <!-- 用户数据表格组件 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Role"
    ></page-content>
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
