<!--
 * @version: 1.0.0
 * @Author: duhuazhu<335921101@qq.com>
 * @Date:2022-05-12 15:08:22
-->
<template>
  <map3d>
  </map3d>
  <mapView>
  </mapView>
</template>

<script>
import map3d from "@/component/map3d";
import mapView from "@/views/mapView";
export default {
  name: 'CesiumContainer',
  components:{mapView,map3d},
}
</script>
