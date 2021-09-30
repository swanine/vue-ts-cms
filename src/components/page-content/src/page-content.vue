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
        <el-button v-if="isCreate" type="primary" size="small">{{
          contentTableConfig.buttonText
        }}</el-button>
      </template>

      <template #oldPrice="scope">
        {{ price(scope.row.oldPrice) }}
      </template>
      <template #newPrice="scope">
        {{ price(scope.row.newPrice) }}
      </template>
      <!-- 商品图片插槽 -->
      <template #image="scope">
        <el-image
          style="width: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>

      <!-- 商品上架状态 -->
      <template #enable="scope">
        <el-tag :type="scope.row.status == 1 ? 'success' : 'danger'">{{
          scope.row.status == 1 ? '上架' : '下架'
        }}</el-tag>
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
      <template #handle="scope">
        <div class="handle-btn">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEdit"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDelete(scope.row)"
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
import { usePermission } from '@/hooks/use-permission'

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
    // 商品价格格式化
    const price = function (p: string) {
      const price = parseInt(p).toFixed(2)
      return '¥' + price
    }

    // 获取页面按钮权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    // 分页功能模块
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 5
    })

    const store = useStore()
    // 查询页面数据函数 dispatch systemModule 页面数据网络请求
    function getPageData(data: any = {}) {
      if (!isQuery) return
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

    const handleDelete = (item: any) => {
      console.log(item)
    }
    return {
      dataList,
      handleEdit,
      handleDelete,
      getPageData,
      dataCount,
      pageInfo,
      price,
      isCreate,
      isUpdate,
      isDelete
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
  // border-top: 10px solid #e9eef3;
}
</style>
