import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont/iconfont.js'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
