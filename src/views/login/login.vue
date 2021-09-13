<template>
  <h2>{{ $store.state.name }}</h2>
  <div>login</div>
  <el-button type="primary" plain>主要按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {}
})
</script>

<style scoped></style>
