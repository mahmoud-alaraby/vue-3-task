<template>
  <v-app>
    <v-navigation-drawer v-if="authStore.isAuthenticated" v-model="drawer">
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        v-if="authStore.isAuthenticated"
        @click="drawer = !drawer"
      />
      <v-app-bar-title>Vue Evaluation</v-app-bar-title>
      <v-spacer />
      <v-btn
        v-if="authStore.isAuthenticated"
        icon
        @click="handleLogout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const drawer = ref(true)

const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Categories', icon: 'mdi-format-list-bulleted', to: '/categories' },
  { title: 'Products', icon: 'mdi-package-variant', to: '/products' }
]

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>