<template>
  <div class="overview">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h2>关于</h2>
        </div>
      </template>
      <div class="text item">
        <div class="logo">
          <div class="logo-heart"></div>
          <div class="logo-title">
            <h1>SWAN</h1>
            <h2>Management</h2>
          </div>
        </div>
        <p>
          SWAN-Management 是基于 Vue3、Vuex、VueRouter、ElementPlus
          、TypeScript、Echart5 等后台系统综合解决方案。
        </p>
      </div>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h2>技术栈</h2>
        </div>
      </template>
      <div class="text item">
        <overview-text :textArrs="technologyStacks"></overview-text>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import overviewText from '@/components/overview-text/overview-text.vue'
import { technologyStacks } from './config/technologyStacks'

export default defineComponent({
  setup() {
    return {
      technologyStacks
    }
  },
  components: {
    overviewText
  }
})
</script>

<style lang="less" scoped>
.overview {
  .box-card {
    margin-bottom: 16px;
    .card-header {
      h2 {
        font-size: 18px;
      }
    }
    .text {
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 160px;
        gap: 20px;
        .logo-heart {
          display: grid;
          place-items: center;
          width: 100px;
          height: 100px;
          border-radius: 26px;
          background-color: rgb(58, 58, 58);
          transform: rotate(45deg);
          &::after {
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgb(255, 255, 255);
          }
        }
        .logo-title {
          h1 {
            font-size: 3rem;
          }
          h2 {
            position: relative;
            color: #fff;
            line-height: 1.5;
            background-color: #333;
            &::after {
              position: absolute;
              bottom: 0;
              content: '';
              display: inline-block;
              width: 50px;
              height: 5px;
              background-color: #333;
            }
            &::before {
              position: absolute;
              right: -24px;
              bottom: 5px;
              content: '';
              display: inline-block;
              width: 24px;
              height: 15px;
              background-color: #333;
            }
          }
        }
      }
    }
  }
}

@keyframes rotate360 {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(-360deg);
  }
}
</style>
