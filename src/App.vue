<template>
  <div id="app">
    <!-- 缓存组件，提高运行性能 -->
    <keep-alive>
      <lay-out></lay-out>
    </keep-alive>
    <keep-alive v-if="isRouterAlive">
      <router-view class="content" :class="isCollapse ? '' : ''">
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import Bus from "./api/bus";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isCollapse: false,
      isRouterAlive: true,
    };
  },
  mounted() {
    Bus.$on("isCollapse", (data) => {
      //取  Bus.$on
      this.isCollapse = data;
    });
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => (this.isRouterAlive = true));
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  /* overflow-y: auto; */
  overflow-x: hidden;
  overflow-y: scroll;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50px;
  padding-left: 200px;
  box-sizing: border-box;
  font-size: 16px;
  height: 90vh;
  transition: inline-block 0.5s, left 0.5s, width 0.5s, padding-left 0.5s,
    font-size 0.5s;
  box-sizing: border-box;
  /* overflow-y: auto; */
  overflow-x: hidden;
  overflow-y: scroll;
}
.body-content {
  padding-left: 64px;
}
.center {
  padding-left: 20px;
  padding-top: 20px;
  position: relative;
  top: 0;
  left: 0;
  padding-right: 20px;
}
.page {
  margin-top: 30px;
}
.search {
  display: flex;
  margin-bottom: 40px;
}
.hander {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 900;
}
.el-table td,
.el-table th {
  text-align: center !important;
}

.el-table__expanded-cell {
  padding: 0 120px !important;
}
.demo-table-expand {
  display: flex;
  justify-content: space-between;
}
.el-form-item {
  flex: 1;
}

.my_form_item_style > .el-form-item__label:before{
  content: ' ';
  margin-right: 10px;
}
</style>
