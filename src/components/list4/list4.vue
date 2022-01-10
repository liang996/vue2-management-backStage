<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动文本">
      <Tinymce ref="editor" v-model="form.txt" :height="400" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Tinymce from "./Tinymce";

export default {
  components: { Tinymce },

  data() {
    return {
      form: {
        txt: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
