<template>
  <div class="login-panel">
    <h1 class="title">通用后台管理系统</h1>
    <el-tabs
      type="border-card"
      stretch
      class="login-wrapper"
      v-model="currentTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="account" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile"></i> 手机登录</span>
        </template>
        <login-phone ref="phone" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" label="记住密码"></el-checkbox>
      <el-link type="primary" disabled>忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="login-submit"
      @click="handleLoginClick"
      :disabled="loginDisabled"
      >登&nbsp;录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { ElTabs, ElTabPane, ElButton, ElCheckbox, ElLink } from 'element-plus'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  setup() {
    const isKeepPassword = ref(false)
    const account = ref()
    const phone = ref()
    const currentTab = ref('account')
    const loginDisabled = ref(false)

    function handleLoginClick() {
      if (currentTab.value === 'account') {
        account.value.loginAciton(isKeepPassword.value)
      } else {
        phone.value.phoneLogin()
      }
    }

    watch(currentTab, (newValue) => {
      if (newValue === 'phone') {
        phone.value.phoneLogin()
        loginDisabled.value = true
      } else {
        loginDisabled.value = false
      }
    })

    return {
      isKeepPassword,
      account,
      handleLoginClick,
      currentTab,
      phone,
      loginDisabled
    }
  },
  components: {
    ElTabs,
    ElTabPane,
    LoginAccount,
    LoginPhone,
    ElButton,
    ElCheckbox,
    ElLink
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  padding-bottom: 140px;
  .title {
    position: relative;
    left: -40px;
    text-align: center;
    margin-bottom: 60px;
    color: #fff;
    width: 400px;
    font-size: 50px;
    z-index: 3;
  }
  .login-wrapper {
    position: relative;
    background-color: transparent;
    border: none;
    backdrop-filter: blur(20px);
    z-index: 3;
    & > div {
      background-color: aqua;
    }
  }
  .login-submit {
    width: 100%;
  }
  & > div {
    overflow: hidden;
    border-radius: 6px;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    & > label {
      height: auto;
    }
  }
}
</style>
