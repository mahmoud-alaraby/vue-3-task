<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-card-title class="text-center pt-6">
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field v-model="username" label="Username" prepend-icon="mdi-account" required />
              <v-text-field v-model="password" label="Password" type="password" prepend-icon="mdi-lock" required />
              <v-alert v-if="error" type="error" class="mb-4">
                Invalid username or password
              </v-alert>
              <v-btn color="primary" block type="submit" :loading="loading">
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = false

  try {
    const success = auth.login(username.value, password.value)
    if (success) {
      await router.push('/')
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>