<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.
-->

<script setup lang="ts">
import BubbleListView from '@/components/BubbleListView.vue'
import RecipeInfoDisplay from '@/components/RecipeInfoDisplay.vue'
import type { Recipe } from '@/types'

interface Props {
    recipeList: Array<Recipe>
    index: number
}

const props = defineProps<Props>()
const recipe = props.recipeList[props.index]
</script>

<template>
    <main>
        <h1 class="title" style="text-align: center; font-size: 2.5rem">{{ recipe.title }}</h1>
        <br />
        <hr />
        <br />
        <div style="display: flex; justify-content: center">
            <img :src="recipe.imageURL" />
        </div>
        <br />
        <div style="display: flex; justify-content: center">
            <RecipeInfoDisplay :recipe-info="recipe" />
        </div>

        <h2 class="subtitle">INGREDIENTS</h2>
        <BubbleListView :items="recipe.ingredients" />

        <h2 class="subtitle">EQUIPMENT</h2>
        <BubbleListView :items="recipe.equipment" />

        <h2 class="subtitle">SUMMARY</h2>
        <div class="recipe-body-container">
            <p v-html="recipe.summary" />
        </div>
        <br />
        <h2 class="subtitle">INSTRUCTIONS</h2>
        <ol>
            <li v-for="(instruction, index) in recipe.instructions" :key="index">
                {{ instruction }}
            </li>
        </ol>
        <br />
    </main>
</template>

<style scoped>
.recipe-p {
    font-size: 1.25em;
}

li {
    font-size: 1.1em;
}

@media (min-width: 1400px) {
    .recipe-body-container {
        max-width: 1000px;
    }
}
</style>
