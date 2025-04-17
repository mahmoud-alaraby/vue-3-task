<template>
    <v-container>
        <h1 class="text-h3 mb-6">Product Details</h1>
        <v-card>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text>{{ product.body }}</v-card-text>
            <v-card-actions>
                <router-link :to="{ name: 'products' }" class="text-decoration-none" color="primary" variant="text">
                    Back to Products
                </router-link>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import { useRoute } from 'vue-router'
const route = useRoute()
const product = ref([])

onMounted(async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        product.value = response.data
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
})
</script>