<template>
  <div class="bubbleStyle">
    <el-dialog v-model="props.isBaseMapClick" title="底图" @close="closeDialog">
      <div class="baseLayerModules">
        <div
          v-for="(o, index) in config.baseLayer"
          :key="o"
          class="block"
          >
            <el-image
                :src=o.icon
                class="image"
                fit="fill"
                @click="addBaseLayer(o.id)"
                alt=""/>
            <div>
              <span class="demonstration">{{o.name}}</span>
            </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {inject, onMounted,getCurrentInstance} from "vue";
import config from "@/component/baseLayer/config";
import baseLayerFun from "@/component/baseLayer/baseLayerFun";
let Viewer;

export default {
  props: {
    isBaseMapClick: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const { appContext } = getCurrentInstance();
    let closeDialog = () => {
      context.emit("isBaseMapClick", !props.isBaseMapClick);
    };

    let addBaseLayer = (id)=>{
      const Viewer = appContext.config.globalProperties.Viewer;
      baseLayerFun.add(id,Viewer);
    }
    return {
      props,
      config,
      closeDialog,
      addBaseLayer,
      baseLayerFun
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/component/baseLayer/baseLayer.scss";
</style>
