<template>
  <el-col style="display:flex;" :span="24" >
    <layout/>
    <headerTop/>
    
  </el-col>
</template>
<style  scoped>
</style>
<script >
import headerTop from "./component/header.vue";
import layout from "./component/layout.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerTop,
    layout,
  },
};
</script>
