<template>
  <!-- 顶部Logo -->
  <div class="mapView">
    <!--    <div class="wrap">
      <img src="@/assets/images/head/logo.png" alt="" />
    </div>-->
    <!-- 分四个模块 底图 地形 图层 工具-->
    <div class="toolBar">
      <el-row justify="space-evenly" :gutter="15">
        <el-col :span="3">
          <el-button @click="layerCollectionTag">
            <svgIcon name="icon-earth"></svgIcon>
            <span>底图</span>
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button @click="terrainProviderCollectionTag">
            <svgIcon name="icon-tindixing"></svgIcon>
            <span>地形</span>
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button @click="modeCollectionTag">
            <svgIcon name="icon-tuceng-"></svgIcon>
            图层
          </el-button>
        </el-col>
        <el-col :span="6">
          <!--工具-->
          <toolBar></toolBar>
        </el-col>
      </el-row>
    </div>
  </div>
  <!--底图 -->
  <layerCollection @ifLayerCollectionClick="changeLayerCollection" :ifLayerCollectionClick="ifLayerCollectionClick" />
  <!-- 倾斜-->
  <modeCollection @ifModeCollectionClick="changeModeCollection" :ifModeCollectionClick="ifModeCollectionClick"/>
</template>

<script>
import layerCollection from "@/component/layerCollection";
import modeCollection from "@/component/modeCollection";
import toolCollection from "@/component/toolCollection";
import svgIcon from "@/unit/svgIcon";
import { ref } from "vue";
export default {
  components: {
    layerCollection,
    modeCollection,
    svgIcon,
    toolCollection
  },
  setup(props, context) {
    //底图切换
    const ifLayerCollectionClick = ref(false);
    /**
     * 底图点击事件
     */
    let layerCollectionTag = () => {
      ifLayerCollectionClick.value = !ifLayerCollectionClick.value;
    };
    let changeLayerCollection = (value) => {
       ifLayerCollectionClick.value = value;
    };
    /**
     * 图层显示隐藏事件监听
     */
    const ifModeCollectionClick = ref(false)
    let modeCollectionTag = ()=>{
      ifModeCollectionClick.value = !ifModeCollectionClick.value;
    }
    let changeModeCollection = (value) => {
      ifModeCollectionClick.value = value;
    };
    return {
      ifLayerCollectionClick,
      layerCollectionTag,
      changeLayerCollection,
      ifModeCollectionClick,
      modeCollectionTag,
      changeModeCollection
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/mapView.scss";
</style>
