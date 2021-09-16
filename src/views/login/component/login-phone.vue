<template>
  <div class="login-acconut">
    <el-form :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" class="">
        <div class="get-code">
          <el-input v-model.trim="account.code"></el-input>
          <el-button
            class="get-code-btn"
            size="mini"
            type="primary"
            :disabled="checkCodeBtn.disabled"
            @click="getCheckCode"
          >
            {{ checkCodeBtn.text }}
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElNotification
} from 'element-plus'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })
    //表单验证规则
    const rules = {
      phone: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern:
            /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
          message: '手机号格式有误',
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{6}$/,
          message: '请输入正确的验证码',
          trigger: 'blur'
        }
      ]
    }

    //获取验证码
    let checkCodeBtn = reactive<any>({
      text: '获取验证码',
      loading: false,
      disabled: false,
      duration: 59,
      timer: null
    })
    // 根据用户名获取验证码
    const getCheckCode = () => {
      // 倒计时期间按钮不能单击
      checkCodeBtn.disabled = true
      // 清除掉定时器
      checkCodeBtn.timer && clearInterval(checkCodeBtn.timer)
      // 开启定时器
      checkCodeBtn.timer = setInterval(() => {
        const tmp = checkCodeBtn.duration--
        checkCodeBtn.text = `${tmp}秒`
        if (tmp <= 0) {
          // 清除掉定时器
          clearInterval(checkCodeBtn.timer)
          checkCodeBtn.duration = 59
          checkCodeBtn.text = '重新获取'
          // 设置按钮可以单击
          checkCodeBtn.disabled = false
        }
      }, 1000)
    }

    // 手机号登录验证
    function phoneLogin() {
      ElNotification({
        title: '警告',
        message: '手机登录功能暂未开放',
        type: 'warning'
      })
    }
    return {
      account,
      rules,
      checkCodeBtn,
      getCheckCode,
      phoneLogin
    }
  },
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  box-sizing: border-box;
  gap: 10px;
  .el-input {
    width: 120px;
  }
  .get-code-btn {
    flex: 1;
  }
}
</style>
