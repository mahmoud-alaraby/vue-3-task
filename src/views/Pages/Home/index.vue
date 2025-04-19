<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h3 mb-6">Welcome to the Dashboard</h1>
        <v-card>
          <v-card-text>
            <p class="text-body-1">
              You are logged in as: {{ authStore.user.name }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>