import { createRouter, createWebHistory } from 'vue-router'
// 48个目录
const routes = [
    {
    name: '登录',
    path: '/login',
    component: ()=>import('../views/login.vue'),
    },{
      id:1,
      name: '分类一',
      icon:'Tickets',
      path: '/category',
      component: { template: '<router-view />' },
      children:[
        {
          path:'demo',
          component: ()=>import('../views/category/demo.vue'),
          meta:{
            title:'标题一'
          }
        },{
          path:'categories',
          component: ()=>import('../views/category/categories.vue'),
          meta:{
            title:'标题二'
          }
        },{
          path:'overview',
          component: ()=>import('../views/category/overview.vue'),
          meta:{
            title:'标题三'
          }
        }
      ]
    },{
      id:1,
      name: '分类二',
      icon:'CollectionTag',
      path: '/category',
      component: { template: '<router-view />' },
      children:[
        {
          path:'series',
          component: ()=>import('../views/category/series.vue'),
          meta:{
            title:'标题一'
          }
        },{
          path:'brand',
          component: ()=>import('../views/category/brand.vue'),
          meta:{
            title:'标题二'
          }
        }
      ]
    },{
      id:1,
      name: '分类三',
      icon:'Edit',
      path: '/category',
      component: { template: '<router-view />' },
      children:[
        {
          path:'part',
          component: ()=>import('../views/category/part.vue'),
          meta:{
            title:'标题一'
          }
        },{
          path:'attributes',
          component: ()=>import('../views/category/update.vue'),
          meta:{
            title:'标题二'
          }
        }
      ]
    }, {
      id:2,
      name: '系统设置',
      path: '/system',
      component: { template: '<router-view />' },
      children:[
        {
          path:'menu',
          component: ()=>import('../views/system/pwd.vue'),
          meta:{
            title:'修改密码'
          }
        },{
          path:'role',
          component: ()=>import('../views/system/role.vue'),
          meta:{
            title:'角色管理'
          }
        },{
          path:'users',
          component: ()=>import('../views/system/users.vue'),
          meta:{
            title:'后台用户'
          }
        }
      ]
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

