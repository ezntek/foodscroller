<!--
Copyright (c) Eason Qin, 2024.

This source code form is licensed under the MIT/Expat license.
Read LICENSE.md at the root of the project to learn more.

NOTE: the filter feature wasn't implemented due to time constraints
-->

<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { Recipe, type AnyObject } from '@/types'
import { onBeforeMount, ref, type Ref } from 'vue'
import RecipeView from './RecipeView.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const recipes: Ref<Array<Recipe>> = ref([])
const selectedRecipeIndex = ref(0)
const showMain = ref(true)

const getMoreRecipes = async () => {
    let apikey = '21905d62d3464212837e7d28eb7b2941'
    let options = ''

    // get diet from local storage
    let diet = window.localStorage.getItem('diet')
    if (diet === null) {
        diet = 'Non-Vegetarian'
    }

    options += `&diet=${diet.replace('-', ' ').toLowerCase()}`

    // get allergies from local storage
    let intolerances = window.localStorage.getItem('allergies')
    if (intolerances !== null && intolerances !== '') {
        let newOption = `&intolerances=${intolerances.replace(new RegExp(';', 'g'), ',').toLowerCase()}`
        options += newOption
    }

    // get pantry from local storage
    let includeIngredients = window.localStorage.getItem('pantry')
    if (includeIngredients !== null) {
        let newOption = `&includeIngredients=${includeIngredients.replace(new RegExp(';', 'g'), ',').toLowerCase()}`
        options += newOption
    }

    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&ranking=2&number=50&addRecipeInstructions=true&addRecipeInformation=true${options}`
    console.log(url)
    try {
        let response = await fetch(url, { method: 'GET' })
        let result = await response.text()

        let results: Array<AnyObject> = JSON.parse(result)['results']
        results.forEach((recipeObj: AnyObject) => {
            recipes.value.push(new Recipe(recipeObj))
        })
    } catch (error) {
        console.error(error)
    }
}

onBeforeMount(async () => {
    getMoreRecipes()
})

const openRecipe = (index: number) => {
    selectedRecipeIndex.value = index
    showMain.value = !showMain.value
}
</script>

<template>
    <div v-if="showMain">
        <h1 class="title">DISCOVER RECIPES</h1>
        <br />
        <main>
            <div v-if="recipes.length > 0">
                <div v-for="(recipe, index) in recipes" :key="index">
                    <button class="null-button" @click="openRecipe(index)">
                        <RecipeCard :recipe-info="recipe"></RecipeCard>
                    </button>
                </div>
            </div>
            <div v-else><p>probably still loading...</p></div>
        </main>
        <button class="back-home-button" @click="getMoreRecipes()">
            <FontAwesomeIcon :icon="fas.faSquarePlus" />
            <span>Load more...</span>
        </button>
    </div>
    <div v-else>
        <RecipeView :recipe-list="recipes" :index="selectedRecipeIndex"></RecipeView>

        <button class="back-home-button" @click="showMain = !showMain">
            <FontAwesomeIcon :icon="fas.faCircleArrowLeft" />
            <span>GO BACK</span>
        </button>
    </div>
</template>

<style scoped>
.back-home-button {
    all: unset;
    border: none;
    background-color: var(--vt-c-red);
    padding: 0.3em;
    padding-left: 0.6em;
    padding-right: 0.6em;
    border-radius: 6px;
    margin: 0.3em;
    color: var(--vt-c-white);
    transition: 300ms;
}
.load-more-button {
    all: unset;
    border: none;
    background-color: var(--vt-c-green);
    padding: 0.3em;
    padding-left: 0.6em;
    padding-right: 0.6em;
    border-radius: 6px;
    margin: 0.3em;
    color: var(--vt-c-white);
    transition: 300ms;
}
back-home-button {
    all: unset;
    border: none;
    background-color: var(--vt-c-red);
    padding: 0.3em;
    padding-left: 0.6em;
    padding-right: 0.6em;
    border-radius: 6px;
    margin: 0.3em;
    color: var(--vt-c-white);
    transition: 300ms;
}

.back-home-button span {
    font-weight: 600;
    margin-left: 0.3em;
}

.back-home-button:hover {
    background-color: #cc2020;
}
</style>
