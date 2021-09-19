<template>
  <div class="not-found">
    <h2>页面不小心走失了</h2>
    <img src="~@/assets/images/404.svg" />
    <el-button @click="backHome" type="danger" round>返回首页</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    function backHome() {
      router.push('/main')
    }
    return {
      backHome
    }
  }
})
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 60px 0 0;
    font-size: 50px;
    color: #409eff;
  }
}
img {
  width: 800px;
}
</style>
