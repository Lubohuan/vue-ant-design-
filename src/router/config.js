import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/layouts/DefaultLayout'
import Main from '#/views/BasicLayout'
import Login from '#/views/Login'
export const publicRoute = [
  { path: "*", component: () => import(/* webpackChunkName: "errors-404" */ "#/views/error/404.vue") },
  {
    path: "/404",
    name: "404",
    meta: { title: "Not Found" },
    component: () => import(/* webpackChunkName: "errors-404" */ "#/views/error/404.vue")
  },
  {
    path: "/500",
    name: "500",
    meta: { title: "Server Error" },
    component: () => import(/* webpackChunkName: "errors-500" */ "#/views/error/500.vue")
  },
  {
    path: "/403",
    name: "403",
    meta: { title: "Server Error" },
    component: () => import(/* webpackChunkName: "errors-403" */ "#/views/error/403.vue")
  }
]
export const protectedRoute = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/main/home',
        name:'Home',
        component: () => import(/* webpackChunkName: "home" */ "#/views/home/Home.vue")
      },
      {
        path:'/main/test',
        name:'Test',
        component: () => import(/* webpackChunkName: "test" */ "#/views/test/Test.vue"),
        children:[
          {
            path:'/main/test/lichenguang',
            name:'LiChenGuang',
            component: () => import(/* webpackChunkName: "lichenguang" */ "#/views/test/lichenguang/LiChenGuang"),
            children:[
              {
                path:'/main/test/lichenguang/tableTemplate',
                name:'TableTemplate',
                component: () => import(/* webpackChunkName: "lichenguang" */ "#/views/test/lichenguang/TableTemplate")
              },
              {
                path:'/main/test/lichenguang/baseComponents',
                name:'BaseComponents',
                component: () => import(/* webpackChunkName: "lichenguang" */ "#/views/test/lichenguang/BaseComponents")
              }
            ]
          },
          {
            path:'/main/test/huling',
            name:'HuLing',
            component: () => import(/* webpackChunkName: "huling" */ "#/views/test/huling/HuLing")
          },
          {
            path:'/main/test/hejingchun',
            name:'HeJingChun',
            component: () => import(/* webpackChunkName: "hejingchun" */ "#/views/test/hejingchun/HeJingChun")
          },
          {
            path:'/main/test/lanwenliang',
            name:'LanWenLiang',
            component: () => import(/* webpackChunkName: "lanwenliang" */ "#/views/test/lanwenliang/LanWenLiang")
          },
          {
            path:'/main/test/liupan',
            name:'LiuPan',
            component: () => import(/* webpackChunkName: "liupan" */ "#/views/test/liupan/LiuPan")
          },
          {
            path:'/main/test/liuyiwei',
            name:'LiuYiWei',
            component: () => import(/* webpackChunkName: "liuyiwei" */ "#/views/test/liuyiwei/LiuYiWei")
          },
          {
            path:'/main/test/lubohuan',
            name:'LuBoHuan',
            component: () => import(/* webpackChunkName: "lubohuan" */ "#/views/test/lubohuan/LuBoHuan")
          },
          {
            path:'/main/test/zhangmeng',
            name:'ZhangMeng',
            component: () => import(/* webpackChunkName: "zhangmeng" */ "#/views/test/zhangmeng/ZhangMeng")
          },
        ]
      },
    ]
  }
]


