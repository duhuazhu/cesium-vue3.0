import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/css/main.scss";
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icon/iconfont/iconfont.js'
import mitt from 'mitt'
const app = createApp(App);
app.config.globalProperties.$EventBus = new mitt();
console.log(app.config.globalProperties.$EventBus);
app.use(store).use(router).use(ElementPlus).mount('#app')

