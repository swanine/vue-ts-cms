<template>
  <template v-for="menu in userMenus">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :key="menu.id"
      :index="menu.id + ''"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <tree-menu :userMenus="menu.children" />
    </el-sub-menu>
    <el-menu-item
      v-else-if="menu.type == 1 || 3"
      :index="menu.id + ''"
      :key="menu.id"
      >{{ menu.name }}</el-menu-item
    >
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

<style lang="less" scoped></style>
