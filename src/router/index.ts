import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Login from '../views/auth/Login.vue'
import Home from '../views/Pages/Home/index.vue'
import Categories from '../views/Pages/Categories/List.vue'
import Products from '../views/Pages/Products/List.vue'
import ProductDetails from '../views/Pages/Products/Details.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/products/:id',
      name: 'product-details',
      component: ProductDetails,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  
  if (to.meta.requiresAuth && !auth.check) {
    next('/login')
  } else if (to.path === '/login' && auth.check) {
    next('/')
  } else {
    next()
  }
})

export default router