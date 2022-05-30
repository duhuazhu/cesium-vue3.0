<template>
  <div class="bubbleStyle tree-container">
    <el-dialog v-model="props.ifModeCollectionClick" title="图层" @close="closeDialog">
      <el-tree
          :data="config.layers"
          show-checkbox
          node-key="id"
          :default-checked-keys="[5]"
          :props="defaultProps"
          :default-expand-all="true"
          :expand-on-click-node="false"
          :render-content="renderContent"
          @check-change="checkChange"
      />
    </el-dialog>
  </div>
</template>

<script>
import config from "@/component/modeCollection/config";
import svgIcon from "@/unit/svgIcon";
import {getCurrentInstance,onMounted} from "vue";
import {add} from "@/component/modeCollection/modeCollectionFun";

let viewer;
export default {
  props: {
    ifModeCollectionClick: {
      type: Boolean,
    },
  },
  components:{
    svgIcon
  },
  setup(props,context){
    //初始化注册全局viewer对象
    onMounted(()=>{
      const { appContext } = getCurrentInstance();
      viewer = appContext.config.globalProperties.viewer;
    })
    let closeDialog = () => {
      context.emit("ifModeCollectionClick", !props.ifModeCollectionClick);
    };
    //配置选项
    const defaultProps = {
      children: 'children',
      label: 'label',
    }
    // 添加svg图标
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
    function checkChange(node,visible) {
        if(node.url) add(node,visible,viewer);
    }
    return{
      props,
      config,
      closeDialog,
      defaultProps,
      renderContent,
      checkChange,
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/component/modeCollection/modeCollection.scss";

</style>
