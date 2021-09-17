import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/base.less'
import { setupStore } from '@/store/index'

//全局引入
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// globalRegister(app)
setupStore()
app.use(router).use(store).use(ElementPlus).mount('#app')
