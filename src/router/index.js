import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/infrastructure',
    name:'Infrastructure',
    component: function(resolve){
      require(['../views/Infrastructure.vue'], resolve)
    },
  },
  {
    path:'/news',
    name:'News',
    component: function(resolve){
      require(['../views/News.vue'], resolve)
    },
  },
  {
    path:'/products',
    name:'Products',
    component: function(resolve){
      require(['../views/Products.vue'], resolve)
    },
  },
  {
    path:'/training',
    name:'Training',
    component: function(resolve){
      require(['../views/Training.vue'], resolve)
    },
  },
  {
    path:'/about',
    name:'About',
    component: function(resolve){
      require(['../views/About.vue'], resolve)
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
