<template>
  <!-- 顶部Logo -->
  <div class="mapView">
    <div class="wrap">
      <img src="@/assets/images/head/logo.png"  alt=""/>
    </div>
  </div>
    <!-- 分三个模块 底图  图层 工具-->

</template>

<script>
export default {
  name: "mapView"
}
</script>

<style scoped lang="scss">
.mapView{
  .wrap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1200px;
    height: 74px;
    background: url(../assets/images/head/top.png);
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

</style>
