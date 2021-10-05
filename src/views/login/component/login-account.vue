<template>
  <div class="login-acconut">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input
          v-model.trim="account.name"
          placeholder="请输入账号"
          class="account"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model.trim="account.password"
          placeholder="请输入密码"
          class="password"
          show-password
          @keyup.enter="loginAciton"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('account') ?? 'swanine',
      password: localCache.getCache('password') ?? '12345'
    })
    //表单验证规则
    const rules = {
      name: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        {
          pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
          message: '用户名4~15个字母或数字',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码不能小于3位',
          trigger: 'blur'
        }
      ]
    }

    //登录click验证
    const formRef = ref<InstanceType<typeof ElForm>>()
    function loginAciton(isKeepPassword: boolean) {
      formRef.value?.validate((date: boolean | undefined) => {
        // 判断是否验证通过
        if (date) {
          // 判断是否记住密码
          if (isKeepPassword) {
            // 本地存储账号密码
            localCache.setCache('account', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('account')
            localCache.deleteCache('password')
          }

          // 验证显式账号 | 密码
          if (account.name === 'swanine' && account.password == '12345') {
            const realAccount = {
              name: 'coderwhy',
              password: '123456'
            }
            // 进行登录验证
            store.dispatch('loginModule/accountLogin', { ...realAccount })
          } else {
            ElMessage.error('账号或密码错误，验证后再登录')
          }
        } else {
          ElMessage.error('不输入完登毛呢登')
        }
      })
    }

    return {
      account,
      rules,
      loginAciton,
      formRef
    }
  },
  components: {
    ElForm,
    ElFormItem,
    ElInput
  }
})
</script>
