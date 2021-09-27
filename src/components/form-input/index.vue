<template>
  <el-form :model="ruleForm" class="demo-form-inline" label-width="80px">
    <el-row justify="space-around">
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-form-item label="id">
            <el-input
              v-model.number="ruleForm.id"
              placeholder="请输入id"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple-light">
          <el-form-item label="用户名">
            <el-input
              v-model.trim="ruleForm.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-form-item label="真实姓名">
            <el-input
              v-model.trim="ruleForm.realname"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item></div
      ></el-col>
    </el-row>

    <el-row justify="space-around">
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-form-item label="手机号">
            <el-input
              v-model.number="ruleForm.cellphone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple-light">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="ruleForm.createAt"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item></div
      ></el-col>
      <el-col :span="7"
        ><div class="grid-content bg-purple">
          <el-form-item>
            <el-row justify="space-between">
              <el-col :span="10"
                ><div class="grid-content bg-purple">
                  <el-button
                    style="width: 120px"
                    type="primary"
                    @click="queryForm"
                    icon="el-icon-search"
                    >查询</el-button
                  >
                </div></el-col
              >
              <el-col :span="10"
                ><div class="grid-content bg-purple">
                  <el-button
                    style="width: 120px"
                    type="warning"
                    @click="resetForm"
                    icon="el-icon-refresh"
                    >重置</el-button
                  >
                </div></el-col
              >
            </el-row>
          </el-form-item>
        </div></el-col
      >
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['handleQueryClick'],
  setup(props, { emit }) {
    // 表单
    const ruleForm = ref({
      id: '',
      name: '',
      realname: '',
      cellphone: '',
      createAt: ''
      // defaultTime: [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
    })
    // 重置表单数据
    function resetForm() {
      ruleForm.value = {
        id: '',
        name: '',
        realname: '',
        cellphone: '',
        createAt: ''
        // defaultTime: [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
      }
    }

    // 查询表单
    function queryForm() {
      emit('handleQueryClick', ruleForm.value)
    }
    return {
      resetForm,
      ruleForm,
      queryForm
    }
  }
})
</script>

<style lang="less" scoped></style>
