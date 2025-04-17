import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Login from '../views/auth/Login.vue'
import Home from '../views/Home/index.vue'
import Categories from '../views/Categories.vue'
import Products from '../views/Products/List.vue'
import ProductDetails from '../views/Products/Details.vue'

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
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.check) {
    next('/login')
  } else if (to.path === '/login' && authStore.check) {
    next('/')
  } else {
    next()
  }
})

export default router