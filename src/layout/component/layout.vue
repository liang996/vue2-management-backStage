<template>
  <div>
    <div
      v-if="isCollapse == false"
      class="site-navbar__brand-lg xl50"
      href="javascript:;"
    >
      <img
        src="https://s3.bmp.ovh/imgs/2022/01/6983d7164013bb13.png"
        alt=""
        class="logo"
      />
      点靓生活
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#fff"
      text-color="#000"
      active-text-color="#000"
    >
      <!-- 服务商品管理 -->
      <el-submenu index="1">
        <template slot="title">
          <!-- <img
            src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
            alt=""
            class="All"
          /> -->
          <span slot="title">列表管理</span>
        </template>
        <el-menu-item @click="$router.push({ name: 'list1' })" index="1-1"
          >列表1</el-menu-item
        >
        <el-menu-item @click="$router.push({ name: 'list2' })" index="1-2"
          >列表2</el-menu-item
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <!-- <img
            src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
            alt=""
            class="All"
          /> -->
          <span slot="title">天气管理</span>
        </template>
        <el-menu-item @click="$router.push({ name: 'list3' })" index="2-1"
          >天气管理</el-menu-item
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <!-- <img
            src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
            alt=""
            class="All"
          /> -->
          <span slot="title">富文本编辑器1</span>
        </template>
        <el-menu-item @click="$router.push({ name: 'list4' })" index="3-1"
          >富文本编辑器1</el-menu-item
        >
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <!-- <img
            src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
            alt=""
            class="All"
          /> -->
          <span slot="title">富文本编辑器2</span>
        </template>
        <el-menu-item @click="$router.push({ name: 'list5' })" index="4-1"
          >富文本编辑器2</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;

  min-height: 92vh;

  z-index: 100;
  margin-top: 45px;
}

.el-menu-vertical-demo {
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.el-menu--collapse {
  min-height: 92vh;

  z-index: 100;
}
.All {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.isColl {
  position: absolute;

  top: 14px;

  left: 18%;

  width: 20px;

  height: 20px;
}

.topImg {
  width: 20px;

  height: 20px;
}

.xl50 {
  height: 50px;

  display: flex;

  justify-content: center;

  align-items: center;

  background-color: #fff;
  width: 210px;
  color: #000;
  position: fixed;
  z-index: 300;
  overflow: hidden;
}

.logo {
  width: 45px;

  height: 45px;

  margin-right: 10px;
}

.el-menu {
  border-right: 0;
}
</style>

<script>
import Bus from "../../api/bus";

export default {
  data() {
    return {
      isCollapse: false,

      scrollHeight: "",

      scrollTop: "",

      heightTop: ""
    };
  },

  create() {},

  mounted() {
    Bus.$on("isCollapse", data => {
      //取  Bus.$on

      this.isCollapse = data;
    });

    this.scrollHeight = document.body.scrollHeight;

    //监听滚动事件

    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    handleScroll(e) {
      // 滚动条距离页面顶部的距离

      // 以下写法原生兼容

      // if(this.scrollTop >= 120){

      //   return;

      // }

      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      this.heightTop = this.scrollTop + this.scrollHeight;

      // console.log(this.heightTop);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
