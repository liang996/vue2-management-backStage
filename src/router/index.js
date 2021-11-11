/*
 * @Author: your name
 * @Date: 2021-08-06 10:32:21
 * @LastEditTime: 2021-08-18 14:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \golte-starlife-admin2\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'




Vue.use(Router)
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: resulte => require(['@/components/login/login'], resulte),
      meta: {
        needLogin: true,
        title: '登录',
      },
    },
    {
      path: '/list1',
      name: 'list1',
      component: resulte => require(['@/components/list1/list1'], resulte),
      meta: {
        needLogin: true,
        title: '列表1',
        designation: "列表1"
      },

    },
    {
      path: '/list2',
      name: 'list2',
      component: resulte => require(['@/components/list2/list2'], resulte),
      meta: {
        needLogin: true,
        title: '列表2',
        designation: "列表2"
      },

    },
    {
      path: '/list3',
      name: 'list3',
      component: resulte => require(['@/components/list3/list3'], resulte),
      meta: {
        needLogin: true,
        title: '天气管理',
        designation: "天气管理"
      },

    },


  ]
})
export default router
