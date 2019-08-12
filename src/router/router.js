const routes = [
  {
    path:'/',
    redirect:'/main'
  },
  {
    path:'/main',
    component: () => import("@/views/Main.vue"),
    children:[
       {
          path:'',
          name:'首页',
          meta:{ view:'homeview'},
          component: () => import("@/views/Home/home"), //  首页
       },
       {
          path:'rich',
          name:'富文本',
          meta:{ view:'richtextview'},
          component: () => import("@/views/Rich/rich") // 富文本
       },
       {
          path:'city',
          name:'城市管理',
          meta:{ view:'cityview'},
          component: () => import("@/views/City/city") // 城市管理
       },
       {
          path:'bikeMap',
          name:'车辆地图',
          meta:{ view:'Vehiclemapview'},
          component: () => import("@/views/Bikemap/bikeMap") // 车辆地图
       },
       {
          path:'permission',
          name:'权限管理',
          meta:{ view:'permissionview'},
          component: () => import("@/views/Permission/permission") // 权限管理
       }
       
    ]
  },
  {
      path: '*',
      component: () => import("@/components/404")
  }
]
export default routes