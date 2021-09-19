<template>
  <el-form :model="formInline" class="demo-form-inline" label-width="80px">
    <el-row justify="start">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-form-item label="id">
            <el-input
              v-model.number="formInline.id"
              placeholder="请输入id"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <el-form-item label="用户名">
            <el-input
              v-model.trim="formInline.user"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-form-item label="用户名">
            <el-input
              v-model.trim="formInline.user"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item></div
      ></el-col>
    </el-row>

    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-form-item label="id">
            <el-input
              v-model.number="formInline.id"
              placeholder="请输入id"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="formInline.dateValue"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="formInline.defaultTime"
            >
            </el-date-picker>
          </el-form-item></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </div></el-col
      >
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const formInline = reactive({
      id: '',
      user: '',
      dateValue: '',
      defaultTime: [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
    })
    return {
      formInline
    }
  }
})
</script>

<style lang="less" scoped></style>
