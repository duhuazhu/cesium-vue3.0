<template>
  <div class="bubbleStyle">
    <el-dialog v-model="props.ifTerrainCollectionClick" title="地形" @close="closeDialog">
      <div class="baseLayerModules">
        <div
            v-for="(o, index) in baseTerrains"
            :key="o"
            class="block"
        >
          <el-image
              :src=o.icon
              @click="addBaseTerrain(o.id,index)"
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
import {baseTerrains} from "@/component/terrainProviderCollection/config";
let viewer;

export default {
  props: {
    type: Boolean,
    ifTerrainCollectionClick: {
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
      context.emit("ifTerrainCollectionClick", !props.ifTerrainCollectionClick);
    };
    /**
     *
     * @param id 传入图层id
     * @param index  传入当前点击index
     */
    let addBaseTerrain = (id,index)=>{
      activeVar.value = index;
    }
    return {
      props,
      baseTerrains,
      closeDialog,
      addBaseTerrain,
      activeVar
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/component/terrainProviderCollection/terrainProviderCollection.scss";
</style>
