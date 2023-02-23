import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyAdmin from '../views/MyAdmin.vue'
import MyCategory from '../views/Category/MyCategory.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import MyProduct from '../views/Product/MyProduct.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import SignUp from '../views/Product/SignUp.vue'
import SignIn from '../views/Product/SignIn.vue'
import MyCart from '../views/Product/MyCart.vue'

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
    path: '/admin/category/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },


  {
    path: '/admin/category',
    name: 'MyCategory',
    component: MyCategory
  },

  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
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

  { 
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/admin/product/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },

  { 
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/cart',
    name: 'MyCart',
    component: MyCart
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
