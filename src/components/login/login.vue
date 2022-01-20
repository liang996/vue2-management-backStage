<template>
  <div class="site-page--login">
    <div class="iconStyle">
      <header class="login-header">
        <img
          src="https://s3.bmp.ovh/imgs/2022/01/6983d7164013bb13.png"
          alt="logo"
          style="borderRadius: '25px'"
        />
        <h2>点靓生活管理平台</h2>
      </header>
    </div>

    <div class="login-main">
      <h3 class="login-title">登录</h3>
      <el-form ref="form" :model="form" :rules="rules2">
        <el-form-item prop="userName">
          <el-input
            v-model="form.username"
            @keyup.enter.native="onSubmit"
            placeholder="帐号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            @keyup.enter.native="onSubmit"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="login-btn-submit"
            style="background-color:#fd804c;color: #fff;"
            @click="onSubmit"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,

      form: {
        username: "admin",
        password: "admin"
      },
      rules2: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.logining = true;
          if (this.form.username == "admin" && this.form.password == "admin") {
            this.logining = false;

            localStorage.setItem(
              "key",
              "Bearer.eyJzdGFyX2xpZmUiOnsiYWNjb3VudE5vbkV4cGlyZWQiOnRydWUsImFjY291bnROb25Mb2NrZWQiOnRydWUsImF1dGhvcml0aWVzIjpbXSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlLCJleHAiOjI1OTIwMDAwMDAsImlhdCI6MTYzNDA4NzA5NzI1NSwianRpIjpudWxsLCJwYXNzd29yZCI6bnVsbCwic3ViIjoiYWRtaW4iLCJ1c2VySW5mbyI6bnVsbCwidXNlcm5hbWUiOiJhZG1pbiJ9LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFyX2xpZmVfand0Iiwic3Rhcl9saWZlX2NsYWltcyI6ImFkbWluIiwiZXhwIjoxNjM2Njc5MDk3LCJpYXQiOjE2MzQwODcwOTd9.B_s29YcSJUmXdBVkc7pHIZrmGlpPDht7qU9Aq8CNdDA"
            );
            this.$message.success("登入成功");

            this.$router.push({ path: "/list1" });
          } else {
            this.logining = false;
            this.$message.error("密码错误，登入失败");
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.site-page--login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: auto;
  width: auto;
  background-color: #fff;
  // background-color: #f8f8f8;

  &:before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 26%;
    height: 100%;
    content: "";
    // background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg");

    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170907%2F0d07ef491a9d4816abe9055600c57f62.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645149048&t=6d4ff200eb761cc8eecade77bd74f331");
    background-size: cover;
  }

  .iconStyle {
    position: absolute;
    top: 15px;
    left: 50%;
    .login-header {
      display: flex;
      align-items: center;
      height: 80px;
      img {
        width: 45px;
        height: 45px;
        margin: 0 15px 0 50px;
      }

      h3 {
        display: inline-block;
        color: #333;
        padding-top: 5px;
      }
    }
  }
  .login-main {
    position: absolute;
    left: 50%;
    padding: 70px 36px;
    width: 348px;
    top: 60%;
    border-radius: 4px;
    margin-top: -249px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    background-color: #fff;
    box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.06);
  }
  .login-title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 60px;
  }
  .login-btn-submit {
    width: 100%;
    margin-top: 18px;
    border-style: none;
  }
}
</style>
