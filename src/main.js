import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "@/assets/css/main.scss";
import mitt from 'mitt';
const emitter = mitt();
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/icon/iconfont/iconfont.js';
const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
// const { appContext : { config: { globalProperties } } } = getCurrentInstance()
app.use(store).use(router).use(ElementPlus).mount('#app');

