<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script setup lang="ts">
import type { Recipe } from '@/types'
import RecipeInfoDisplay from './RecipeInfoDisplay.vue'

interface Props {
    recipeInfo: Recipe
}

const props = defineProps<Props>()
let title = props.recipeInfo.title.slice(0, 59)
if (props.recipeInfo.title.length > 59) {
    title = title.slice(0, 56) + '...'
}
</script>

<template>
    <div class="recipe-card-container">
        <img :src="props.recipeInfo.imageURL" class="recipe-card-image" />
        <div class="recipe-card-info">
            <h1 class="recipe-card-title">{{ title }}</h1>
            <RecipeInfoDisplay :recipe-info="$props.recipeInfo" />
            <p v-html="$props.recipeInfo.summary" class="recipe-card-description"></p>
        </div>
    </div>
</template>

<style scoped>
.recipe-card-container {
    display: flex;
    padding: 1rem;
    margin: 0.5rem;
    margin-bottom: 1em;
    border-radius: 12px;
    transition: 300ms;
    max-height: 12.5rem;
    background-color: var(--vt-c-divider-dark-2);
}

.recipe-card-description {
    max-height: 4.5rem;
    overflow: hidden;
}

.recipe-card-title {
    font-weight: 600;
}

.recipe-card-container:hover {
    box-shadow: 0 4px 20px var(--vt-c-indigo);
}

.recipe-card-image {
    width: 218px;
    height: 162px;
    margin-right: 1em;
}
</style>
