<template>
  <div class="bubbleStyle">
    <el-dialog v-model="props.isBaseMapClick" title="底图" @close="closeDialog">
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
import {baseLayer} from "@/component/baseLayer/config";
import {add} from "@/component/baseLayer/baseLayerFun";
let Viewer;

export default {
  props: {
    type: Boolean,
    isBaseMapClick: {
    },
  },
  setup(props, context) {
    //初始化注册全局viewer对象
    onMounted(()=>{
      const { appContext } = getCurrentInstance();
      Viewer = appContext.config.globalProperties.Viewer;
    })
    const { appContext } = getCurrentInstance();
    let activeVar  = ref(0);
    /**
     * 遮罩层事件触发
     */
    let closeDialog = () => {
      context.emit("isBaseMapClick", !props.isBaseMapClick);
    };
    /**
     *
     * @param id 传入图层id
     * @param index  传入当前点击index
     */
    let addBaseLayer = (id,index)=>{
      activeVar.value = index;
      add(id,Viewer);
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
@import "~@/component/baseLayer/baseLayer.scss";
</style>
