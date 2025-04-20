<template>
    <v-container>
        <router-link :to="{ name: 'Products' }" class="text-decoration-none" color="primary" variant="text">
            <v-icon icon="mdi-arrow-left"></v-icon> Back to Products
        </router-link>
         <v-divider class="my-5"></v-divider>
        <h3 class="text-h5 my-5">{{ product.title }}</h3>

        <v-card>
            <v-img width="50%" class="rounded" :src="`https://picsum.photos/id/${product.id}/400/300`"></v-img>
            <v-card-title></v-card-title>
            <v-card-text>{{ product.body }}</v-card-text>
        </v-card>
    </v-container>
</template>


<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref([])


const fetchProduct = async () => {
    try {
        const response = await axios.get(`/posts/${route.params.id}`)
        product.value = response.data
    } catch (error) {
        console.error('Error fetching product:', error)
    }
}


onMounted(() => {
    fetchProduct()
});
</script>