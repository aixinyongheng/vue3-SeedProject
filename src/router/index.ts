import Vue from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// import Home  from  '../views/map/Home.vue' // 普通import同步加载用法


const Home  = () => import('../views/Home.vue'); // 首页
// const mapboxMap = resolve => require(['../components/HelloWorld.vue'], resolve)  // 测试地图组件路由
const mapboxMap  = () => import('../components/map/mapboxMap.vue'); // 首页



// 防止重复点击报错 NavigationDuplicated   todo


// Router.beforeEach((to, from, next) => {
//     if (to.meta.title) {//如果设置标题，拦截后设置标题
//       document.title = to.meta.title
//     }
//     next()
//   })


 const routes = [
  { path: '/',redirect: '/home', },
  { path: '/home', component: Home,  },
  { path: '/mapboxMap', component:mapboxMap,  },
 ];

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes // short for `routes: routes`
  })
   
export default  router


