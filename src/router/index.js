import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index.vue";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path:'/Register',
    name:'Register',
    component:Register
  }
]

const router = new VueRouter({
  mode:'history',

  routes
})

export default router
