<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import {onMounted,getCurrentInstance } from 'vue'
import CesiumViewer from "@/component/map3d/initMap"
let Viewer = new CesiumViewer();
export default {
  name: "map3d",
  setup(){
    onMounted(() => {
      const { proxy  } = getCurrentInstance()
      Viewer.init("cesiumContainer")
      console.log(Viewer.view);
      proxy.$EventBus.emit('Viewer',Viewer.view)
    })
  }
}
</script>

<style scoped>

</style>
