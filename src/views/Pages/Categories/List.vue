<template>
  <v-container>
    <h4 class="text-h4 my-6">Categories (Users)</h4>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="users"
        :loading="loading"
        hide-default-footer
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Users List</v-toolbar-title>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const loading = ref(true)
const users = ref([])

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Username', key: 'username' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' }
]

onMounted(async () => {
  try {
    const response = await axios.get('/users')
    users.value = response.data
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    loading.value = false
  }
})
</script>