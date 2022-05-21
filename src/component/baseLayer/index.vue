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
import config from "@/component/baseLayer/config";
import baseLayerFun from "@/component/baseLayer/baseLayerFun";
import {getCurrentInstance} from "vue";
export default {
  props: {
    isBaseMapClick: {
      type: Boolean,
    },
  },
  setup(props, context) {
    let closeDialog = () => {
      context.emit("isBaseMapClick", !props.isBaseMapClick);
    };
    let addBaseLayer = (id)=>{
      const { ctx  } = getCurrentInstance();
      ctx.$EventBus.on('Viewer',data=>{
        console.log(data,'123');
      })
      baseLayerFun.add(id)
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
