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
          <el-button @click="baseMap">
            <i class="iconfont icon-earth"></i>
            底图
          </el-button>
        </el-col>
        <el-col :span="4">
          <el-button>
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
  <baseLayer @isBaseMap="changeBaseLayer" :isBaseMap="isBaseMap" />
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
import baseLayer from "@/component/baseLayer";
import { ref } from "vue";
export default {
  components: {
    baseLayer,
    ArrowDown,
  },
  setup(props, context) {
    const isBaseMap = ref(false);
    let baseMap = () => {
      isBaseMap.value = !isBaseMap.value;
    };
    let changeBaseLayer = (value) => {
      isBaseMap.value = value;
    };
    return {
      isBaseMap,
      baseMap,
      changeBaseLayer,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/mapView.scss";
</style>

<!--组件样式更改-->
<style scoped>
/*引入iconfont 在线字体*/
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
