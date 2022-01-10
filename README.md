# About

此项目是 vue + element-ui 构建的后台管理系统，具有登陆、列表展示、查询真实天气接口,导入导出，复制,富文本等功能。

# 说明

> 如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^\_^

> 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

> 传送门：[个人 🙅‍♂ 博客](https://liang996.github.io/)

# 导出实现

## 1.npm 安装依赖包

`npm install vue-json-excel`

## 2.项目入口文件(main.js)引进注册并且使用

1. `import Vue from 'vue'`
2. `import JsonExcel from 'vue-json-excel'`

3. `Vue.component('downloadExcel', JsonExcel)`

# 导入实现

## 第一步：需要安装三个依赖

1.`npm install -S file-saver xlsx` （这里其实安装了 2 个依赖）

2.`npm install -D script-loader`

## 第二步：在 main.js 文件中全局导入挂载 xlsx 插件

// 导入 excel 插件

1.`import XLSX from 'xlsx'`

2.`Vue.prototype.XLSX = XLSX`

# 复制实现

## 首先现在 Vue 中引入 clipboard

1.`npm install clipboard --save`

## 在需要使用的组件中 import 引入 clipboard

2.`import Clipboard from 'clipboard'`

# 富文本一实现

富文本一是基于 vue-element-admin 使用的 TinyMCE 富文本编辑器来完成的，

## 第一步首先下载 vue-element-admin，默认 master 分支是英文的，我需要中文版的。

1.`国内：git clone -b i18n https://gitee.com/panjiachen/vue-element-admin.git` 2.`国外：git clone -b i18n https://github.com/PanJiaChen/vue-element-admin.git`

## 安装 tinymce

1.`npm install @tinymce/tinymce-vue -S` 2.`npm install tinymce -S`

## 安装 sass

`npm install node-sass@4.14.1 sass-loader@7.3.1 style-loader --save-dev`

## 复制文件

vue-element-admin 下载完成后，进入目录 src\components，将 Tinymce 目录复制到 tinymce_demo 项目中的 src\components 目录下。在 src\components 目录下创建测试文件 test.vue

## 指定中文然后在需要使用的时候引入即可

修改文件 src/components/Tinymce/index.vue
修改计算方法 language，指定语言为中文。

```js
language() {
  // return this.languageTypeList[this.$store.getters.language]
  return this.languageTypeList['zh']
},
```

# 富文本二实现

## 安装依赖

`yarn add vue-quill-editor`

## 使用

在 src/plugins/VueQuillEditor.js(目录没有可以重建)
VueQuillEditor.js 放入以下代码
//一定要引入这三个 css，不然文本编辑器会出现不规则黑白几何图形
//这三个 css 可以在 main.js 中引入，也可以在具体使用的.vue 文件中引入

```js
import Vue from "vue";
import VueQuillEditor from "vue-quill-editor";
// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);
```

## 在 main.js 中引入

`import './plugins/VueQuillEditor.js'`

## 实现

在具体 vue 文件中引用

```js
<quill-editor ref="myTextEditor" v-model="content" :options="editorOption"
style="height: 600px; margin-bottom: 10px"></quill-editor>
```

## 在 data 中绑定值

```js
export default {
  data() {
    return {
      //富文本内容
      content: "",
      editorOption: {}
    };
  }
};
```

这样就实现了富文本编辑器！

## 技术栈

vue2 + less + element-ui+vuex + vue-router + webpack + ES6/7

## 项目运行

```
git clone https://github.com/liang996/vue2-management-backStage

  

cd vue2-management-backStage

npm install 或 yarn(推荐)

npm run dev   运行

npm run  build  打包


访问: http://localhost:8080

```
