<template>
  <div class="page-content">
    <base-table
      :listData="dataList"
      :dataCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 表格头部插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="small">新建用户</el-button>
      </template>
      <!-- 用户状态标签 -->
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-tag>
      </template>
      <!-- 用户创建时间格式化 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <!-- 用户更新时间格式化 -->
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <!-- 操作按钮 -->
      <template #handle>
        <div class="handle-btn">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEdit"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDelete"
            >删除</el-button
          >
        </div>
      </template>
    </base-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

import { ElMessage } from 'element-plus'

import baseTable from '@/base-ui/base-table/index'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 分页功能模块
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 5
    })

    const store = useStore()
    // 查询页面数据函数 dispatch systemModule 页面数据网络请求
    function getPageData(data: any = {}) {
      store.dispatch('systemModule/getPageList', {
        pageName: props.pageName,
        queryInfo: {
          offset:
            pageInfo.value.currentPage === 1
              ? 0
              : (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...data
        }
      })
    }
    getPageData()

    // 获取页面数据
    const dataList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    )
    // 获取数据数量 const userCount = computed(() => store.state.systemModule.userCount)
    const dataCount = computed(() =>
      store.getters['systemModule/pageDataCount'](props.pageName)
    )

    // 监听分页数据变化重新获取页面数据
    watch(pageInfo, () => getPageData())

    const handleEdit = () => {
      ElMessage.warning({
        message: '编辑功能完善中',
        type: 'warning'
      })
    }

    const handleDelete = () => {
      ElMessage.warning({
        message: '删除功能完善中',
        type: 'warning'
      })
    }
    return {
      dataList,
      handleEdit,
      handleDelete,
      getPageData,
      dataCount,
      pageInfo
    }
  },
  components: {
    baseTable
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 0 20px;
  border-top: 10px solid #e9eef3;
}
</style>
