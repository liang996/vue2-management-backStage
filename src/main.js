// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import http from './api/http'

import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = http;

//引入侧边栏组件
import layout from "./layout/layout.vue" //引入头部组件
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    if (to.meta.title != '登录') {
      Vue.component("lay-out", layout);
      console.log(Vue.component("lay-out", layout))

    } else {
      Vue.component("lay-out",);
      console.log(Vue.component("lay-out", 'undefined'))
    }
  }
  console.log(to.meta.title)
  // 非登录页无token拦截
  const token = localStorage.getItem('key') || ''
  if (!token && to.name !== 'login') {
    window.location.href = "/#/login"
    next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
