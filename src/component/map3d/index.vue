<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import {inject, onMounted,getCurrentInstance} from 'vue'
import CesiumViewer from "@/component/map3d/initMap"
let viewer = new CesiumViewer();
export default {
  name: "map3d",
  setup(){
    onMounted(() => {
      viewer.init("cesiumContainer");
      const { appContext} = getCurrentInstance();
      appContext.config.globalProperties.viewer = viewer.view;
    })
  }
}
</script>

<style scoped>

</style>
