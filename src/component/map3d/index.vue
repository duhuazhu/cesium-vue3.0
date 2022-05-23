<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import {inject, onMounted,getCurrentInstance} from 'vue'
import CesiumViewer from "@/component/map3d/initMap"
let Viewer = new CesiumViewer();
export default {
  name: "map3d",
  setup(){
    onMounted(() => {
      Viewer.init("cesiumContainer");
      const { appContext} = getCurrentInstance();
      appContext.config.globalProperties.Viewer = Viewer.view;
    })
  }
}
</script>

<style scoped>

</style>
