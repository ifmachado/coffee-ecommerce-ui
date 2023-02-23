import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import MyAdmin from '../views/MyAdmin.vue'
import MyCategory from '../views/Category/MyCategory.vue'
import MyProduct from '../views/Product/MyProduct.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },

  {
    path: '/admin/category',
    name: 'MyCategory',
    component: MyCategory
  },

  { 
    path: '/admin/',
    name: 'MyAdmin',
    component: MyAdmin
  },

  { 
    path: '/admin/product',
    name: 'MyProduct',
    component: MyProduct
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
