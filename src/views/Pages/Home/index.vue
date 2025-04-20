<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" class="mx-auto">
        <h4 class="text-h4 my-6">Welcome to the Dashboard</h4>
        <v-card>
          <v-card-text>
            <p class="text-body-1">
              welcome
              <v-chip prepend-icon="mdi-account-circle" color="indigo" class="mx-2">
                {{ auth.user.fullName }}
              </v-chip>
              to the dashboard.
              ,
              you logged in as {{ auth.user.role }}.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" sm="12" class="mb-4">
        <v-card color="indigo" variant="elevated" class="mx-auto">
          <v-card-item>
            <div>

              <div class="text-h6 mb-1">
                Products
              </div>
              <div class="text-caption">
                <v-icon class="mr-2">mdi-package-variant</v-icon>
                <span>100</span>
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="{ name: 'Products' }" color="white" class="d-block ms-auto me-0">
              View All Products
              <v-icon class="mr-2">mdi-arrow-right</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="mb-4">
        <v-card color="secondary" variant="elevated" class="mx-auto">
          <v-card-item>
            <div>

              <div class="text-h6 mb-1">
                users
              </div>
              <div class="text-caption">
                <v-icon class="mr-2">mdi-account-multiple</v-icon>
                <span>200</span>
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="{ name: 'Categories' }" class="d-block ms-auto me-0">
              View All Users
              <v-icon class="mr-2">mdi-arrow-right</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="mb-4">
        <v-card color="indigo" variant="tonal" class="mx-auto">
          <v-card-item>
            <div>

              <div class="text-h6 mb-1">
                Categories
              </div>
              <div class="text-caption">
                <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
                <span>100</span>
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="{ name: 'Categories' }" class="d-block ms-auto me-0">
              View All Categories
              <v-icon class="mr-2">mdi-arrow-right</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>

   
  </v-container>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>