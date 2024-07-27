<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('https://img.spoonacular.com/recipes/715415-312x231.jpg')
</script>

<template>
    <div class="recipe-card-container">
        <img :src="imageUrl" class="recipe-card-image" />
    </div>
</template>

<style scoped>
.recipe-card-container {
    display: flex;
    background-color: var(--vt-c-divider-dark-1);
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 12px;
    transition: 300ms;
}

.recipe-card-container:hover {
    box-shadow: 0 4px 20px var(--vt-c-indigo);
}

.recipe-card-image {
    width: 218px;
    height: 162px;
}
</style>
