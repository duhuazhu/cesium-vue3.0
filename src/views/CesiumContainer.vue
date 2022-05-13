<!--
 * @version: 1.0.0
 * @Author: duhuazhu<335921101@qq.com>
 * @Date:2022-05-12 15:08:22
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import { Viewer,createWorldTerrain,Ion} from 'cesium'
import config from "@/config";

export default {
  name: 'CesiumContainer',
  setup() {
    onMounted(() => {
      Ion.defaultAccessToken = config.cesium_ion;
      /* eslint no-new: */
      new Viewer('cesiumContainer',{
        geocoder: false, // 地理位置查询定位控件
        homeButton: false, // 默认相机位置控件
        timeline: false, // 时间滚动条控件
        navigationHelpButton: false, // 默认的相机控制提示控件
        fullscreenButton: false, // 全屏控件
        baseLayerPicker: false, // 底图切换控件
        animation: false, // 控制场景动画的播放速度控件(左下角仪表)
        shouldAnimate: true,
        infoBox: false, // 是否显示信息框
        sceneModePicker: false, // 是否显示3D/2D选择器
        selectionIndicator: false, // 是否显示选取指示器组件(聚焦框)
        terrainProvider: new createWorldTerrain(),
        showRenderLoopErrors: true, // 如果设为true，将在一个HTML面板中显示错误信息
      })
    })
  }
}
</script>


<style lang="scss">
@import "~@/assets/css/main.scss";

</style>
