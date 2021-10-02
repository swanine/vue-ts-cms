<template>
  <template v-for="menu in userMenus">
    <el-sub-menu
      v-if="menu.children && menu.type == 1"
      :key="menu.id"
      :index="menu.url"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <tree-menu :userMenus="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="menu.type == 2" :index="menu.url" :key="menu.id">{{
      menu.name
    }}</el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  props: {
    userMenus: {
      type: Object
    }
  }
})
</script>

<style lang="less" scoped>
.el-menu-item.is-active {
  background-color: #444450 !important;
}
</style>
