<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动文本">
      <Editor @content="TxtChang" :content="form.txt" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Editor from "./editor";

export default {
  components: { Editor },

  data() {
    return {
      form: {
        txt: "<p>请输入内容。。。</p>"
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    TxtChang(data) {
      console.log(`data`, data);
      this.form.txt = data;
    }
  }
};
</script>
