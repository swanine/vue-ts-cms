<template>
  <div class="base-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelect"
      :row-style="{ height: '57px' }"
      :cell-style="{ padding: '6px' }"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        align="center"
        type="index"
        label="序号"
        width="66"
      ></el-table-column>
      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[5, 20, 30, 40]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="dataCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    dataCount: {
      type: Number
    },
    propsList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 5 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    // 显示footer分页
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:page'],
  setup(props, { emit }) {
    // 选中后事件
    function handleSelect(value: any) {
      console.log(value)
    }
    // 分页事件
    function handleSizeChange(pageSize: number) {
      emit('update:page', { ...props.page, pageSize })
    }
    function handleCurrentChange(currentPage: number) {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelect,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  .title {
    font-weight: 600;
    font-size: 20px;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
}
</style>
