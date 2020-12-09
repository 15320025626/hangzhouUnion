import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {

    path: '/message', component: (resolve) => require(["../views/home/message/message.vue"], resolve),
  },
  // 填报详情

  {

    path: '/fillDetails', component: (resolve) => require(["../views/home/fillDetails/fillDetails.vue"], resolve),
  },
  // 填报内容选择
  {

    path: '/content', component: (resolve) => require(["../views/home/content/content.vue"], resolve),
  },
  // 新增突发事件
  {

    path: '/emergency', component: (resolve) => require(["../views/home/emergency/emergency.vue"], resolve),
  },
  // 突发事件上报
  {

    path: '/reported', component: (resolve) => require(["../views/home/reported/reported.vue"], resolve),
  },
  // 突发事件详情
  {

    path: '/emergencyDetails', component: (resolve) => require(["../views/home/emergencyDetails/emergencyDetails.vue"], resolve),
  },
  // 信息员上报后台
  {

    path: '/backstageManagement', component: (resolve) => require(["../views/home/backstageManagement/backstageManagement.vue"], resolve),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
