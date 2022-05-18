<template>
  <!-- 顶部Logo -->
  <div class="mapView">
    <!--    <div class="wrap">
      <img src="@/assets/images/head/logo.png" alt="" />
    </div>-->
    <!-- 分三个模块 底图  图层 工具-->
    <div class="toolBar">
      <el-row justify="space-around" :gutter="24">
        <el-col :span="4">
          <el-button @click="baseMapTag">
            <i class="iconfont icon-earth"></i>
            底图
          </el-button>
        </el-col>
        <el-col :span="4">
          <el-button @click="layerCollectionTag">
            <i class="iconfont icon-tuceng-"></i>
            图层
          </el-button>
        </el-col>
        <el-col :span="6">
          <!--工具-->
          <el-dropdown :hide-on-click="false">
            <el-button
              >工具<el-icon class="el-icon--right"><arrow-down /></el-icon
            ></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>工具1</el-dropdown-item>
                <el-dropdown-item>工具2</el-dropdown-item>
                <el-dropdown-item>工具3</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
  <baseLayer @isBaseMapClick="changeBaseLayer" :isBaseMapClick="isBaseMapClick" />
  <layerCollection @isLayerCollectionClick="changeLayerCollection" :isLayerCollectionClick="isLayerCollectionClick"></layerCollection>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
import baseLayer from "@/component/baseLayer";
import layerCollection from "@/component/layerCollection";
import { ref } from "vue";
export default {
  components: {
    baseLayer,
    layerCollection,
    ArrowDown,
  },
  setup(props, context) {
    //底图切换
    const isBaseMapClick = ref(false);
    let baseMapTag = () => {
      isBaseMapClick.value = !isBaseMapClick.value;
    };
    let changeBaseLayer = (value) => {
       isBaseMapClick.value = value;
    };
    //图层
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
/*.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}*/
</style>
