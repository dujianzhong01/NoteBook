import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'active',
      component: () => import('@/components/Layout'),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home')
        },
        {
          path: '/home',
          name: 'test',
          component: () => import('@/views/Home')
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录',
      },
      component: () => import('@/views/Login')
    },
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to,from,next)=>{
  if(to.path ==='/login'){
    next();
  }else {
    let token = window.sessionStorage.getItem('token');
    if(token ===null || token ===''){
      next('/login');
    }else {
      // alert(localStorage.getItem("Authorization"));
      next();
    }
  }
});
export default router;
