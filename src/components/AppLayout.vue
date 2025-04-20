<template>
  <v-app>
    <v-navigation-drawer v-if="auth.check" v-model="drawer">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" :prepend-icon="item.icon"
          :title="item.title" />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon v-if="auth.check" @click="drawer = !drawer" />
      <v-app-bar-title>Vue 3 Task</v-app-bar-title>
      <v-spacer />
      <v-menu min-width="200px" v-if="auth.check">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar color="brown" size="large">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>

              <v-btn @click="handleLogout">
                <v-icon>mdi-logout</v-icon>
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()
const drawer = ref(true)

const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Categories', icon: 'mdi-format-list-bulleted', to: '/categories' },
  { title: 'Products', icon: 'mdi-package-variant', to: '/products' }
];


const user = {
  ...auth.user,
  initials: computed(() => {
    const name = auth?.user?.fullName?.split(' ') || []
    return name?.length > 1 ? name[0][0] + name[1][0] : ''
  }),
}

const handleLogout = () => {
  auth.logout()
}
</script>