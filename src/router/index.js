/*
 * @version: 1.0.0
 * @Author: duhuazhu<335921101@qq.com>
 * @Date:2022-05-12 13:56:00
 */
import { createRouter, createWebHashHistory } from "vue-router";
import CesiumContainer from '@/views/CesiumContainer.vue';
const routes = [
  {
    path: '/',
    name: 'CesiumContainer',
    component: CesiumContainer
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
