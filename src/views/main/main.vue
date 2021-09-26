<template>
  <el-container class="main-container">
    <el-aside :width="asideWidth + 'px'">
      <nav-menu />
    </el-aside>
    <el-container class="page-container">
      <el-header class="page-header">
        <navHeader />
      </el-header>
      <el-main class="page-content">
        <div class="page-wrapper">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed } from 'vue'
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import navMenu from '@/components/nav-menu/nav-menu.vue'
import navHeader from '@/components/nav-header/nav-header.vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const menuState = computed(() => store.state.menuState)
    let asideWidth = ref(200)

    watch(menuState, (newValue) => {
      newValue ? (asideWidth.value = 64) : (asideWidth.value = 200)
    })
    return {
      asideWidth
    }
  },
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    navMenu,
    navHeader
  }
})
</script>

<style scoped lang="less">
.main-container {
  height: 100%;
}
.el-header {
  background-color: #fdfdfd;
  color: var(--el-text-color-primary);
  line-height: 60px;
  padding-left: 12px;
}

.el-aside {
  background-color: #0c2135;
  color: var(--el-text-color-primary);
  text-align: center;
  transition: width 0.5s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.page-wrapper {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
