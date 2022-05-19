<template>
  <div class="bubbleStyle tree-container">
    <el-dialog v-model="props.isLayerCollectionClick" title="图层" @close="closeDialog">
      <el-tree
          :data="config.layers"
          show-checkbox
          node-key="id"
          :default-checked-keys="[5]"
          :props="defaultProps"
          :default-expand-all="true"
          :expand-on-click-node="false"
          :render-content="renderContent"
      />
    </el-dialog>
  </div>
</template>

<script>
import config from "@/component/layerCollection/config";
import svgIcon from "@/component/svgIcon";
export default {
  props: {
    isLayerCollectionClick: {
      type: Boolean,
    },
  },
  components:{
    svgIcon
  },
  setup(props,context){
    let closeDialog = () => {
      context.emit("isLayerCollectionClick", !props.isLayerCollectionClick);
    };
    const defaultProps = {
      children: 'children',
      label: 'label',
    }
    function renderContent(h, { node, data, store }) {
      let addElement = arguments[0];
      if(data.iconType ==='file'){
        return addElement("span", [
          addElement(svgIcon, { name: "icon-wenjianjia" }),
          addElement("span", "    "),
          addElement("span", arguments[1].node.label),
        ]);
      }else{
        return addElement("span", [
          addElement(svgIcon, { name: "icon-tuceng" }),
          addElement("span", "    "),
          addElement("span", arguments[1].node.label),
        ]);
      }
    }
    return{
      props,
      config,
      closeDialog,
      defaultProps,
      renderContent
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/component/layerCollection/layerCollection.scss";

</style>
