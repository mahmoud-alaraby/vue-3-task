<template>
  <v-container>
    <h4 class="text-h4 my-6">Products (Posts)</h4>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <v-card>
          <v-img width="100%" :src="`https://picsum.photos/id/${product.id}/400/300`"></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle class="text-h6">{{ product.body }}</v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <router-link :to="{ name: 'product-details', params: { id: product.id } }" class="text-decoration-none"
              color="primary" variant="text">
              <v-btn color="primary" variant="text">
                Read More
                <v-icon icon="mdi-arrow-right"></v-icon>
              </v-btn>
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

const products = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/posts')
    products.value = response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>