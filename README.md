# About

此项目是 vue + element-ui 构建的后台管理系统，具有登陆、列表展示、查询真实天气接口,导入导出，复制等功能。

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
