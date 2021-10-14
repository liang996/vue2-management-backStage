<template>
  <el-col class="headerTop" :span="24">
    <div class="right1">
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="block">
            <el-avatar
              :size="30"
              src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
            ></el-avatar>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-button type="text">修改密码</el-button>
            <el-button type="text" @click.native="handleCommand"
              >退出登录</el-button
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-col>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {};
  },

  activated() {},
  mounted() {
    router.beforeEach((to, from, next) => {
      /* 路由发生变化修改页面title */
      if (to.meta.title) {
        this.title = to.meta.title;
        localStorage.setItem("title", this.title);
      }

      if (to.meta.designation) {
        console.log(to.meta);
        this.designation = to.meta.designation;
        localStorage.setItem("designation", this.designation);
      }
      next();
    });
  },
  methods: {
    handleCommand() {
      this.$confirm("确定是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("key");
          this.$router.push({ path: "/login" });
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.headerTop {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  z-index: 300;
  position: fixed;
  overflow: hidden;
  margin-bottom: 5px;
}
.topImg {
  margin-right: 20px;
}
.right {
  margin-left: 450px;
}
.right1 {
  position: absolute;
  right: 30px;
}
.topImgs {
  width: 40px;
  height: 35px;
  margin-right: 80px;
  cursor: pointer;
}
.topImgss {
  width: 65px;
  height: 35px;
  margin-right: 80px;
  cursor: pointer;
}
.topImgss1 {
  width: 50px;
  height: 35px;
  border-radius: 20%;
  cursor: pointer;
}
/deep/ .el-dialog {
  width: 33%;
}
/deep/ .el-dialog__body {
  padding: 0px 20px;
}
/deep/ .el-dialog__footer {
  padding: 0px 20px 20px;
}
/deep/ .el-dropdown-menu__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/deep/ .el-button + .el-button {
  margin-left: 0;
}
</style>
