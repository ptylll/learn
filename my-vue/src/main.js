// 导入Vue，这个是必需的，在使用Vue之前，必须先导入  
import Vue from 'vue'  
  
// 导入 vue-router，并使用  
import VueRouter from 'vue-router'  
Vue.use(VueRouter)  
 
// 导入 vue-resource，并使用  
import VueResource from 'vue-resource'  
Vue.use(VueResource)  
  
import VueAwesomeSwiper from 'vue-awesome-swiper'


// 导入 pages 下的 Home.vue   
import Home from './pages/Home'  
import New from './pages/New' 
import About from './pages/about'  
import Sever from './pages/sever' 
import Pdetails from './pages/ProductDetails'

// 定义路由配置  
const routes = [  
    {  
        path: '/',  
        component: Home  
    },  
    {  
        path: '/about',  
        component: About  
    },
    {  
        path: '/sever',  
        component: Sever  
    }, 
    {  
        path: '/New',  
        component: New  
    }, 
    {
      path:'/ProductDetails',
      component:Pdetails
    }
]  
  
// 创建路由实例  
const router = new VueRouter({  
    routes  
})  
  
// 创建 Vue 实例  
new Vue({  
  el: '#app',  
  data(){  
    return {  
         
    }  
  },  
  router, // 在vue实例配置中，用router   
})  