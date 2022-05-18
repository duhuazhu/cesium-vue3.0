<template>
  <div class="baseLayer">
    <el-dialog v-model="props.isBaseMap" title="底图" @close="closeDialog">
      <div class="baseLayerModules">
        <div
          v-for="(o, index) in config.baseLayer"
          :key="o"
          class="block"
          >
            <el-image
                :src=o.img
                class="image"
                fit="fill"
             alt=""/>
            <div>
              <span class="demonstration">{{o.mapName}}</span>
            </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import config from "@/component/baseLayer/config";
export default {
  props: {
    isBaseMap: {
      type: Boolean,
    },
  },
  setup(props, context) {
    let closeDialog = () => {
      context.emit("isBaseMap", !props.isBaseMap);
    };
    console.log(config.baseLayer);
    return {
      props,
      config,
      closeDialog,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/baseLayer.scss";
</style>
