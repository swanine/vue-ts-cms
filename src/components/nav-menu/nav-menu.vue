<template>
  <div class="nav-menu">
    <div class="logo-wrapper">
      <div class="logo" :style="logoRotate"></div>
      <div class="logo-title" :style="logoTitleScala" v-show="isShowTitle">
        <h1>管理平台</h1>
        <p>Management</p>
      </div>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      text-color="#c0c4cc"
      active-text-color="#409eff"
      unique-opened
      :collapse="isCollapse"
    >
      <tree-menu :userMenus="userMenu" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, reactive } from 'vue'
import { ElMenu } from 'element-plus'
import { useStore } from 'vuex'
import treeMenu from './tree-menu.vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenu = store.state.loginModule.userMenus
    const isCollapse = computed(() => store.state.menuState)
    let isShowTitle = ref(true)
    const logoRotate = reactive({
      transform: 'rotate(135deg)'
    })
    const logoTitleScala = reactive({
      transform: 'scale(100%)'
    })

    watch(isCollapse, (newValue) => {
      newValue
        ? ((logoRotate.transform = 'rotate(45deg)'),
          (logoTitleScala.transform = 'scale(70%)'))
        : ((logoRotate.transform = 'rotate(135deg)'),
          (logoTitleScala.transform = 'scale(100%)'))
    })
    return {
      userMenu,
      isCollapse,
      isShowTitle,
      logoRotate,
      logoTitleScala
    }
  },
  components: {
    ElMenu,
    treeMenu
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  user-select: none;
  .logo-wrapper {
    width: 100%;
    height: 70px;
    background-color: #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: rgb(255, 255, 255);
      transition: transform 620ms;
      border-radius: 10px;
      margin-right: 12px;
      &::after {
        position: absolute;
        left: 36%;
        top: 36%;
        z-index: 1;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgb(54, 54, 54);
      }
    }
    .logo-title {
      text-align: left;
      margin-right: 10px;
      transition: transform 620ms;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .el-menu-vertical-demo {
    text-align: left;
    border: none;
    .el-submenu__title {
      height: 56px;
    }
  }
}
</style>
