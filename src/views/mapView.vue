<template>
  <!-- 顶部Logo -->
  <div class="mapView">
    <!--    <div class="wrap">
      <img src="@/assets/images/head/logo.png" alt="" />
    </div>-->
    <!-- 分三个模块 底图  图层 工具-->
    <div class="toolBar">
      <el-row justify="space-around" :gutter="24">
        <el-col :span="3">
          <el-button @click="baseMapTag">
            <svgIcon name="icon-earth"></svgIcon>
            <span>底图</span>
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button @click="layerCollectionTag">
            <svgIcon name="icon-tuceng-"></svgIcon>
            图层
          </el-button>
        </el-col>
        <el-col :span="10">
          <!--工具-->
          <toolBar></toolBar>
        </el-col>
      </el-row>
    </div>
  </div>
  <baseLayer @isBaseMapClick="changeBaseLayer" :isBaseMapClick="isBaseMapClick" />
  <layerCollection @isLayerCollectionClick="changeLayerCollection" :isLayerCollectionClick="isLayerCollectionClick"></layerCollection>
</template>

<script>
import baseLayer from "@/component/baseLayer/index";
import layerCollection from "@/component/layerCollection";
import toolBar from "@/component/toolBar";
import svgIcon from "@/unit/svgIcon";
import { ref } from "vue";
export default {
  components: {
    baseLayer,
    layerCollection,
    svgIcon,
    toolBar
  },
  setup(props, context) {
    //底图切换
    const isBaseMapClick = ref(false);
    /**
     * 底图点击事件
     */
    let baseMapTag = () => {
      isBaseMapClick.value = !isBaseMapClick.value;
    };
    let changeBaseLayer = (value) => {
       isBaseMapClick.value = value;
    };
    /**
     * 图层显示隐藏事件监听
     */
    const isLayerCollectionClick = ref(false)
    let layerCollectionTag = ()=>{
      isLayerCollectionClick.value = !isLayerCollectionClick.value;
    }
    let changeLayerCollection = (value) => {
      isLayerCollectionClick.value = value;
    };
    return {
      isBaseMapClick,
      baseMapTag,
      changeBaseLayer,
      isLayerCollectionClick,
      layerCollectionTag,
      changeLayerCollection
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/mapView.scss";
</style>
