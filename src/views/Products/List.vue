<template>
  <v-container>
    <h1 class="text-h3 mb-6">Products (Posts)</h1>
    <v-row>
      <v-col
        v-for="post in posts"
        :key="post.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.body }}</v-card-text>
          <v-card-actions>
            <router-link
              :to="{ name: 'product-details', params: { id: post.id } }"
              class="text-decoration-none"
              color="primary"
              variant="text"
            >
              Read More
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>