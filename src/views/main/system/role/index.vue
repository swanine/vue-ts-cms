<template>
  <div class="role-wrapper">
    <!-- 用户数据表格组件 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="Role"
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
.role-wrapper {
  background-color: #ffffff;
}
</style>
