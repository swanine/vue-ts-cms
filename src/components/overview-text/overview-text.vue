<template>
  <ul class="text-container">
    <li class="text-item" v-for="item in textArrs" :key="item.title">
      <span>{{ item.title }}：</span>
      <el-link type="primary" href="JavaScript:;">{{ item.desp }}</el-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    textArrs: {
      type: Array
    }
  }
})
</script>

<style scoped lang="less">
.text-container {
  padding: 0 20px;
  .text-item {
    margin: 10px 0;
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
}
</style>
