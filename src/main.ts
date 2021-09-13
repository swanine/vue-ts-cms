import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import swanRequest from './utils'

//全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// globalRegister(app)
app.use(router).use(store).use(globalRegister).mount('#app')

const result = swanRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
result.then((res) => {
  console.log(res)
})
