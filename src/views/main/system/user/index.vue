<template>
  <div>
    <formInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formInput from '@/components/form-input/index.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    formInput
  }
})
</script>

<style lang="less" scoped></style>
