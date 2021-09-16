<template>
  <div class="nav-header">
    <i :class="iconClass" @click="closeMenu"></i>
    <div class="user">
      <div class="message">
        <el-button icon="el-icon-message" circle></el-button>
      </div>
      <div class="userInfo">
        <el-dropdown @command="handleCommand">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">用户信息</el-dropdown-item>
              <el-dropdown-item divided command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const router = useRouter()

    const store = useStore()
    const iconClass = ref('el-icon-s-fold')
    // 监听menu状态改变切换按钮图标箭头朝向
    const menuState = computed(() => store.state.menuState)
    watch(menuState, (newValue) => {
      !newValue
        ? (iconClass.value = 'el-icon-s-fold')
        : (iconClass.value = 'el-icon-s-unfold')
    })
    // 点击menu关闭按钮 commit mutations
    function closeMenu() {
      store.commit('changeMenuState')
    }

    //头像下拉事件
    function handleCommand(command: any) {
      if (command === 'a') {
        console.log('用户信息')
      } else {
        localCache.clearCache()
        router.push('/login')
      }
    }
    return {
      closeMenu,
      iconClass,
      handleCommand
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .el-icon-s-fold,
  .el-icon-s-unfold {
    font-size: 26px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
      transition: color 300ms ease-in-out;
    }
  }
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 120px;
    margin-right: 30px;
    .userInfo {
      height: 40px;
    }
  }
}
</style>
