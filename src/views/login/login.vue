<template>
  <div id="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './component/login-panel.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LoginPanel
  }
})
</script>

<style scoped lang="less">
@keyframes pulse {
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(to right, #09203f 0%, #537895 100%);
  &::before {
    position: absolute;
    content: '';
    z-index: 0;
    width: 350px;
    height: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-120%, -90%);
    background-color: #ffe53b;
    background-image: linear-gradient(
      -225deg,
      #ffe29f 0%,
      #ffa99f 48%,
      #ff719a 100%
    );
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
    animation: pulse 1.5s infinite;
  }
  &::after {
    position: absolute;
    content: '';
    z-index: 0;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 70%;
    transform: translate(10%, 0%);
    background-color: #ff8bff;
    background-image: linear-gradient(-225deg, #20e2d7 0%, #f9fea5 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
    animation: pulse 1.6s infinite;
  }
}
</style>
