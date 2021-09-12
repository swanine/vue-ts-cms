import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import swanRequest from './service'

createApp(App).use(store).use(router).mount("#app");

swanRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
