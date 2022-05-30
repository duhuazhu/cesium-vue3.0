<template>
  <el-dropdown :hide-on-click="false" trigger="click">
    <el-button>
      <svgIcon name="icon-gongju"></svgIcon>
      工具
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item    v-for="(o, index) in config.toolCollection"
                             :key="o"
        >{{o.toolName}}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { ArrowDown } from "@element-plus/icons-vue";
import svgIcon from "@/unit/svgIcon";
import config from "@/component/toolCollection/config";
export default {
  name: "toolBar",
  components:{
    ArrowDown,
    svgIcon,
  },
  setup(){

    return{
      config
    }
  }
}
</script>

<style scoped>

</style>
