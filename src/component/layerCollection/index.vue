<template>
  <div class="bubbleStyle">
    <el-dialog v-model="props.ifLayerCollectionClick" title="底图" @close="closeDialog">
      <div class="baseLayerModules">
        <div
          v-for="(o, index) in baseLayer"
          :key="o"
          class="block"
          >
            <el-image
                :src=o.icon
                @click="addBaseLayer(o.id,index)"
                class="image"
                fit="fill"
                alt=""/>
            <div>
              <span class="texts"
                    :class="{'activeCss':activeVar===index}"
              >{{o.name}}</span>
            </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {onMounted, getCurrentInstance, ref} from "vue";
import {baseLayer} from "@/component/layerCollection/config";
import {add} from "@/component/layerCollection/layerCollectionFun";
let viewer;

export default {
  props: {
    type: Boolean,
    ifLayerCollectionClick: {
    },
  },
  setup(props, context) {
    //初始化注册全局viewer对象
    onMounted(()=>{
      const { appContext } = getCurrentInstance();
      viewer = appContext.config.globalProperties.viewer;
    })
    const { appContext } = getCurrentInstance();
    let activeVar  = ref(0);
    /**
     * 遮罩层事件触发
     */
    let closeDialog = () => {
      context.emit("ifLayerCollectionClick", !props.ifLayerCollectionClick);
    };
    /**
     *
     * @param id 传入图层id
     * @param index  传入当前点击index
     */
    let addBaseLayer = (id,index)=>{
      activeVar.value = index;
      add(id,viewer);
    }
    return {
      props,
      baseLayer,
      closeDialog,
      addBaseLayer,
      add,
      activeVar
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/component/layerCollection/layerCollection.scss";
</style>
