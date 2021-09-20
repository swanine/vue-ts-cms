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
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// globalRegister(app)
setupStore()
app.use(router).use(store).use(ElementPlus, { locale: zhCn }).mount('#app')
