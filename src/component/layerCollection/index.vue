<template>
  <div class="bubbleStyle tree-container">
    <el-dialog v-model="props.isLayerCollectionClick" title="图层" @close="closeDialog">
      <el-tree
          :data="config.layers"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
      />
    </el-dialog>
  </div>
</template>

<script>
import config from "@/component/layerCollection/config";
export default {
  props: {
    isLayerCollectionClick: {
      type: Boolean,
    },
  },
  setup(props,context){
    let closeDialog = () => {
      context.emit("isLayerCollectionClick", !props.isLayerCollectionClick);
    };
    const defaultProps = {
      children: 'children',
      label: 'label',
    }
    return{
      props,
      config,
      closeDialog,
      defaultProps
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/component/layerCollection/layerCollection.scss";

</style>
