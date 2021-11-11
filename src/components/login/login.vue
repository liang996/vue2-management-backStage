<template>
  <div class="login">
    <header class="login-header">
      <img
        src="https://himg.bdimg.com/sys/portrait/item/public.1.f1519725.tx1F2O9yP-hyQtgWMyBOig.jpg"
        alt="logo"
        style="borderRadius: '25px'"
      />
      <h1>VUE后台管理模版</h1>
    </header>
    <div class="login-content">
      <h2>用户登陆</h2>
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            style="color: rgba(0,0,0,.25)"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            type="password"
            style="color: rgba(0,0,0,.25)"
          ></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
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
<style scoped lang="scss">
.content {
  top: 0 !important;
  padding-left: 0 !important;
  overflow-y: hidden !important;
}
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/bg.jpg");
  background-size: 100% 100%;

  .login-header {
    display: flex;
    align-items: center;
    height: 80px;
    background-color: rgba(21, 20, 13, 0.5);
    img {
      width: 40px;
      height: 40px;
      margin: 0 15px 0 50px;
    }

    h1 {
      display: inline-block;
      font-size: 32px;
      color: #fff;
      padding-top: 10px;
    }
  }

  .login-content {
    width: 300px;
    height: 280px;
    background-color: #fff;
    margin: 50px auto;
    padding: 20px 40px;
    h2 {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 28px;
    }
    .login-form {
      .login-form-button {
        width: 100%;
      }
    }
  }
}
</style>
